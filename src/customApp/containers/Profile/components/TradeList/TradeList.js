import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import scrumBoardActions from "../../../../../redux/scrumBoard/actions";
import Collapses from "../../../../../components/uielements/collapse";
import Pagination from "../../../../../components/uielements/pagination";
import { Icon } from "antd";
import moment from "moment";
import Timeline, {
  TimelineItem,
} from "../../../../../components/uielements/timeline";
import {
  RadioButton,
  RadioGroup,
} from "../../../../../components/uielements/radio";

import Box from "../../../../../components/utility/box";
import LayoutWrapper from "../../../../../components/utility/layoutWrapper";
import { filterProjects } from "../../../../../helpers/filterProjects";
// import CollapseWrapper from "./collapse.style";
// import actions from "../../../../../redux/profile/actions";
import {
  TradeListWrapper,
  Table,
  SwitchButtonsWrapper,
  CollapseWrapper,
  PaginationWrapper,
  ActivityWrapper,
  SingleTradeWrapper,
} from "./TradeList.style";
import TradeCollapseHeader from "./TradeCollapseHeader/TradeCollapseHeader";

// import IntlMessages from "../../../../../components/utility/intlMessages";

const Panel = Collapses.Panel;
const Collapse = (props) => (
  <CollapseWrapper>
    <Collapses {...props}>{props.children}</Collapses>
  </CollapseWrapper>
);

class TradeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recordType: "myTrades",
    };
  }
  componentDidMount() {
    // this.makeDataRequest();
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
    stopSellOrderCanceled: "gray",

    error: "red",
  };
  renderTradeActivityText(activity) {
    if (activity.helpDeskRequestUrl) {
      return (
        <span>
          We encountered an error while processing your copy trade. We created a{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href={activity.helpDeskRequestUrl}
          >
            help desk request
          </a>{" "}
          to solve the problem together.
        </span>
      );
    }
    return (
      <ActivityWrapper>
        <span className="activity">{activity.title}</span>
        <span className="amountSymbol">
          {activity.symbol.split("BTC")[0]} <strong>{activity.qty}</strong>
        </span>
        <span className="createDate">
          {moment(activity.createTime).format("YYYY-MM-DD HH:mm:ss.SSS")}
        </span>
      </ActivityWrapper>
    );
  }
  renderTradeActivities(activities) {
    return activities.map((activity) => {
      const text = this.renderTradeActivityText(activity);
      let dot = null;
      if (activity.type === "profitSellOrderPartiallyFilled") {
        dot = <Icon type="plus-circle" style={{ fontSize: "14px" }} />;
      }
      if (activity.type === "profitSellOrderFilled") {
        dot = <Icon type="check-circle" style={{ fontSize: "16px" }} />;
      }
      if (activity.type === "stopSellOrderPartiallyFilled") {
        dot = <Icon type="minus-circle" style={{ fontSize: "14px" }} />;
      }
      if (activity.type === "stopSellOrderFilled") {
        dot = <Icon type="close-circle" style={{ fontSize: "16px" }} />;
      }
      if (activity.helpDeskRequestUrl) {
        dot = <Icon type="exclamation-circle" style={{ fontSize: "18px" }} />;
      }

      return (
        <TimelineItem
          className="activity"
          dot={dot}
          key={activity.id || activity.helpDeskRequestUrl}
          color={this.colors[activity.type]}
        >
          {text}
        </TimelineItem>
      );
    });
  }

  renderTrades(trades) {
    const { singleItem } = this.props;
    const tradesJsx = trades.map((trade) => {
      let activities = trade.activities;
      console.log(
        "🚀 ~ file: TradeList.js ~ line 130 ~ TradeList ~ tradesJsx ~ trade",
        trade
      );
      const { helpDeskRequestUrl } = trade;
      if (trade.errored) {
        activities.push({ helpDeskRequestUrl, type: "error" });
      }

      return (
        <Panel
          showArrow={!singleItem}
          disabled={singleItem}
          header={<TradeCollapseHeader trade={trade} />}
          key={trade.id}
        >
          <br />
          <Timeline>{this.renderTradeActivities(activities)}</Timeline>
        </Panel>
      );
    });
    return <Collapse defaultActiveKey={trades[0].id}>{tradesJsx}</Collapse>;
  }
  render() {
    const { trades, singleItem, pageNumber, totalRecord } = this.props;

    let WrapperElement = LayoutWrapper;
    if (singleItem) {
      WrapperElement = SingleTradeWrapper;
    }

    return (
      <WrapperElement>
        {!singleItem && (
          <SwitchButtonsWrapper>
            <RadioGroup
              value={this.state.recordType}
              onChange={(event) => {
                this.setState({ recordType: event.target.value });
                this.props.onRecordTypeChange(event);
              }}
              className="isoTradeType"
            >
              <RadioButton value="myTrades">My Trades</RadioButton>
              <RadioButton value="copiedTrades">Copied Trades</RadioButton>
            </RadioGroup>
          </SwitchButtonsWrapper>
        )}
        <Box className="container">
          <TradeListWrapper>
            {!isEmpty(trades) ? (
              <>
                <div className="collapseWrapper">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <span>User</span>
                        </td>
                        <td>Pair</td>
                        <td>Buy Price</td>
                        <td>Profit Price</td>
                        <td>Stop Price</td>
                        <td>Create Time</td>
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
          {!singleItem && totalRecord > 10 && (
            <PaginationWrapper>
              <Pagination
                defaultCurrent={1}
                current={pageNumber}
                total={totalRecord}
                onChange={this.props.onPageChange}
              />
            </PaginationWrapper>
          )}
        </Box>
      </WrapperElement>
    );
  }
}

export default connect(
  (state) => ({
    profile: state.Profile,
    auth: state.Auth,
  })
  // { ...actions }
)(TradeList);

// state => ({
//   boards: filterProjects(state.scrumBoard.boards, state.scrumBoard.searchText)
// }),
