import actions from "./actions";

const initState = { token: null };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case "UPDATE_PROFILE_PHOTO_SUCCESS":
      return {
        ...state,
        user: { ...state.user, profilePhoto: action.payload.profilePhoto },
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        user: action.user,
      };
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
