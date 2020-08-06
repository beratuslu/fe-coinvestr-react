const actions = {
  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGOUT: "LOGOUT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  ADD_TASK: "ADD_TASK",
  START_CHANNEL: "START_CHANNEL",
  STOP_CHANNEL: "STOP_CHANNEL",
  CHANNEL_ON: "CHANNEL_ON",
  CHANNEL_OFF: "CHANNEL_OFF",
  SERVER_ON: "SERVER_ON",
  SERVER_OFF: "SERVER_OFF",

  // action creators for Stop and Start buttons. You can also put them into componentDidMount
  startChannel: () => ({ type: actions.START_CHANNEL }),
  stopChannel: () => ({ type: actions.STOP_CHANNEL }),
};
export default actions;
