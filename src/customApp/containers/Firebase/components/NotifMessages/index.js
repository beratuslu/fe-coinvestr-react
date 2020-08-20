import InsufficientBalanceForSocketCheck from "./InsufficientBalanceForSocketCheck";
import CopyTradeStart from "./CopyTradeStart";
import CopyTradeFailedDueToInsufficientBalance from "./CopyTradeFailedDueToInsufficientBalance";
import CopyTradeActivityBuyOrderPlaced from "./CopyTradeActivityBuyOrderPlaced";
import CopyTradeActivityBuyOrderFilledPartially from "./CopyTradeActivityBuyOrderFilledPartially";
import CopyTradeActivityBuyOrderFilled from "./CopyTradeActivityBuyOrderFilled";
import CopyTradeActivityProfitSellOrderFilledPartially from "./CopyTradeActivityProfitSellOrderFilledPartially";
import CopyTradeActivityProfitSellOrderFilled from "./CopyTradeActivityProfitSellOrderFilled";
import CopyTradeActivityStopSellOrderFilledPartially from "./CopyTradeActivityStopSellOrderFilledPartially";

export default {
  INSUFFICIENT_BALANCE_FOR_SOCKET_CHECK: InsufficientBalanceForSocketCheck,
  COPY_TRADE_START: CopyTradeStart,
  COPY_TRADE_FAILED_DUE_TO_INSUFFICIENT_BALANCE: CopyTradeFailedDueToInsufficientBalance,
  COPY_TRADE_ACTIVITY_BUY_ORDER_PLACED: CopyTradeActivityBuyOrderPlaced,
  COPY_TRADE_ACTIVITY_BUY_ORDER_FILLED_PARTIALLY: CopyTradeActivityBuyOrderFilledPartially,
  COPY_TRADE_ACTIVITY_BUY_ORDER_FILLED: CopyTradeActivityBuyOrderFilled,
  COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_FILLED_PARTIALLY: CopyTradeActivityProfitSellOrderFilledPartially,
  COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_FILLED: CopyTradeActivityProfitSellOrderFilled,
  COPY_TRADE_ACTIVITY_STOP_SELL_ORDER_FILLED_PARTIALLY: CopyTradeActivityStopSellOrderFilledPartially,
};
