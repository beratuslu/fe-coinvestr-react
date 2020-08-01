import actions from "./actions";

const initState = {
  taskList: [],
  channelStatus: "off",
  serverStatus: "unknown"
};

// export default function authReducer(state = initState, action) {
//   switch (action.type) {
//     case actions.LOGIN_SUCCESS:
//       return {
//         token: action.token,
//         user: action.user
//       };
//     case actions.LOGOUT:
//       return initState;
//     default:
//       return state;
//   }
// }

export default (state = initState, action) => {
  const { taskList } = state;
  const updatedTaskList = [...taskList, action.payload];
  switch (action.type) {
    case actions.CHANNEL_ON:
      return { ...state, channelStatus: "on" };
    case actions.CHANNEL_OFF:
      return { ...state, channelStatus: "off", serverStatus: "unknown" };
    case actions.ADD_TASK:
      return { ...state, taskList: updatedTaskList };
    case actions.SERVER_OFF:
      return { ...state, serverStatus: "off" };
    case actions.SERVER_ON:
      return { ...state, serverStatus: "on" };
    default:
      return state;
  }
};
