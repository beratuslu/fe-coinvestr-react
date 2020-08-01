import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import notifications from "../../../../components/feedback/notification";
import { getToken, clearToken } from "../../../../helpers/utility";
import actions from "./actions";
import axios from "axios";

const onLoginRequest = async (payload) => {
  return axios.post("/public/login", {
    email: payload.email,
    password: payload.password,
  });
};

const fetchDataRequest = async () => {
  return axios.get("/api/v1/meta/enums-and-constants");
};

export function* loginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function*({ payload }) {
    try {
      const loginResult = yield call(onLoginRequest, payload);
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: loginResult.data.token,
        user: loginResult.data.user,
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
    yield localStorage.setItem("token", payload.token);
    yield localStorage.setItem("user", JSON.stringify(payload.user));
    yield (axios.defaults.headers.common = {
      Authorization: `Bearer ${payload.token}`,
    });
    yield put(actions.startSocket(payload.token));
    // yield put(push("/dashboard"));
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
export function* fetchNotifications() {
  yield takeEvery(actions.FETCH_ENUMS_AND_CONSTANTS_START, function*() {
    try {
      const response = yield call(fetchDataRequest);
      console.log("yieldtakeEvery -> response", response);

      yield put({
        type: actions.FETCH_ENUMS_AND_CONSTANTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      yield put({
        type: actions.FETCH_ENUMS_AND_CONSTANTS_FAILURE,
        payload: {
          message: error.response.data.message || error.message,
        },
      });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(fetchNotifications),
    // fork(loginRequest),
    // fork(loginSuccess),
    // fork(loginError),
    // fork(logout),
  ]);
}
