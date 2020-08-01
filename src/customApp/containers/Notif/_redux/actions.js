const actions = {
  FETCH_NOTIFICATIONS_START: "FETCH_NOTIFICATIONS_START",
  FETCH_NOTIFICATIONS_SUCCESS: "FETCH_NOTIFICATIONS_SUCCESS",
  FETCH_NOTIFICATIONS_FAILURE: "FETCH_NOTIFICATIONS_FAILURE",

  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT: "LOGOUT",
  checkAuthorization: () => ({ type: actions.FETCH_NOTIFICATIONS_START }),
  login: (payload) => ({
    type: actions.LOGIN_REQUEST,
    payload,
  }),
  startSocket: (token) => ({
    type: "START_CHANNEL",
    token,
  }),

  logout: () => ({
    type: actions.LOGOUT,
  }),
};
export default actions;
