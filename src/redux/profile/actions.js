const profileActions = {
  FETCH_USER_TRADES_START: "FETCH_USER_TRADES_START",
  FETCH_USER_TRADES_SUCCESS: "FETCH_USER_TRADES_SUCCESS",
  FETCH_USER_TRADES_FAILURE: "FETCH_USER_TRADES_FAILURE",

  fetchUserTradesStart: payload => ({
    type: profileActions.FETCH_USER_TRADES_START
  }),
  fetchUserTradesSuccess: profile => ({
    type: profileActions.FETCH_USER_TRADES_SUCCESS,
    payload: profile
  }),
  fetchUserTradesFailure: error => ({
    type: profileActions.FETCH_USER_TRADES_FAILURE,
    payload: error
  })
};

export default profileActions;
