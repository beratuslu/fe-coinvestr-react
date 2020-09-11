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

const { gitSearch, onPageChange } = actions;

class GitSearch extends Component {
  onSearch = (value) => {
    if (value && value.length > 0) {
      this.props.gitSearch(value);
    } else {
      notification("error", "Please type something");
    }
  };
  componentDidMount() {
    // const { searchText } = this.props.GitSearch;
    // this.onSearch(searchText);
    const id = this.props.match.params.id;
    console.log("GitSearch -> componentDidMount -> id", id);
  }
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { onPageChange, GitSearch } = this.props;
    const trades = [
      {
        id: 13,
        symbol: "ETHBTC",
        buyPrice: 0.02565,
        profitPrice: 0.02576,
        stopLossPrice: 0.024,
        createTime: "2020-07-19T14:35:47.903+00:00",
        user: { id: 1, userName: "staging1" },
        activities: [
          {
            id: 19,
            createTime: "2020-07-19T14:35:48.045+00:00",
            symbol: "ETHBTC",
            qty: null,
            type: "buyOrderPlaced",
            title: "Buy Order Placed",
          },
          {
            id: 20,
            createTime: "2020-07-19T14:35:51.03+00:00",
            symbol: "ETHBTC",
            qty: 0.008,
            type: "buyOrderFilled",
            title: "Buy Order Filled",
          },
          {
            id: 21,
            createTime: "2020-07-19T14:35:52.043+00:00",
            symbol: "ETHBTC",
            qty: null,
            type: "profitSellOrderPlaced",
            title: "Profit Sell Order Placed",
          },
          {
            id: 22,
            createTime: "2020-07-19T22:27:08.136+00:00",
            symbol: "ETHBTC",
            qty: 0.008,
            type: "profitSellOrderFilled",
            title: "Profit Sell Order Filled",
          },
        ],
        status: {
          completed: false,
          stopLoss: null,
          profit: null,
          remaining: null,
        },
      },
    ];

    return (
      <LayoutWrapper>
        <PageHeader>
          <IntlMessages id="sidebar.githubSearch" />
        </PageHeader>{" "}
        <TradeList singleItem trades={trades} />
        {/* <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box
              style={{
                minHeight: 220
              }}
            >
              <InputSearch
                placeholder="Github Search"
                defaultValue={GitSearch.searchText}
                onSearch={this.onSearch}
              />{" "}
              <GitResult
                GitSearch={GitSearch}
                defaultValue={GitSearch.searchText}
                onPageChange={onPageChange}
              />{" "}
            </Box>{" "}
          </Col>{" "}
        </Row>{" "} */}
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
