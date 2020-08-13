// import React, { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import DescriptionWrapper from "./styles";
import actions from "../../_redux/actions";
import { store } from "../../../../../redux/store";

class Description extends Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);

    this.state = {
      //   active: "post",
      //   visible: false,
    };
  }

  componentDidMount() {}

  onMouseEnter(e) {
    const { notification } = this.props;
    console.log("asdasd -> onMouseOver -> e", e);
    store.dispatch(actions.markNotificationsAsRead([notification.id]));
  }
  render() {
    const { notification } = this.props;

    return (
      <DescriptionWrapper onMouseEnter={this.onMouseEnter}>
        <span>{notification.notifType}</span>
      </DescriptionWrapper>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     profile: state.Profile,
//     auth: state.Auth,
//   };
// }
// export default connect(mapStateToProps, { ...actions })(Description);
export default Description;
