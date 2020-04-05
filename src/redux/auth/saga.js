import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import notifications from "../../components/feedback/notification";
import { getToken, clearToken } from "../../helpers/utility";
import actions from "./actions";
import axios from "axios";

const onLoginRequest = async payload => {
  console.log("payload", payload);
  return axios.post("/public/login", {
    email: payload.email,
    password: payload.password
  });
};

export function* loginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function*({ payload }) {
    console.log("yieldtakeEvery -> payload", payload);
    try {
      const loginResult = yield call(onLoginRequest, payload);
      if (loginResult.success) {
        yield put({
          type: actions.LOGIN_SUCCESS,
          token: loginResult.data.token,
          user: loginResult.data.user
        });
      } else {
        //user not found or wrong password
        yield put({ type: actions.LOGIN_ERROR });
      }
    } catch (error) {
      notifications.error({
        message: "Login Failed",
        description: error.message
      });
      // yield put({ type: actions.LOGIN_ERROR });
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    yield localStorage.setItem("token", payload.token);
    yield localStorage.setItem("user", JSON.stringify(payload.user));
    yield put(actions.startSocket(payload.token));
    yield put(push("/dashboard"));
    // this.props.history.push('/dashboard');
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function() {
    notifications.error({
      message: "Login Error",
      description: "Email or Password Invalid."
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
        user
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
    fork(logout)
  ]);
}
