const actions = {
  UPDATE_PROFILE_PHOTO_SUCCESS: "UPDATE_PROFILE_PHOTO_SUCCESS",
  updateProfilePhotoSuccess: (payload) => ({
    type: actions.UPDATE_PROFILE_PHOTO_SUCCESS,
    payload,
  }),

  SET_PROFILE_OWNER: "SET_PROFILE_OWNER",
  setProfileOwner: (isProfileOwner) => ({
    type: actions.SET_PROFILE_OWNER,
    payload: isProfileOwner,
  }),

  FETCH_USER_TRADES_START: "FETCH_USER_TRADES_START",
  FETCH_USER_TRADES_SUCCESS: "FETCH_USER_TRADES_SUCCESS",
  FETCH_USER_TRADES_FAILURE: "FETCH_USER_TRADES_FAILURE",

  fetchUserTradesStart: (payload) => ({
    type: actions.FETCH_USER_TRADES_START,
    payload,
  }),
  fetchUserTradesSuccess: (profile) => ({
    type: actions.FETCH_USER_TRADES_SUCCESS,
    payload: profile,
  }),
  fetchUserTradesFailure: (error) => ({
    type: actions.FETCH_USER_TRADES_FAILURE,
    payload: error,
  }),

  FETCH_PROFILE_DATA_START: "FETCH_PROFILE_DATA_START",
  FETCH_PROFILE_DATA_SUCCESS: "FETCH_PROFILE_DATA_SUCCESS",
  FETCH_PROFILE_DATA_FAILURE: "FETCH_PROFILE_DATA_FAILURE",
  SET_PROFILE_DATA: "SET_PROFILE_DATA",

  fetchProfileDataStart: (userName) => ({
    type: actions.FETCH_PROFILE_DATA_START,
    userName,
  }),
  fetchProfileDataSuccess: (profile) => ({
    type: actions.FETCH_PROFILE_DATA_SUCCESS,
    payload: profile,
  }),
  fetchProfileDataFailure: (error) => ({
    type: actions.FETCH_PROFILE_DATA_FAILURE,
    payload: error,
  }),
};

export default actions;
