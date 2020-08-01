const actions = {
  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT: "LOGOUT",
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: payload => ({
    type: actions.LOGIN_REQUEST,
    payload
  }),
  startSocket: token => ({
    type: "START_CHANNEL",
    token
  }),

  logout: () => ({
    type: actions.LOGOUT
  })
};
export default actions;
