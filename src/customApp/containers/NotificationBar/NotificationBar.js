import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../../redux/themeSwitcher/actions.js";
// import Switcher from "../../../components/themeSwitcher/themeSwitcher";
import LanguageSwitcher from "../../../containers/LanguageSwitcher";
import bucketSVG from "../../../image/bucket.svg";
import NotificationsWrapper from "./components/NotificationsWrapper";
import NotificationBarStyle from "./notificationBar.style";
import onClickOutside from "react-onclickoutside";

const { switchActivation, changeTheme } = Actions;

class NotificationBar extends Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    // this.state = {
    //   visible: false,
    // };
  }

  handleClickOutside = (evt) => {
    const { isActivated } = this.props.notifications;
    const { dispatch } = this.props;

    if (isActivated) {
      dispatch({ type: "SWITCH_NOTIFICATION_BAR" });
    }
  };
  render() {
    const { isActivated } = this.props.notifications;

    // const styleButton = { background: sidebarTheme.buttonColor };

    return (
      <NotificationBarStyle
        className={isActivated ? "isoThemeSwitcher active" : "isoThemeSwitcher"}
      >
        <div className="SwitcherBlockWrapper">
          <NotificationsWrapper />
        </div>

        {/* <button
          type="primary"
          className="switcherToggleBtn"
          style={styleButton}
          onClick={() => {
            switchActivation();
          }}
        >
          <img src={process.env.PUBLIC_URL + bucketSVG} alt="bucket" />
        </button> */}
      </NotificationBarStyle>
    );
  }
}
function mapStateToProps(state) {
  return {
    notifications: state.notifications,
  };
}
let MyComponent = onClickOutside(NotificationBar);

export default connect(mapStateToProps)(MyComponent);
