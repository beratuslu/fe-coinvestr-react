import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import scrumBoardActions from "../../../redux/scrumBoard/actions";
import Collapses from "../../../components/uielements/collapse";
import Pagination from "../../../components/uielements/pagination";
import { Icon } from "antd";
import Timeline, {
  TimelineItem
} from "../../../components/uielements/timeline";
import { RadioButton, RadioGroup } from "../../../components/uielements/radio";

import Box from "../../../components/utility/box";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { filterProjects } from "../../../helpers/filterProjects";
// import CollapseWrapper from "./collapse.style";
import {
  TradeListWrapper,
  Table,
  SwitchButtonsWrapper,
  CollapseWrapper,
  PaginationWrapper
} from "./TradeList.style";
import TradeCollapseHeader from "./TradeCollapseHeader/TradeCollapseHeader";

import IntlMessages from "../../../components/utility/intlMessages";

const Panel = Collapses.Panel;
const Collapse = props => (
  <CollapseWrapper>
    <Collapses {...props}>{props.children}</Collapses>
  </CollapseWrapper>
);

class TradeList extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      search: "All"
    };
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }
  colors = {
    buyOrder: "blue",
    buyOrderPartiallyFilled: "green",
    buyOrderFilled: "green",

    profitSellOrder: "blue",
    profitSellOrderPartiallyFilled: "green",
    profitSellOrderFilled: "green",

    stopSellOrder: "#faad14",
    stopSellOrderPartiallyFilled: "red",
    stopSellOrderFilled: "red",

    profitSellOrderCanceled: "gray",
    stopSellOrderCanceled: "gray"
  };

  renderTradeActivities(activities) {
    return activities.map(item => {
      let text = "";
      let dot = null;
      if (item.activity === "buyOrder") {
        text = `${item.createDate} | Buy Order Placed | ${item.qty} ${item.symbol}`;
      }
      if (item.activity === "buyOrderPartiallyFilled") {
        text = `${item.createDate} | Buy Order Partially Filled | ${item.qty} ${item.symbol}`;
      }
      if (item.activity === "buyOrderFilled") {
        text = `${item.createDate} | Buy Order Filled | ${item.qty} ${item.symbol}`;
      }

      if (item.activity === "profitSellOrder") {
        text = `${item.createDate} | Profit Sell Order | ${item.qty} ${item.symbol}`;
      }
      if (item.activity === "profitSellOrderPartiallyFilled") {
        text = `${item.createDate} | Profit Sell Order Partially Filled | ${item.qty} ${item.symbol}`;
        dot = <Icon type="plus-circle" style={{ fontSize: "14px" }} />;
      }
      if (item.activity === "profitSellOrderFilled") {
        text = `${item.createDate} | Profit Sell Order Filled | ${item.qty} ${item.symbol}`;
        dot = <Icon type="check-circle" style={{ fontSize: "16px" }} />;
      }

      if (item.activity === "stopSellOrder") {
        text = `${item.createDate} |  Stop Sell Order | ${item.qty} ${item.symbol}`;
      }
      if (item.activity === "stopSellOrderPartiallyFilled") {
        text = `${item.createDate} | Stop Sell Order Partially Filled | ${item.qty} ${item.symbol}`;
        dot = <Icon type="minus-circle" style={{ fontSize: "14px" }} />;
      }
      if (item.activity === "stopSellOrderFilled") {
        text = `${item.createDate} | Stop Sell Order Filled | ${item.qty} ${item.symbol}`;
        dot = <Icon type="close-circle" style={{ fontSize: "16px" }} />;
      }

      if (item.activity === "profitSellOrderCanceled") {
        text = `${item.createDate} | Profit Sell Order Canceled | ${item.qty} ${item.symbol}`;
      }
      if (item.activity === "stopSellOrderCanceled") {
        text = `${item.createDate} | Stop Sell Order Canceled | ${item.qty} ${item.symbol}`;
      }

      return (
        <TimelineItem
          dot={dot}
          key={item.createDate}
          color={this.colors[item.activity]}
        >
          {text}
        </TimelineItem>
      );
    });
  }

  renderTrades(trades) {
    const tradesJsx = trades.map(trade => {
      return (
        <Panel header={<TradeCollapseHeader item={trade} />} key={trade.id}>
          <br />
          <Timeline>{this.renderTradeActivities(trade.activities)}</Timeline>
        </Panel>
      );
    });
    return <Collapse>{tradesJsx}</Collapse>;
  }
  render() {
    const { trades } = this.props;

    return (
      <LayoutWrapper>
        <SwitchButtonsWrapper>
          <RadioGroup
            value={this.state.search}
            onChange={this.onChange}
            className="isoTradeType"
          >
            <RadioButton value="MyTrades">My Trades</RadioButton>
            <RadioButton value="CopiedTrades">Copied Trades</RadioButton>
          </RadioGroup>
        </SwitchButtonsWrapper>
        <Box className="container">
          <TradeListWrapper>
            {!isEmpty(trades) ? (
              <>
                <div className="collapseWrapper">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <span>User-</span>
                        </td>
                        <td>Pair</td>
                        <td>Create Date</td>
                        <td>Buy Price</td>
                        <td>Profit Price</td>
                        <td>Stop Price</td>
                        <td>Status</td>
                      </tr>
                    </tbody>
                  </Table>
                  {this.renderTrades(trades)}
                </div>
              </>
            ) : (
              <div>No trades.</div>
            )}
          </TradeListWrapper>
          <PaginationWrapper>
            <Pagination
              defaultCurrent={6}
              total={60}
              onChange={page => {
                // onPageChange(searchText, page);
              }}
            />
          </PaginationWrapper>
        </Box>
      </LayoutWrapper>
    );
  }
}

export default connect(
  state => ({
    boards: filterProjects(state.scrumBoard.boards, state.scrumBoard.searchText)
  }),
  { ...scrumBoardActions }
)(TradeList);
