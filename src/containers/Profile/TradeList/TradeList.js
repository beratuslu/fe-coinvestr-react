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
import actions from "../../../redux/profile/actions";
import {
  TradeListWrapper,
  Table,
  SwitchButtonsWrapper,
  CollapseWrapper,
  PaginationWrapper,
  ActivityWrapper
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
  componentDidMount() {
    // this.props.dispatch(actions.fetchUserTradesStart());
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }
  colors = {
    buyOrderPlaced: "blue",
    buyOrderPartiallyFilled: "green",
    buyOrderFilled: "green",

    profitSellOrderPlaced: "blue",
    profitSellOrderPartiallyFilled: "green",
    profitSellOrderFilled: "green",

    stopSellOrderPlaced: "#faad14",
    stopSellOrderPartiallyFilled: "red",
    stopSellOrderFilled: "red",

    profitSellOrderCanceled: "gray",
    stopSellOrderCanceled: "gray"
  };

  renderTradeActivities(activities) {
    return activities.map(item => {
      let text = "";
      let dot = null;
      if (item.activity === "buyOrderPlaced") {
        text = `${item.createDate} | Buy Order Placed | ${item.qty} ${item.symbol}`;
        text = (
          <ActivityWrapper>
            <span className="activity">Buy Order Placed</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
      }
      if (item.activity === "buyOrderPartiallyFilled") {
        text = `${item.createDate} | Buy Order Partially Filled | ${item.qty} ${item.symbol}`;

        text = (
          <ActivityWrapper>
            <span className="activity">Buy Order Partially Filled</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
      }
      if (item.activity === "buyOrderFilled") {
        text = `${item.createDate} | Buy Order Filled | ${item.qty} ${item.symbol}`;

        text = (
          <ActivityWrapper>
            <span className="activity">Buy Order Filled</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
      }

      if (item.activity === "profitSellOrderPlaced") {
        text = `${item.createDate} | Profit Sell Order Placed | ${item.qty} ${item.symbol}`;

        text = (
          <ActivityWrapper>
            <span className="activity">Profit Sell Order Placed</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
      }
      if (item.activity === "profitSellOrderPartiallyFilled") {
        text = `${item.createDate} | Profit Sell Order Partially Filled | ${item.qty} ${item.symbol}`;

        text = (
          <ActivityWrapper>
            <span className="activity">Profit Sell Order Partially Filled</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
        dot = <Icon type="plus-circle" style={{ fontSize: "14px" }} />;
      }
      if (item.activity === "profitSellOrderFilled") {
        text = `${item.createDate} | Profit Sell Order Filled | ${item.qty} ${item.symbol}`;

        text = (
          <ActivityWrapper>
            <span className="activity">Profit Sell Order Filled</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
        dot = <Icon type="check-circle" style={{ fontSize: "16px" }} />;
      }

      if (item.activity === "stopSellOrderPlaced") {
        text = `${item.createDate} |  Stop Sell Order Placed | ${item.qty} ${item.symbol}`;

        text = (
          <ActivityWrapper>
            <span className="activity">Stop Sell Order Placed</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
      }
      if (item.activity === "stopSellOrderPartiallyFilled") {
        text = `${item.createDate} | Stop Sell Order Partially Filled | ${item.qty} ${item.symbol}`;

        text = (
          <ActivityWrapper>
            <span className="activity">Stop Sell Order Partially Filled</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
        dot = <Icon type="minus-circle" style={{ fontSize: "14px" }} />;
      }
      if (item.activity === "stopSellOrderFilled") {
        text = `${item.createDate} | Stop Sell Order Filled | ${item.qty} ${item.symbol}`;

        text = (
          <ActivityWrapper>
            <span className="activity">Stop Sell Order Filled</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
        dot = <Icon type="close-circle" style={{ fontSize: "16px" }} />;
      }

      if (item.activity === "profitSellOrderCanceled") {
        text = `${item.createDate} | Profit Sell Order Canceled | ${item.qty} ${
          item.symbol.split("_")[0]
        }`;

        text = (
          <ActivityWrapper>
            <span className="activity">Profit Sell Order Canceled</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
      }
      if (item.activity === "stopSellOrderCanceled") {
        text = `${item.createDate} | Stop Sell Order Canceled | ${item.qty} ${item.symbol}`;

        text = (
          <ActivityWrapper>
            <span className="activity">Stop Sell Order Canceled</span>
            <span className="amountSymbol">
              {item.qty} {item.symbol.split("_")[0]}
            </span>
            <span className="createDate">{item.createDate}</span>
          </ActivityWrapper>
        );
      }

      return (
        <TimelineItem
          className="activity"
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
                        <td>Buy Price</td>
                        <td>Profit Price</td>
                        <td>Stop Price</td>
                        <td>Create Date</td>
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
              defaultCurrent={4}
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
