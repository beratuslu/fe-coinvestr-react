// import React, { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import Spin from "../../../ui/Antd/Spin/Spin";
import { Row, Col } from "antd";
import Modal from "../../../ui/Antd/Modal/Modal";
import Container from "../../../ui/UI/Container/Container";
import AvatarCard from "../../../components/AvatarCard/AvatarCard";
import Dropdown, {
  DropdownMenu,
  MenuItem,
} from "../../../components/uielements/dropdown";
import ContentHolder from "../../../components/utility/contentHolder";
import { Icon } from "antd";
import Button from "../../../components/uielements/button";
import { RadioButton, RadioGroup } from "../../../components/uielements/radio";

import Followers from "./Followers/Followers";
import Following from "./Following/Following";
import basicStyle from "../../../settings/basicStyle";
import TradeList from "./TradeList/TradeList";
import {
  Wrapper,
  Banner,
  Navigation,
  FollowDropDownMenuStyles,
} from "./Profile.styles";
import profileActions from "./_redux/actions";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

const cloudinaryOptions = {
  cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
  uploadPreset: "photoUpload",
  cropping: true,
  showCompletedButton: true,
  croppingAspectRatio: 4,
  showPoweredBy: false,
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.addTrade = this.addTrade.bind(this);
    this.follow = this.follow.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);

    this.onRecordTypeChange = this.onRecordTypeChange.bind(this);
    this.onTradesPageChange = this.onTradesPageChange.bind(this);
    this.avatarClick = this.avatarClick.bind(this);

    this.state = {
      active: "post",
      visible: false,

      recordType: "myTrades",
      pageSize: 10,
      tradesPageNumber: 1,
      trades: {},
    };
  }

  addTrade() {}
  follow() {}

  componentDidMount() {
    const { userName } = this.props.auth.user;
    const { fetchProfileDataStart } = this.props;

    const userNameFromRoute = this.props.match.params.userName;

    const visitingOwnProfile = userName === userNameFromRoute;
    this.props.setProfileOwner(visitingOwnProfile);

    this.makeTradesRequest();

    fetchProfileDataStart(userNameFromRoute);
  }
  openUploadWidget(type) {
    cloudinaryOptions.uploadPreset = type;

    if (type === "profilePhoto") {
      cloudinaryOptions.croppingAspectRatio = 1;
    }
    if (type === "coverPhoto") {
      cloudinaryOptions.croppingAspectRatio = 4;
    }
    window.cloudinary.openUploadWidget(cloudinaryOptions, (error, photos) => {
      console.log("Profile -> openUploadWidget -> photos", photos);
      const { event, info } = photos;
      if (event === "success") {
        try {
          axios.post(`${BASE_URL}/api/v1/profile/update-profile-photo`, {
            publicId: info.public_id,
          });
        } catch (error) {
          console.log("Profile -> openUploadWidget -> error", error);
        }
      }
    });
  }

  handleMenuClick(e) {}
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

  async makeTradesRequest() {
    const { recordType, pageSize, tradesPageNumber } = this.state;
    const obj = {
      recordType,
      pagination: { pageSize, pageNumber: tradesPageNumber },
    };
    // this.props.fetchUserTradesStart(obj);

    const trades = await axios.post(`/api/v1/profile/user-trades`, obj);
    this.setState({ trades });
  }
  onRecordTypeChange(event) {
    this.setState(
      { recordType: event.target.value, tradesPageNumber: 1 },
      () => {
        this.makeTradesRequest();
      }
    );
  }
  onTradesPageChange(tradesPageNumber) {
    this.setState({ tradesPageNumber }, () => {
      this.makeTradesRequest();
    });
  }
  avatarClick() {}

  render() {
    const { isSelfProfile, isFollowed, data } = this.props.profile;
    console.log("render -> data", data);
    const { trades } = this.state;
    const profilePhotoUri = data
      ? `https://res.cloudinary.com/dsmfye6yy/image/upload/w_300,h_300,c_fill,g_custom/${data.profilePhoto ||
          ""}.jpg`
      : "";

    return (
      <Wrapper>
        {this.props.profile.loading !== true ? (
          <>
            <Banner
              className="profile-banner"
              style={{
                // backgroundImage: `url(${this.props.profile.data.profile_bg})`,
                // 7bd73e3e0916e472617fcec31b11786e
                // b6ws30scxsdhvgcoltv9
                backgroundImage: `url(https://res.cloudinary.com/dsmfye6yy/image/upload/w_1500,h_150,c_crop,g_custom/pma6uiuevdf5fisyspln.jpg)`,
              }}
            >
              <Container className="container">
                <AvatarCard
                  avatar={profilePhotoUri}
                  name={this.props.profile.data.name}
                  username={this.props.profile.data.username}
                  openUploadWidget={this.openUploadWidget}
                  isSelfProfile={isSelfProfile}
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
                        {this.props.profile.data.followings.length}
                      </strong>{" "}
                      Following
                    </li>
                  </ul>
                  <ul
                    className="buttons"
                    style={{ position: "relative", overflow: "visible" }}
                  >
                    {isSelfProfile && (
                      <li>
                        <i
                          onClick={() => {}}
                          className="ion-camera"
                          style={{
                            fontSize: "24px",
                            color: "#323332",
                            lineHeight: 1,
                            position: "absolute",
                            top: "-30px",
                            right: "0px",
                            cursor: "pointer",
                            zIndex: 3,
                          }}
                        />
                      </li>
                    )}
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

            <TradeList
              onRecordTypeChange={this.onRecordTypeChange}
              onPageChange={this.onTradesPageChange}
              trades={trades}
            />

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
    profile: state.profile,
    auth: state.auth,
  };
}
export default connect(mapStateToProps, { ...profileActions })(Profile);
