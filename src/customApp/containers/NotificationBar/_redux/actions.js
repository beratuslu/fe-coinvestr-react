const actions = {
  FETCH_NOTIFICATIONS_START: "FETCH_NOTIFICATIONS_START",
  FETCH_NOTIFICATIONS_SUCCESS: "FETCH_NOTIFICATIONS_SUCCESS",
  FETCH_NOTIFICATIONS_FAILURE: "FETCH_NOTIFICATIONS_FAILURE",

  MARK_NOTIFICATIONS_AS_READ_REQUEST: "MARK_NOTIFICATIONS_AS_READ_REQUEST",
  MARK_NOTIFICATIONS_AS_READ_SUCCESS: "MARK_NOTIFICATIONS_AS_READ_SUCCESS",
  MARK_NOTIFICATIONS_AS_READ_ERROR: "MARK_NOTIFICATIONS_AS_READ_ERROR",

  SWITCH_NOTIFICATION_BAR: "SWITCH_NOTIFICATION_BAR",

  fetchNotifications: () => ({ type: actions.FETCH_NOTIFICATIONS_START }),
  markNotificationsAsRead: (payload) => ({
    type: actions.MARK_NOTIFICATIONS_AS_READ_REQUEST,
    payload,
  }),
};
export default actions;
