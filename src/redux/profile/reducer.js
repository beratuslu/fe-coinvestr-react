import profileActions from "./actions";

const INITIAL_DATA = {
  items: [],
  trades: [
    {
      id: 1,
      user: {
        name: "My user"
      },
      pair: "HOT_BTC",
      createdDate: "20/12/2020 15:30:05",
      buyPrice: "0.000000004",
      profitPrice: "0.000000005",
      stopPrice: "0.000000003",
      status: {
        completed: false,
        stopLoss: 10,
        profit: 50,
        remaining: 40
      },
      activities: [
        {
          activity: "buyOrderPlaced",
          createDate: "20/12/2020 15:30:21",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "buyOrderPartiallyFilled",
          createDate: "20/12/2020 15:30:22",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "buyOrderFilled",
          createDate: "20/12/2020 15:30:23",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "profitSellOrderPlaced",
          createDate: "20/12/2020 15:30:24",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "profitSellOrderPartiallyFilled",
          createDate: "20/12/2020 15:30:25",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "profitSellOrderFilled",
          createDate: "20/12/2020 15:30:26",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "stopSellOrderPlaced",
          createDate: "20/12/2020 15:30:27",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "stopSellOrderPartiallyFilled",
          createDate: "20/12/2020 15:30:28",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "stopSellOrderFilled",
          createDate: "20/12/2020 15:30:29",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "profitSellOrderCanceled",
          createDate: "20/12/2020 15:30:30",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "stopSellOrderCanceled",
          createDate: "20/12/2020 15:30:31",
          symbol: "HOT_BTC",
          qty: 50000
        }
      ]
    },
    {
      id: 2,
      user: {
        name: "My user"
      },
      pair: "HOT_BTC",
      createdDate: "20/12/2020 15:30:05",
      buyPrice: "0.000000004",
      profitPrice: "0.000000005",
      stopPrice: "0.000000003",
      status: {
        completed: false,
        stopLoss: 10,
        profit: 50,
        remaining: 40
      },
      activities: [
        {
          activity: "buyOrderPlaced",
          createDate: "20/12/2020 15:30:01",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "buyOrderPartiallyFilled",
          createDate: "20/12/2020 15:30:02",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "buyOrderFilled",
          createDate: "20/12/2020 15:30:03",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "profitSellOrderPlaced",
          createDate: "20/12/2020 15:30:04",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "profitSellOrderPartiallyFilled",
          createDate: "20/12/2020 15:30:05",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "profitSellOrderFilled",
          createDate: "20/12/2020 15:30:06",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "stopSellOrderPlaced",
          createDate: "20/12/2020 15:30:07",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "stopSellOrderPartiallyFilled",
          createDate: "20/12/2020 15:30:08",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "stopSellOrderFilled",
          createDate: "20/12/2020 15:30:09",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "profitSellOrderCanceled",
          createDate: "20/12/2020 15:30:10",
          symbol: "HOT_BTC",
          qty: 50000
        },
        {
          activity: "stopSellOrderCanceled",
          createDate: "20/12/2020 15:30:11",
          symbol: "HOT_BTC",
          qty: 50000
        }
      ]
    }
  ],
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
    default:
      return state;
  }
}
