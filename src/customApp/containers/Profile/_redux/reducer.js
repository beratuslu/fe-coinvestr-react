import actions from "./actions";

const INITIAL_DATA = {
  isSelfProfile: null,
  loading: true,
  error: null,
  data: null,
};
export default function profileReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case actions.UPDATE_COVER_PHOTO_SUCCESS:
      return {
        ...state,
        data: { ...state.data, coverPhoto: action.payload.coverPhoto },
      };
    case actions.UPDATE_PROFILE_PHOTO_SUCCESS:
      return {
        ...state,
        data: { ...state.data, profilePhoto: action.payload.profilePhoto },
      };
    case actions.SET_PROFILE_OWNER:
      return {
        ...state,
        isSelfProfile: action.payload,
      };
    case actions.FETCH_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
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
        trades: action.payload,
      };
    default:
      return state;
  }
}
