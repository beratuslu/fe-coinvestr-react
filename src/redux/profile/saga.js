// saga.js
import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import notifications from "../../components/feedback/notification";
import profileActions from "./actions";
import DemoProfileData from "./profile.data";
import axios from "axios";
import actions from "./actions";
const BASE_URL = `/api/v1/trades`;

const userTradesRequest = async (payload) => {
  return axios.post(`${BASE_URL}/user-trades`, payload);
};

export function* userTrades() {
  yield takeEvery(actions.FETCH_USER_TRADES_START, function*({ payload }) {
    try {
      const loginResult = yield call(userTradesRequest, payload);
      console.log("yieldtakeEvery -> loginResult", loginResult);

      yield put({
        type: actions.FETCH_USER_TRADES_SUCCESS,
        payload: loginResult.data,
      });
    } catch (error) {
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
    // fork(fetchProfileDataEffect)
    // fork(loginSuccess),
    // fork(loginError),
    // fork(logout)
  ]);
}
