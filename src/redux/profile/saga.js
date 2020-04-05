// saga.js
import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import notifications from "../../components/feedback/notification";
import profileActions from "./actions";
import DemoProfileData from "./profile.data";
import axios from "axios";
import actions from "./actions";
const BASE_URL = `/api/v1/trades`;

const userTradesRequest = async credentials => {
  return axios.post(`${BASE_URL}/user-trades`, {
    email: credentials.email,
    password: credentials.password
  });
};

export function* userTrades() {
  yield takeEvery(actions.FETCH_USER_TRADES_START, function*({ credentials }) {
    try {
      const loginResult = yield call(userTradesRequest, credentials);
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

function* fetchProfileDataEffect() {
  try {
    let profile = DemoProfileData;
    yield put(profileActions.fetchProfileDataSuccess(profile));
  } catch (error) {
    yield put(profileActions.fetchProfileDataFailure(error));
  }
}

export default function* profileSaga() {
  yield all([
    fork(userTrades),
    fork(fetchProfileDataEffect)
    // fork(loginSuccess),
    // fork(loginError),
    // fork(logout)
  ]);
}
