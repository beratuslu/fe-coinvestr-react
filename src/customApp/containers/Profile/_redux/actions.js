const profileActions = {
  SET_PROFILE_OWNER: "SET_PROFILE_OWNER",
  setProfileOwner: (isProfileOwner) => ({
    type: profileActions.SET_PROFILE_OWNER,
    payload: isProfileOwner,
  }),

  FETCH_USER_TRADES_START: "FETCH_USER_TRADES_START",
  FETCH_USER_TRADES_SUCCESS: "FETCH_USER_TRADES_SUCCESS",
  FETCH_USER_TRADES_FAILURE: "FETCH_USER_TRADES_FAILURE",

  fetchUserTradesStart: (payload) => ({
    type: profileActions.FETCH_USER_TRADES_START,
    payload,
  }),
  fetchUserTradesSuccess: (profile) => ({
    type: profileActions.FETCH_USER_TRADES_SUCCESS,
    payload: profile,
  }),
  fetchUserTradesFailure: (error) => ({
    type: profileActions.FETCH_USER_TRADES_FAILURE,
    payload: error,
  }),

  FETCH_PROFILE_DATA_START: "FETCH_PROFILE_DATA_START",
  FETCH_PROFILE_DATA_SUCCESS: "FETCH_PROFILE_DATA_SUCCESS",
  FETCH_PROFILE_DATA_FAILURE: "FETCH_PROFILE_DATA_FAILURE",
  SET_PROFILE_DATA: "SET_PROFILE_DATA",

  fetchProfileDataStart: (userName) => ({
    type: profileActions.FETCH_PROFILE_DATA_START,
    userName,
  }),
  fetchProfileDataSuccess: (profile) => ({
    type: profileActions.FETCH_PROFILE_DATA_SUCCESS,
    payload: profile,
  }),
  fetchProfileDataFailure: (error) => ({
    type: profileActions.FETCH_PROFILE_DATA_FAILURE,
    payload: error,
  }),
};

export default profileActions;
