// saga.js
import { all, takeEvery, put, fork, call, select } from "redux-saga/effects";
import notifications from "../../../../components/feedback/notification";
import profileActions from "./actions";
import DemoProfileData from "./profile.data";
import axios from "axios";
import actions from "./actions";
const BASE_URL = `/api/v1/profile`;

const profileTradesRequest = async (payload) => {
  return axios.post(`${BASE_URL}/user-trades`, payload);
};

const profileRequest = async (userName) => {
  return axios.get(`${BASE_URL}/${userName}`);
};

export function* getProfileTrades() {
  try {
    const getProfileState = (state) => state.profile;
    let profileState = yield select(getProfileState); // <-- get the notifications

    const {
      tradesPageSize: pageSize,
      tradesPageNumber: pageNumber,
      tradesRecordType: recordType,
      isSelfProfile,
      profile,
    } = profileState;

    const requestObj = {
      recordType,
      pagination: { pageSize, pageNumber },
    };

    if (!isSelfProfile) {
      requestObj.userId = profile.id;
    }

    const result = yield call(profileTradesRequest, requestObj);
    console.log("function*getProfileTrades -> result", result);

    yield put({
      type: actions.FETCH_USER_TRADES_SUCCESS,
      payload: result,
    });
  } catch (error) {
    // yield put({ type: actions.LOGIN_ERROR });
  }
}
export function* getProfile() {
  yield takeEvery(actions.FETCH_PROFILE_DATA_START, function*({ userName }) {
    try {
      const result = yield call(profileRequest, userName);

      yield put({
        type: actions.FETCH_PROFILE_DATA_SUCCESS,
        payload: result.data,
      });
      yield fork(getProfileTrades);
    } catch (error) {
      yield put({ type: actions.FETCH_PROFILE_DATA_FAILURE });
    }
  });
}
export function* changeTradesRecordType() {
  yield takeEvery(actions.CHANGE_TRADES_RECORD_TYPE, function*(action) {
    yield fork(getProfileTrades);
  });
}
export function* changeTradesPageNumber() {
  yield takeEvery(actions.CHANGE_TRADES_PAGE_NUMBER, function*(action) {
    yield fork(getProfileTrades);
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
    fork(getProfile),
    fork(getProfileTrades),
    fork(changeTradesRecordType),
    fork(changeTradesPageNumber),
    // fork(loginError),
    // fork(logout)
  ]);
}
