import React, { Component } from "react";
import { Popover } from "antd";
import { connect } from "react-redux";
import IntlMessages from "../../components/utility/intlMessages";
import Tooltip from "../../components/uielements/tooltip";
import TopbarDropdownWrapper from "./topbarDropdown.style";
import _ from "lodash";

const demoNotifications = [
  {
    id: 1,
    name: "David Doe",
    notification:
      "A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner",
  },
  {
    id: 2,
    name: "Navis Doe",
    notification:
      "A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner",
  },
  {
    id: 3,
    name: "Emanual Doe",
    notification:
      "A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner",
  },
  {
    id: 4,
    name: "Dowain Doe",
    notification:
      "A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner",
  },
  {
    id: 5,
    name: "Dowain Doe",
    notification:
      "A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner",
  },
];

class TopbarNotification extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
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
  handleMarkAsRead() {
    this.setState({ visible: !this.state.visible });
  }
  renderItems() {
    const { customizedTheme, enums } = this.props;
    const { notifications } = this.props.notifications;
    const notifEnums = enums.enumsAndConstants.notifications;
    let count = 0;
    return notifications.map((notification, index) => {
      let devider = null;
      if (count === 5) {
        count = 0;
        devider = <a href="#">mark below 5 as read</a>;
      }
      count++;
      return (
        <div key={notification.id}>
          {devider}
          <a className="isoDropdownListItem" href="# ">
            <h5>{notifEnums[notification.notifType].title}</h5>
            <p>{notifEnums[notification.notifType].body}</p>
            <Tooltip placement="left" title="mark as read">
              <span className="isRead"></span>
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

    const content = (
      <TopbarDropdownWrapper className="topbarNotification">
        <div className="isoDropdownHeader">
          <h3>
            <IntlMessages id="sidebar.notification" />
          </h3>
        </div>
        <div className="isoDropdownBody">{this.renderItems()}</div>
        {/* <a className="isoViewAllBtn" href="# ">
          <IntlMessages id="topbar.viewAll" />
        </a> */}
      </TopbarDropdownWrapper>
    );
    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="bottomRight"
      >
        <div className="isoIconWrapper">
          <i
            className="ion-android-notifications"
            style={{ color: customizedTheme.textColor }}
          />
          <span>{unReadNotifs.length}</span>
        </div>
      </Popover>
    );
  }
}

export default connect((state) => ({
  ...state.App,
  customizedTheme: state.ThemeSwitcher.topbarTheme,
  notifications: state.notifications,
  enums: state.enumsAndConstants,
}))(TopbarNotification);
