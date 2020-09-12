import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import PageHeader from "../../../components/utility/pageHeader";
import Box from "../../../components/utility/box";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { InputSearch } from "../../../components/uielements/input";
import IntlMessages from "../../../components/utility/intlMessages";
import notification from "../../../components/notification";
import GitResult from "../../components/githubResult";
import basicStyle from "../../../settings/basicStyle";
import actions from "../../redux/githubSearch/actions";
import TradeList from "../Profile/TradeList/TradeList";
import axios from "axios";

const { gitSearch, onPageChange } = actions;

class GitSearch extends Component {
  constructor(props) {
    super(props);

    // this.onRecordTypeChange = this.onRecordTypeChange.bind(this);
    // this.onTradesPageChange = this.onTradesPageChange.bind(this);

    this.state = {
      loading: true,
      trades: {},
    };
  }
  onSearch = (value) => {
    if (value && value.length > 0) {
      this.props.gitSearch(value);
    } else {
      notification("error", "Please type something");
    }
  };
  async componentDidMount() {
    // const { searchText } = this.props.GitSearch;
    // this.onSearch(searchText);
    const id = this.props.match.params.id;

    const trades = await axios.get(`/api/v1/trades/single-trade/${id}`);
    this.setState({ trades });
    console.log("GitSearch -> componentDidMount -> trades", trades);
  }
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { onPageChange, GitSearch } = this.props;
    const { trades } = this.state;

    return (
      <LayoutWrapper>
        <PageHeader>Copy Trade</PageHeader>{" "}
        <TradeList singleItem trades={trades} />
      </LayoutWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    GitSearch: state.githubSearch,
  };
}
GitSearch.propTypes = {
  gitSearch: PropTypes.func,
  onPageChange: PropTypes.func,
  GitSearch: PropTypes.object,
};
export default connect(mapStateToProps, {
  gitSearch,
  onPageChange,
})(GitSearch);
