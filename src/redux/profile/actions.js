const profileActions = {
  FETCH_USER_TRADES_START: "FETCH_USER_TRADES_START",
  FETCH_USER_TRADES_SUCCESS: "FETCH_USER_TRADES_SUCCESS",
  FETCH_USER_TRADES_FAILURE: "FETCH_USER_TRADES_FAILURE",

  FETCH_PROFILE_DATA_START: "FETCH_PROFILE_DATA_START",
  FETCH_PROFILE_DATA_SUCCESS: "FETCH_PROFILE_DATA_SUCCESS",
  FETCH_PROFILE_DATA_FAILURE: "FETCH_PROFILE_DATA_FAILURE",

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
  }),

  SET_PROFILE_DATA: "SET_PROFILE_DATA",
  fetchProfileDataStart: () => ({
    type: profileActions.FETCH_PROFILE_DATA_START
  }),
  fetchProfileDataSuccess: profile => ({
    type: profileActions.FETCH_PROFILE_DATA_SUCCESS,
    payload: profile
  }),
  fetchProfileDataFailure: error => ({
    type: profileActions.FETCH_PROFILE_DATA_FAILURE,
    payload: error
  })
};

export default profileActions;
