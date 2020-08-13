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
    case actions.NEW_NOTIF_FROM_FIREBASE: {
      const notifications = state.notifications.unshift(action.payload);
      return {
        ...state,
        notifications,
      };
    }

    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
