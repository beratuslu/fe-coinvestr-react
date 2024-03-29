import React, { Component } from "react";
import { Popover } from "antd";
import { connect } from "react-redux";
import IntlMessages from "../../../../../components/utility/intlMessages";
import classNames from "classnames";
import Tooltip from "../../../../../components/uielements/tooltip";
import TopbarDropdownWrapper from "./topbarDropdown.style";
import actions from "../../_redux/actions";
import _ from "lodash";
import NotifMessages from "../../../Firebase/components/NotifMessages";

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
    this.props.markNotificationsAsRead(notifIdArr);
  }
  renderItems() {
    const { customizedTheme, enums } = this.props;
    const { notifications } = this.props.notifications;
    const notifEnums = enums.enumsAndConstants.notifications;
    let count = 0;
    let notifIdArr = [];
    return notifications.map((notification, index) => {
      // TODO: mark below 5 as read button for every 5 records
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
      // const isReadClasses = classNames({
      //   isRead: true,
      //   read: notification.isRead,
      // });

      const MessageComponent = NotifMessages[notification.notifType];

      return (
        <div className="notifWrapper" key={notification.id}>
          {/* {devider} */}
          <div className="isoDropdownListItem">
            <h5>{notifEnums[notification.notifType].title}</h5>

            <MessageComponent
              notification={notification}
              bar
            ></MessageComponent>

            {notification.isRead ? (
              <span className="isRead read"></span>
            ) : (
              <Tooltip placement="left" title="mark as read">
                <span
                  className="isRead "
                  onClick={() => this.handleMarkAsRead([notification.id])}
                ></span>
              </Tooltip>
            )}
          </div>
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

export default connect(
  (state) => ({
    ...state.App,
    customizedTheme: state.ThemeSwitcher.topbarTheme,
    notifications: state.notifications,
    enums: state.enumsAndConstants,
  }),
  { ...actions }
)(Notifications);
