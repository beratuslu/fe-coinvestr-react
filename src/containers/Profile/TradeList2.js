import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import scrumBoardActions from "../../redux/scrumBoard/actions";
import Collapses from "../../components/uielements/collapse";
import { filterProjects } from "../../helpers/filterProjects";
import CollapseWrapper from "./collapse.style";
import { TradeListWrapper, Table } from "./TradeList.style";
import TradeCollapseHeader from "./TradeCollapseHeader/TradeCollapseHeader";
import SimpleTable from "..//Tables/antTables/tableViews/simpleView";

import IntlMessages from "../../components/utility/intlMessages";
import { RadioButton, RadioGroup } from "../../components/uielements/radio";

const text = <IntlMessages id="uiElements.collapse.text" />;
const Panel = Collapses.Panel;
const Collapse = props => (
  <CollapseWrapper className="werwer234">
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
      <TradeListWrapper className="helelele">
        {!isEmpty(["a"]) ? (
          <>
            <div className="isoTradeTypeTab">
              <RadioGroup
                value={this.state.search}
                onChange={this.onChange}
                className="isoTradeType"
              >
                <RadioButton value="MyTrades">My Trades</RadioButton>
                <RadioButton value="CopiedTrades">Copied Trades</RadioButton>
              </RadioGroup>
            </div>
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
                  <p>{text}</p>
                </Panel>
                <Panel
                  header={<TradeCollapseHeader item={boards[0]} />}
                  key="1"
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header={<TradeCollapseHeader item={boards[0]} />}
                  key="1"
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header={<TradeCollapseHeader item={boards[0]} />}
                  key="1"
                >
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </div>
          </>
        ) : (
          <div>Board Not found</div>
        )}
      </TradeListWrapper>
    );
  }
}

export default connect(
  state => ({
    boards: filterProjects(state.scrumBoard.boards, state.scrumBoard.searchText)
  }),
  { ...scrumBoardActions }
)(TradeList);
