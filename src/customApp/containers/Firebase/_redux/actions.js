const actions = {
  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  FIREBASE_NOTIFICATIONS_START: "FIREBASE_NOTIFICATIONS_START",
  FIREBASE_AUTH_START: "FIREBASE_AUTH_START",
  FIREBASE_AUTH_ERROR: "FIREBASE_AUTH_ERROR",

  // action creators for Stop and Start buttons. You can also put them into componentDidMount
  startChannel: () => ({ type: actions.START_CHANNEL }),
  stopChannel: () => ({ type: actions.STOP_CHANNEL }),
};
export default actions;
