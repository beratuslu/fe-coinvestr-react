import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import scrumBoardActions from "../../../redux/scrumBoard/actions";
import Collapses from "../../../components/uielements/collapse";

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
  CollapseWrapper
} from "./TradeList.style";
import TradeCollapseHeader from "./TradeCollapseHeader/TradeCollapseHeader";

import IntlMessages from "../../../components/utility/intlMessages";

const Panel = Collapses.Panel;
const Collapse = props => (
  <CollapseWrapper>
    <Collapses {...props}>{props.children}</Collapses>
  </CollapseWrapper>
);

const boards = [
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
    }
  }
];
class TradeList extends Component {
  s;
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
  render() {
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
            {!isEmpty(["a"]) ? (
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
                      header={<TradeCollapseHeader item={boards[0]} />}
                      key="1"
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
                      header={<TradeCollapseHeader item={boards[0]} />}
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
                      header={<TradeCollapseHeader item={boards[0]} />}
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
                      header={<TradeCollapseHeader item={boards[0]} />}
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
