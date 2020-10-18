// saga.js
import { all, takeEvery, put, fork, call, select } from "redux-saga/effects";
import { push } from "react-router-redux";
import notifications from "../../../../components/feedback/notification";
import profileActions from "./actions";
import DemoProfileData from "./profile.data";
import axios from "axios";
import actions from "./actions";
const BASE_URL = `/api/v1/profile`;

const getProfileState = (state) => state.profile;
const getAuthState = (state) => state.auth;

const profileTradesRequest = async (payload) => {
  return axios.post(`${BASE_URL}/user-trades`, payload);
};

const profileRequest = async (userName) => {
  return axios.get(`${BASE_URL}/${userName}`);
};

export function* getProfileTrades() {
  try {
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
      console.log("yieldtakeEvery -> error", error.response);

      notifications.error({
        message: "Login Error",
        description: error.response.data.message,
      });
      yield put(actions.resetProfile());
      yield put(push(`/404`));
      // yield put({ type: actions.FETCH_PROFILE_DATA_FAILURE });
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
export function* listenForProfileLocationChange() {
  yield takeEvery("@@router/LOCATION_CHANGE", function*(action) {
    const { pathname } = action.payload.location;
    if (pathname.includes("/dashboard/profile/")) {
      let authState = yield select(getAuthState); // <-- get the profile
      const { user } = authState;
      const userNameFromUrl = pathname.split("/").pop();
      const visitingOwnProfile = userNameFromUrl === user.userName;
      yield put(actions.resetProfile());
      yield put(actions.setProfileOwner(visitingOwnProfile));
      yield put(actions.fetchProfileDataStart(userNameFromUrl));
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
    fork(getProfile),
    fork(changeTradesRecordType),
    fork(changeTradesPageNumber),
    fork(listenForProfileLocationChange),
    // fork(logout)
  ]);
}
