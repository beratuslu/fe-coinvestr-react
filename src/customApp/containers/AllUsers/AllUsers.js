import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import PageHeader from "../../../components/utility/pageHeader";
import Box from "../../../components/utility/box";
import LayoutWrapper from "../../../components/utility/layoutWrapper.js";
import { InputSearch } from "../../../components/uielements/input";
import IntlMessages from "../../../components/utility/intlMessages";
import notification from "../../../components/notification";
import GitResult from "../../components/githubResult";
import basicStyle from "../../../settings/basicStyle";
import actions from "../../redux/githubSearch/actions";
import * as TableViews from "../../../containers/Tables/antTables/tableViews/";
import {
  tableinfos,
  allUsers,
} from "../../../containers/Tables/antTables/configs";
import fakeData from "../../../containers/Tables/fakeData";
import TableDemoStyle from "./demo.style";
import profilePlaceHolder from "../../assets/profile-placeholder.jpg";

import axios from "axios";
const dataList = new fakeData(10);
console.log("dataList", dataList.getAll());
const tableInfo = tableinfos[4];
console.log("tableInfo", tableInfo);

const { gitSearch, onPageChange } = actions;

class AllUsers extends Component {
  constructor(props) {
    super(props);

    // this.onRecordTypeChange = this.onRecordTypeChange.bind(this);
    // this.onTradesPageChange = this.onTradesPageChange.bind(this);

    this.state = {
      loading: true,
      users: [],
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
    // const id = this.props.match.params.id;

    const users = await axios.get(`/api/v1/users/all-users`);
    const usersToSet = users.data.map((user) => {
      return {
        ...user,
        profilePhoto: user.profilePhoto
          ? `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload/w_300,h_300,c_fill,g_custom/${user.profilePhoto}.jpg`
          : profilePlaceHolder,
        key: user.id,
      };
    });
    this.setState({ users: usersToSet });
  }
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { onPageChange, GitSearch } = this.props;
    const { users } = this.state;

    return (
      <LayoutWrapper>
        <PageHeader>All Users</PageHeader>{" "}
        <TableDemoStyle className="isoLayoutContent">
          <TableViews.AllUsers
            tableInfo={allUsers}
            dataList={users}
          ></TableViews.AllUsers>
        </TableDemoStyle>
      </LayoutWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    GitSearch: state.githubSearch,
  };
}
AllUsers.propTypes = {
  gitSearch: PropTypes.func,
  onPageChange: PropTypes.func,
  GitSearch: PropTypes.object,
};
export default connect(mapStateToProps, {
  gitSearch,
  onPageChange,
})(AllUsers);
