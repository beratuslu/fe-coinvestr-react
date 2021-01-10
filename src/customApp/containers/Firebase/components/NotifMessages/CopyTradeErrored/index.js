// import React, { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import MessageWrapper from "../styles";
import actions from "../../../_redux/actions";
import { Provider } from "react-redux";
import { store, history } from "../../../../../../redux/store";
import { Link, Router, BrowserRouter, withRouter } from "react-router-dom";

class CopyTradeStart extends Component {
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
    const { notification, markNotificationsAsRead } = this.props;
    markNotificationsAsRead([notification.id]);
  }
  render() {
    const { notification, enumsAndConstants, app, bar } = this.props;
    const { params } = notification;
    const { helpDeskRequestUrl, copyTradeId } = params;

    return (
      <MessageWrapper onMouseEnter={this.onMouseEnter}>
        <div>
          We encountered an error while processing your{" "}
          <Link to={`/dashboard/copy-trade/${copyTradeId}`}>copy trade</Link>.
          We created a{" "}
          <a rel="noreferrer" target="_blank" href={helpDeskRequestUrl}>
            help desk request
          </a>{" "}
          to solve the problem together.
          <br></br>
          We have sent you an e-mail so you can access the
          <a rel="noreferrer" target="_blank" href={helpDeskRequestUrl}>
            help desk request
          </a>{" "}
          . After setting up a password and creating your helpdesk account with
          the same email you registered with, you can view the request.
        </div>
      </MessageWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.Profile,
    auth: state.Auth,
    enumsAndConstants: state.enumsAndConstants.enumsAndConstants,
    app: state.App,
  };
}
export default connect(mapStateToProps, { ...actions })(CopyTradeStart);
// export default CopyTradeStart;
