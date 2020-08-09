import React, { Component } from "react";
import { Popover } from "antd";
import { connect } from "react-redux";
import IntlMessages from "../../../../../components/utility/intlMessages";
import Tooltip from "../../../../../components/uielements/tooltip";
import TopbarDropdownWrapper from "./topbarDropdown.style";
import _ from "lodash";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.handleMarkAsRead = this.handleMarkAsRead.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false,
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }
  // handleMarkAsRead() {
  //   this.setState({ visible: !this.state.visible });
  // }
  handleMarkAsRead(notifIdArr) {
    console.log("Notifications ", notifIdArr);
  }
  renderItems() {
    const { customizedTheme, enums } = this.props;
    const { notifications } = this.props.notifications;
    const notifEnums = enums.enumsAndConstants.notifications;
    let count = 0;
    let notifIdArr = [];
    return notifications.map((notification, index) => {
      notifIdArr.push(notification.id);
      // let devider = false;
      // if (count === 5) {
      //   count = 0;
      //   devider = (
      //     <a
      //       key={"aSs" + notification.id}
      //       className="devider"
      //       onClick={() => {
      //         console.log(
      //           "Notifications -> renderItems -> notifIdArr",
      //           notifIdArr
      //         );
      //         return this.handleMarkAsRead(notifIdArr);
      //       }}
      //     >
      //       mark below 5 as read {notifIdArr.toString()}
      //     </a>
      //   );
      //   notifIdArr = [];
      // }
      count++;
      return (
        <div className="notifWrapper" key={"asSs" + notification.id}>
          {/* {devider} */}
          <a className="isoDropdownListItem" href="# ">
            <h5>{notifEnums[notification.notifType].title}</h5>
            <p>{notifEnums[notification.notifType].body}</p>
            <Tooltip placement="left" title="mark as read">
              <span
                className="isRead"
                onClick={() => this.handleMarkAsRead([notification.id])}
              ></span>
            </Tooltip>
          </a>
        </div>
      );
    });
  }
  render() {
    const { customizedTheme, enums } = this.props;
    const notifEnums = enums.enumsAndConstants.notifications;
    const { notifications } = this.props.notifications;
    const unReadNotifs = _.filter(notifications, { isRead: false });

    if (!notifEnums) {
      return null;
    }

    return (
      <TopbarDropdownWrapper className="Notifications">
        <div className="isoDropdownHeader">
          <h3>Notifications</h3>
        </div>
        <div className="isoDropdownBody">{this.renderItems()}</div>
        {/* <a className="isoViewAllBtn" href="# ">
          <IntlMessages id="topbar.viewAll" />
        </a> */}
      </TopbarDropdownWrapper>
    );
  }
}

export default connect((state) => ({
  ...state.App,
  customizedTheme: state.ThemeSwitcher.topbarTheme,
  notifications: state.notifications,
  enums: state.enumsAndConstants,
}))(Notifications);
