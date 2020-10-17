import actions from "./actions";

const INITIAL_DATA = {
  isSelfProfile: null,
  loading: true,
  error: null,
  profile: {},

  trades: [],
  tradesPageNumber: 1,
  tradesPageSize: 10,
  tradesTotalRecord: null,
  tradesRecordType: "myTrades", //copiedTrades

  followListModal: false,
};
export default function profileReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case actions.ADD_FOLLOWER_TO_PROFILE: {
      const followers = state.profile.followers.push(action.payload);
      return {
        ...state,
        profile: { ...state.profile, ...followers },
      };
    }
    case actions.CHANGE_FOLLOW_LIST_MODAL:
      return {
        ...state,
        followListModal: action.payload,
      };
    case actions.CHANGE_TRADES_PAGE_NUMBER:
      return {
        ...state,
        tradesPageNumber: action.payload,
      };
    case actions.RESET_PROFILE:
      return { ...INITIAL_DATA };
    case actions.CHANGE_TRADES_RECORD_TYPE:
      return {
        ...state,
        tradesRecordType: action.payload,
        tradesPageNumber: 1,
      };
    case actions.UPDATE_COVER_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, coverPhoto: action.payload.coverPhoto },
      };
    case actions.UPDATE_PROFILE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          profilePhoto: action.payload.profilePhoto,
        },
      };
    case actions.SET_PROFILE_OWNER:
      return {
        ...state,
        isSelfProfile: action.payload,
      };
    case actions.FETCH_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: null,
      };
    case actions.FETCH_PROFILE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.FETCH_USER_TRADES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        trades: action.payload.data,
        tradesTotalRecord: action.payload.pagination.totalRecord,
      };
    default:
      return state;
  }
}
