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
    const { btcAmount, buyPrice, profitPrice, stopLossPrice, symbol } = params;

    return (
      <MessageWrapper onMouseEnter={this.onMouseEnter}>
        <div>
          New trade copied from{" "}
          <Link to={`/dashboard/profile/${params.copiedUser.userName}`}>
            {params.copiedUser.userName}
          </Link>{" "}
          started.
          {(app.view === "DesktopView" || bar) && (
            <div>
              <br />
              <table>
                <tbody>
                  <tr>
                    <td>Symbol:</td>
                    <td>
                      <strong>{symbol}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Btc Amount:</td>
                    <td>
                      <strong>{btcAmount}</strong>
                    </td>
                  </tr>

                  <tr>
                    <td>Buy Price:</td>
                    <td>
                      <strong>{buyPrice}</strong>
                    </td>
                  </tr>

                  <tr>
                    <td>Profit Price:</td>
                    <td>
                      <strong>{profitPrice}</strong>
                    </td>
                  </tr>

                  <tr>
                    <td>Stop Loss Price:</td>
                    <td>
                      <strong>{stopLossPrice}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
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
