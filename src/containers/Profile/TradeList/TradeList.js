import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import scrumBoardActions from "../../../redux/scrumBoard/actions";
import Collapses from "../../../components/uielements/collapse";
import Pagination from "../../../components/uielements/pagination";
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
  colors = {
    buyOrder: "#a4c196",
    bought: "green",
    profitSellOrder: "#a4c196",
    profitSell: "green",
    stopSellOrder: "#a4c196",
    stopSell: "red",
    cancel: "gray"
  };

  items = [{}];

  onChange(event) {
    this.setState({ search: event.target.value });
  }
  renderTimeLineChildren(items) {}
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
          <TradeListWrapper className="helelele">
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
                        <td>Create Date</td>
                        <td>Buy Price</td>
                        <td>Profit Price</td>
                        <td>Stop Price</td>
                        <td>Status</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Collapse>
                    <Panel
                      header={<TradeCollapseHeader item={trades[0]} />}
                      key="1"
                    >
                      <br />
                      <Timeline>
                        <TimelineItem color="#a4c196">
                          {
                            <IntlMessages id="uiElements.timeline.createServiceSite" />
                          }
                        </TimelineItem>
                        <TimelineItem color="red">
                          {
                            <IntlMessages id="uiElements.timeline.solveInitialNetwork" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.technicalTesting" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.networkProblemSolved" />
                          }
                        </TimelineItem>
                      </Timeline>
                    </Panel>
                    <Panel
                      header={<TradeCollapseHeader item={trades[0]} />}
                      key="2"
                    >
                      <br />
                      <Timeline>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.createServiceSite" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.solveInitialNetwork" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.technicalTesting" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.networkProblemSolved" />
                          }
                        </TimelineItem>
                      </Timeline>
                    </Panel>
                    <Panel
                      header={<TradeCollapseHeader item={trades[0]} />}
                      key="3"
                    >
                      <br />
                      <Timeline>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.createServiceSite" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.solveInitialNetwork" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.technicalTesting" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.networkProblemSolved" />
                          }
                        </TimelineItem>
                      </Timeline>
                    </Panel>
                    <Panel
                      header={<TradeCollapseHeader item={trades[0]} />}
                      key="4"
                    >
                      <br />
                      <Timeline>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.createServiceSite" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.solveInitialNetwork" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.technicalTesting" />
                          }
                        </TimelineItem>
                        <TimelineItem>
                          {
                            <IntlMessages id="uiElements.timeline.networkProblemSolved" />
                          }
                        </TimelineItem>
                      </Timeline>
                    </Panel>
                  </Collapse>
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
