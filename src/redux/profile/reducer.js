import profileActions from "./actions";

const INITIAL_DATA = {
  isFollowed: false,
  selfProfile: null,
  items: [],
  trades: [],
  loading: true,
  error: null
};
export default function profileReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case profileActions.FETCH_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case profileActions.FETCH_PROFILE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case profileActions.FETCH_USER_TRADES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        trades: action.payload
      };
    default:
      return state;
  }
}
