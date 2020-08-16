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
  // renderMessage(body, params) {
  //   var parts = body.split(/{([^{}]*)\}/gm);
  //   console.log("parts: ", parts);
  //   for (var i = 1; i < parts.length; i += 2) {
  //     let part = parts[i];
  //     if (part.startsWith("{")) {
  //       const paramKey = part.replace("{", "").replace("}", "");
  //       part = part.replace;
  //     }
  //     parts[i] = (
  //       <span className="match" key={i}>
  //         {parts[i]}
  //       </span>
  //     );
  //   }
  //   console.log("parts: ", parts);
  //   return <div>{parts}</div>;
  // }
  render() {
    const { notification, enumsAndConstants } = this.props;
    const { params } = notification;

    return (
      <MessageWrapper onMouseEnter={this.onMouseEnter}>
        <div>
          New trade copied from{" "}
          <Link to={`/dashboard/profile/${params.copiedUser.userName}`}>
            {params.copiedUser.userName}
          </Link>{" "}
          started.
          <br />
          <br />
          <table>
            <tbody>
              <tr>
                <td>Symbol:</td>
                <td>
                  <strong>ETHBTC</strong>
                </td>
              </tr>
              <tr>
                <td>Btc Amount:</td>
                <td>
                  <strong>0.01</strong>
                </td>
              </tr>

              <tr>
                <td>Buy Price:</td>
                <td>
                  <strong>buy_price</strong>
                </td>
              </tr>

              <tr>
                <td>Profit Price:</td>
                <td>
                  <strong>profit_price</strong>
                </td>
              </tr>

              <tr>
                <td>Stop Loss Price:</td>
                <td>
                  <strong>stop_price</strong>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <br />
          <br /> Symbol: <strong> ETHBTC</strong>,
          <br /> Btc Amount: <strong>"0.01"</strong>,
          <br /> buyPrice: <strong>"buy_price"</strong>,
          <br />
          profitPrice: <strong>"profit_price"</strong>,
          <br /> stopLossPrice: <strong>"stop_price"</strong>, */}
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
  };
}
export default connect(mapStateToProps, { ...actions })(CopyTradeStart);
// export default CopyTradeStart;
