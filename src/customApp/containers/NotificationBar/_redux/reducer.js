import actions from "./actions";

const initState = { notifications: [] };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.payload,
      };
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
