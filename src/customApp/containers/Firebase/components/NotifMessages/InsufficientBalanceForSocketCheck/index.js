// import React, { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import MessageWrapper from "../styles";
import actions from "../../../_redux/actions";
import { Provider } from "react-redux";
import { store } from "../../../../../../redux/store";

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
    store.dispatch(actions.markNotificationsAsRead([notification.id]));
  }
  render() {
    const { notification, enumsAndConstants } = this.props;
    console.log(
      "Description -> render -> enumsAndConstants----------",
      enumsAndConstants
    );

    return (
      <MessageWrapper onMouseEnter={this.onMouseEnter}>
        <span>
          {enumsAndConstants.notifications[notification.notifType].body}
        </span>
      </MessageWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.Profile,
    auth: state.Auth,
    enumsAndConstants: state.enumsAndConstants.enumsAndConstants,
  };
}
export default connect(mapStateToProps, { ...actions })(Description);
// export default Description;
