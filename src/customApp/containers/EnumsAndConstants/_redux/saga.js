import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import notifications from "../../../../components/feedback/notification";
import { getToken, clearToken } from "../../../../helpers/utility";
import actions from "./actions";
import axios from "axios";

const fetchDataRequest = async () => {
  return axios.get("/api/v1/meta/enums-and-constants");
};

export function* fetchNotifications() {
  yield takeEvery(actions.FETCH_ENUMS_AND_CONSTANTS_START, function*() {
    try {
      const response = yield call(fetchDataRequest);

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
