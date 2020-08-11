import { all, takeEvery, put, fork, call, select } from "redux-saga/effects";
import { push } from "react-router-redux";
import notifications from "../../../../components/feedback/notification";
import { getToken, clearToken } from "../../../../helpers/utility";
import actions from "./actions";
import axios from "axios";

const fetchNotificationsRequest = async (payload) => {
  return axios.post("/api/v1/notifications", payload);
};
const markNotificationsAsReadRequest = async (payload) => {
  return axios.post("/api/v1/notifications/mark-notifications-as-read", {
    notifIdArr: payload,
  });
};

export function* fetchNotifications() {
  yield takeEvery(actions.FETCH_NOTIFICATIONS_START, function*(action) {
    try {
      const response = yield call(fetchNotificationsRequest, action.payload);
      yield put({
        type: actions.FETCH_NOTIFICATIONS_SUCCESS,
        payload: response.data,
      });
      if (action.initial) {
        yield put({
          type: "FIREBASE_NOTIFICATIONS_START",
          payload: response.data[0].id,
        });
      }
    } catch (error) {
      yield put({
        type: actions.FETCH_NOTIFICATIONS_ERROR,
        payload: {
          message: error.response.data.message || error.message,
        },
      });
    }
  });
}

const getNotifState = (state) => state.notifications;

export function* markNotificationsAsRead() {
  yield takeEvery(actions.MARK_NOTIFICATIONS_AS_READ_REQUEST, function*(
    action
  ) {
    try {
      const response = yield call(
        markNotificationsAsReadRequest,
        action.payload
      );
      yield put({
        type: actions.MARK_NOTIFICATIONS_AS_READ_SUCCESS,
        payload: response.data,
      });

      let notifState = yield select(getNotifState); // <-- get the notifications
      yield put({
        type: "FETCH_NOTIFICATIONS_START",
        payload: {
          pagination: {
            pageSize: notifState.notifications.length,
            pageNumber: 1,
          },
        },
      });
    } catch (error) {
      yield put({
        type: actions.MARK_NOTIFICATIONS_AS_READ_ERROR,
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
    fork(markNotificationsAsRead),

    // fork(loginRequest),
    // fork(loginSuccess),
    // fork(loginError),
    // fork(logout),
  ]);
}
