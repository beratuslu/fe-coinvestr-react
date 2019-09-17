import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import { getToken, clearToken } from "../../helpers/utility";
import actions from "./actions";
import notifications from "../../components/feedback/notification";
const loginUrl = `http://localhost:5001/public/login`;
const fakeApiCall = true; // auth0 or express JWT

const onLoginRequest = async credentials => {
  return await fetch(`${loginUrl}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password
    })
  })
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);
};

export function* loginRequest() {
  yield takeEvery("LOGIN_REQUEST", function*({ credentials }) {
    try {
      const loginResult = yield call(onLoginRequest, credentials);
      if (loginResult.status) {
        console.log("TCL: yieldtakeEvery -> loginResult", loginResult);
        //response.success

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
      //an error occured.
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    yield localStorage.setItem("token", payload.token);
    yield put(actions.startSocket(payload.token));
    yield put(push("/dashboard"));
    // this.props.history.push('/dashboard');
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {
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
