// import React, { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import Spin from "../../ui/Antd/Spin/Spin";
import { Row, Col } from "antd";
import Modal from "../../ui/Antd/Modal/Modal";
import Container from "../../ui/UI/Container/Container";
import AvatarCard from "../../components/AvatarCard/AvatarCard";
import Dropdown, {
  DropdownMenu,
  MenuItem,
} from "../../components/uielements/dropdown";
import ContentHolder from "../../components/utility/contentHolder";
import { Icon } from "antd";
import Button from "../../components/uielements/button";
import { RadioButton, RadioGroup } from "../../components/uielements/radio";

import Followers from "./Followers/Followers";
import Following from "./Following/Following";
import basicStyle from "../../settings/basicStyle";
import TradeList from "./TradeList/TradeList";
import {
  Wrapper,
  Banner,
  Navigation,
  FollowDropDownMenuStyles,
} from "./Profile.styles";
import actions from "../../redux/profile/actions";
import profileActions from "./_redux/actions";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.addTrade = this.addTrade.bind(this);
    this.follow = this.follow.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);

    this.state = {
      active: "post",
      visible: false,
    };
  }

  addTrade() {
    console.log("add trade");
  }
  follow() {
    console.log("follow");
  }

  componentDidMount() {
    const { userName } = this.props.auth.user;
    const userNameFromRoute = this.props.match.params.userName;

    const visitingOwnProfile = userName === userNameFromRoute;
    this.props.setProfileOwner(visitingOwnProfile);
  }

  handleMenuClick(e) {
    console.log("Profile -> handleMenuClick -> e", e);
  }
  renderMenu() {
    return (
      <DropdownMenu
        className="followDropDownMenu"
        onClick={this.handleMenuClick}
      >
        <FollowDropDownMenuStyles />
        <MenuItem key="1">Edit Copy</MenuItem>
        <MenuItem className="unfollow" key="2">
          Unfollow
        </MenuItem>
      </DropdownMenu>
    );
  }
  handleCancel() {
    this.setState({ visible: false, active: "post" });
  }
  handleMenu(type) {
    if (type === "post") {
      // setActive(type);
      this.setState({ active: type });
    }
    if (type === "followers") {
      // setActive(type);
      // setVisible(true);
      this.setState({ active: type, visible: true });
    }
    if (type === "following") {
      // setActive(type);
      // setVisible(true);
      this.setState({ active: type, visible: true });
    }
  }
  render() {
    const { trades, isSelfProfile, isFollowed } = this.props.profile;

    return (
      <Wrapper>
        {this.props.profile.loading !== true ? (
          <>
            <Banner
              className="profile-banner"
              style={{
                backgroundImage: `url(${this.props.profile.data.profile_bg})`,
              }}
            >
              <Container className="container">
                <AvatarCard
                  avatar={this.props.profile.data.avatar}
                  name={this.props.profile.data.name}
                  username={this.props.profile.data.username}
                />
              </Container>
            </Banner>

            <Navigation className="navigation">
              <Container className="container">
                <div className="innerWrapper">
                  <ul className="menu">
                    <li
                      className={"active"}
                      onClick={() => this.handleMenu("post")}
                    >
                      {/* <strong>{this.props.profile.data.post.length}</strong>{" "} */}
                      Trades
                    </li>
                    <li
                      // className={this.state.active === "followers" ? "active" : ""}
                      onClick={() => this.handleMenu("followers")}
                    >
                      <strong>
                        {this.props.profile.data.followers.length}
                      </strong>{" "}
                      Followers
                    </li>
                    <li
                      // className={this.state.active === "following" ? "active" : ""}
                      onClick={() => this.handleMenu("following")}
                    >
                      <strong>
                        {this.props.profile.data.following.length}
                      </strong>{" "}
                      Following
                    </li>
                  </ul>
                  <ul className="buttons">
                    <li>
                      {isSelfProfile ? (
                        <Button type="primary" onClick={this.addTrade}>
                          New Trade
                        </Button>
                      ) : isFollowed ? (
                        <Dropdown overlay={this.renderMenu()}>
                          <Button type="primary">
                            Following <Icon type="down" />
                          </Button>
                        </Dropdown>
                      ) : (
                        <Button type="primary" onClick={this.follow}>
                          Follow
                        </Button>
                      )}
                    </li>
                  </ul>
                </div>
              </Container>
            </Navigation>

            <TradeList trades={trades} />

            <Modal
              wrapClassName="follow-modal"
              visible={this.state.visible}
              onCancel={this.handleCancel}
              footer={null}
            >
              {this.state.active === "followers" && (
                <Followers data={this.props.profile.data.followers} />
              )}
              {this.state.active === "following" && (
                <Following data={this.props.profile.data.following} />
              )}
            </Modal>
          </>
        ) : (
          <div
            style={{
              minHeight: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spin />
          </div>
        )}
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.Profile,
    auth: state.Auth,
  };
}
export default connect(mapStateToProps, { ...profileActions })(Profile);