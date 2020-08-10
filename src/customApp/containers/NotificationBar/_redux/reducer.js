import actions from "./actions";

const initState = { notifications: [], isActivated: false };

export default function notificationBar(state = initState, action) {
  switch (action.type) {
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.payload,
      };

    case actions.SWITCH_NOTIFICATION_BAR:
      return {
        ...state,
        isActivated: !state.isActivated,
      };

    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
