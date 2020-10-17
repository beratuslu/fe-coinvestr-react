const actions = {
  REMOVE_FOLLOWER_FROM_PROFILE: "REMOVE_FOLLOWER_FROM_PROFILE",
  removeFollowerFromProfile: (payload) => ({
    type: actions.REMOVE_FOLLOWER_FROM_PROFILE,
    payload,
  }),
  ADD_FOLLOWER_TO_PROFILE: "ADD_FOLLOWER_TO_PROFILE",
  addFollowerToProfile: (payload) => ({
    type: actions.ADD_FOLLOWER_TO_PROFILE,
    payload,
  }),
  CHANGE_FOLLOW_LIST_MODAL: "CHANGE_FOLLOW_LIST_MODAL",
  changeFollowListModal: (payload) => ({
    type: actions.CHANGE_FOLLOW_LIST_MODAL,
    payload,
  }),
  RESET_PROFILE: "RESET_PROFILE",
  resetProfile: () => ({
    type: actions.RESET_PROFILE,
  }),
  CHANGE_TRADES_PAGE_NUMBER: "CHANGE_TRADES_PAGE_NUMBER",
  changeTradesPageNumber: (payload) => ({
    type: actions.CHANGE_TRADES_PAGE_NUMBER,
    payload,
  }),
  CHANGE_TRADES_RECORD_TYPE: "CHANGE_TRADES_RECORD_TYPE",
  changeTradesRecordType: (payload) => ({
    type: actions.CHANGE_TRADES_RECORD_TYPE,
    payload,
  }),
  UPDATE_COVER_PHOTO_SUCCESS: "UPDATE_COVER_PHOTO_SUCCESS",
  updateCoverPhotoSuccess: (payload) => ({
    type: actions.UPDATE_COVER_PHOTO_SUCCESS,
    payload,
  }),
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
