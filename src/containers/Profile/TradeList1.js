import React, { useEffect } from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import scrumBoardActions from "../../redux/scrumBoard/actions";
import Collapses from "../../components/uielements/collapse";
// import NoBoardFounds from "../BoardNotFound/BoardNotFound";
// import BoardListCard from "./BoardListCard/BoardListCard";
import { filterProjects } from "../../helpers/filterProjects";
// import { Table } from "./BoardList.style";
import CollapseWrapper from "./collapse.style";
import IntlMessages from "../../components/utility/intlMessages";
import { RadioButton, RadioGroup } from "../../components/uielements/radio";

const text = <IntlMessages id="uiElements.collapse.text" />;
const Panel = Collapses.Panel;
const Collapse = props => (
  <CollapseWrapper>
    <Collapses {...props}>{props.children}</Collapses>
  </CollapseWrapper>
);

function TradeList({
  boards,
  deleteBoardWatcher,
  editBoard,
  history,
  match,
  boardsRenderWatcher
}) {
  useEffect(() => {
    boardsRenderWatcher();
  }, []);

  const handleEdit = board => {
    editBoard(board);
    history.push(`/dashboard/scrum-board/${board.id}`);
  };

  return (
    <>
      {!isEmpty(boards) ? (
        <>
          <div className="isoTodoStatusTab">
            <RadioGroup
              value={this.state.search}
              onChange={this.onChange}
              className="isoTodoStatus"
            >
              <RadioButton value="MyTrades">My Trades</RadioButton>
              <RadioButton value="CopiedTrades">Copied Trades</RadioButton>
            </RadioGroup>
          </div>
          <Collapse accordion>
            <Panel
              header={<IntlMessages id="uiElements.collapse.headerOne" />}
              key="1"
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header={<IntlMessages id="uiElements.collapse.headerTwo" />}
              key="2"
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header={<IntlMessages id="uiElements.collapse.headerThree" />}
              key="3"
            >
              <p>{text}</p>
            </Panel>
          </Collapse>
        </>
      ) : (
        // <NoBoardFounds history={history} match={match} />
        <div>Board Not found</div>
      )}
    </>
  );
}

export default connect(
  state => ({
    boards: filterProjects(state.scrumBoard.boards, state.scrumBoard.searchText)
  }),
  { ...scrumBoardActions }
)(TradeList);
