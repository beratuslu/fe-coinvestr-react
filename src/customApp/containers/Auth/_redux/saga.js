import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import notifications from "../../../../components/feedback/notification";
import enumActions from "../../EnumsAndConstants/_redux/actions";
import { getToken, clearToken } from "../../../../helpers/utility";
import actions from "./actions";
import axios from "axios";

const onLoginRequest = async (payload) => {
  return axios.post("/auth/login", {
    email: payload.email,
    password: payload.password,
  });
};

export function* loginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function*({ payload }) {
    try {
      const loginResult = yield call(onLoginRequest, payload);
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: loginResult.data.token,
        user: loginResult.data.user,
        loginRequest: true,
      });
    } catch (error) {
      yield put({
        type: actions.LOGIN_ERROR,
        payload: {
          message: error.response.data.message || error.message,
        },
      });
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    // console.log("asdsssss");

    yield localStorage.setItem("token", payload.token);
    yield localStorage.setItem("user", JSON.stringify(payload.user));
    yield (axios.defaults.headers.common = {
      Authorization: `bearer ${payload.token}`,
    });

    yield put(enumActions.fetchEnums());
    yield put({
      type: "FETCH_NOTIFICATIONS_START",
      payload: { pagination: { pageSize: 45, pageNumber: 1 } },
      initial: true,
    });
    if (payload.loginRequest) {
      yield put(push(`/dashboard/profile/${payload.user.userName}`));
    }
    // yield put(
    //   push(
    //     "/dashboard/profile/asdsssasdsssasdsssasdsssasdsssasdsssasdsssasdsssasdsssasdsssasdsssasdsssasdsssasdsssasdsssasdsssasdsss"
    //   )
    // );
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function({ payload }) {
    notifications.error({
      message: "Login Error",
      description: payload.message,
    });
  });
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    clearToken();
    yield put(push("/"));
  });
}
export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
    const token = getToken().token;
    const user = getToken().user;
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token,
        user,
      });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
  ]);
}
