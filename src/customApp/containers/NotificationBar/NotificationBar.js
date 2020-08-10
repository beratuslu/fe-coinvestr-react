import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../../redux/themeSwitcher/actions.js";
// import Switcher from "../../../components/themeSwitcher/themeSwitcher";
import LanguageSwitcher from "../../../containers/LanguageSwitcher";
import bucketSVG from "../../../image/bucket.svg";
import NotificationsWrapper from "./components/NotificationsWrapper";
import NotificationBarStyle from "./notificationBar.style";

const { switchActivation, changeTheme } = Actions;

class ThemeSwitcher extends Component {
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
export default connect(mapStateToProps, {
  switchActivation,
  changeTheme,
})(ThemeSwitcher);
