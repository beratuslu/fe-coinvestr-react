// saga.js
import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import notifications from "../../../../components/feedback/notification";
import profileActions from "./actions";
import DemoProfileData from "./profile.data";
import axios from "axios";
import actions from "./actions";
const BASE_URL = `/api/v1/profile`;

const userTradesRequest = async (payload) => {
  return axios.post(`${BASE_URL}/user-trades`, payload);
};

const profileRequest = async (userName) => {
  return axios.get(`${BASE_URL}/${userName}`);
};

export function* userTrades() {
  yield takeEvery(actions.FETCH_USER_TRADES_START, function*({ payload }) {
    try {
      const loginResult = yield call(userTradesRequest, payload);

      yield put({
        type: actions.FETCH_USER_TRADES_SUCCESS,
        payload: loginResult.data,
      });
    } catch (error) {
      // yield put({ type: actions.LOGIN_ERROR });
    }
  });
}
export function* getProfile() {
  yield takeEvery(actions.FETCH_PROFILE_DATA_START, function*({ userName }) {
    try {
      const result = yield call(profileRequest, userName);

      yield put({
        type: actions.FETCH_PROFILE_DATA_SUCCESS,
        payload: result.data,
      });
    } catch (error) {
      yield put({ type: actions.FETCH_PROFILE_DATA_FAILURE });
    }
  });
}

// function* fetchProfileDataEffect() {
//   try {
//     let profile = DemoProfileData;
//     yield put(profileActions.fetchProfileDataSuccess(profile));
//   } catch (error) {
//     yield put(profileActions.fetchProfileDataFailure(error));
//   }
// }

export default function* profileSaga() {
  yield all([
    fork(userTrades),
    // fork(fetchProfileDataEffect),
    fork(getProfile),
    // fork(loginError),
    // fork(logout)
  ]);
}
