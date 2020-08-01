const actions = {
  FETCH_ENUMS_AND_CONSTANTS_START: "FETCH_ENUMS_AND_CONSTANTS_START",
  FETCH_ENUMS_AND_CONSTANTS_SUCCESS: "FETCH_ENUMS_AND_CONSTANTS_SUCCESS",
  FETCH_ENUMS_AND_CONSTANTS_FAILURE: "FETCH_ENUMS_AND_CONSTANTS_FAILURE",

  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT: "LOGOUT",
  fetchEnums: () => ({ type: actions.FETCH_ENUMS_AND_CONSTANTS_START }),
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
