import actions from "./actions";

const initState = { enumsAndConstants: {} };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.FETCH_ENUMS_AND_CONSTANTS_SUCCESS:
      return {
        ...state,
        enumsAndConstants: action.payload,
      };
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
