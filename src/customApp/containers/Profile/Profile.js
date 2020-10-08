// import React, { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import Spin from "../../../ui/Antd/Spin/Spin";
import { Row, Col } from "antd";
import Modal from "../../../ui/Antd/Modal/Modal";
import Container from "../../../ui/UI/Container/Container";
import AvatarCard from "../../../components/AvatarCard/AvatarCard";
import notifications from "../../../components/feedback/notification";
import Dropdown, {
  DropdownMenu,
  MenuItem,
} from "../../../components/uielements/dropdown";
import ContentHolder from "../../../components/utility/contentHolder";
import { Icon } from "antd";
import Button from "../../../components/uielements/button";
import { RadioButton, RadioGroup } from "../../../components/uielements/radio";

import Followers from "./components/Followers/Followers";
import Following from "./components/Following/Following";
import basicStyle from "../../../settings/basicStyle";
import TradeList from "./components/TradeList/TradeList";
import CreateCopyTradeModal from "./components/CreateCopyTradeModal/CreateCopyTradeModal";
import {
  Wrapper,
  Banner,
  Navigation,
  FollowDropDownMenuStyles,
} from "./Profile.styles";
import profileActions from "./_redux/actions";
import authActions from "../Auth/_redux/actions";
import axios from "axios";
import profilePlaceHolder from "../../assets/profile-placeholder.jpg";
import { symbol } from "d3-shape";

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
    this.openUploadWidget = this.openUploadWidget.bind(this);
    this.setModalData = this.setModalData.bind(this);

    this.state = {
      active: "post",
      visible: false,

      recordType: "myTrades",
      pageSize: 10,
      tradesPageNumber: 1,
      trades: {},
      modalVisible: false,
      symbols: [],
      createTradeLoading: false,
    };
  }

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
    const { updateProfilePhotoSuccess, updateCoverPhotoSuccess } = this.props;
    cloudinaryOptions.uploadPreset = type;

    if (type === "profilePhoto") {
      cloudinaryOptions.croppingAspectRatio = 1;
    }
    if (type === "coverPhoto") {
      cloudinaryOptions.croppingAspectRatio = 5;
    }
    window.cloudinary.openUploadWidget(
      cloudinaryOptions,
      async (error, photos) => {
        const { event, info } = photos;
        if (event === "success") {
          try {
            const response = await axios.post(
              `${BASE_URL}/api/v1/profile/update-profile-photo`,
              {
                publicId: info.public_id,
                type,
              }
            );
            if (type === "coverPhoto") {
              updateCoverPhotoSuccess(response.user);
            }
            if (type === "profilePhoto") {
              updateProfilePhotoSuccess(response.user);
            }
          } catch (error) {
            console.log("Profile -> openUploadWidget -> error", error);
          }
        }
      }
    );
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
  setModalData(val1, val2) {
    console.log("setModalData -> val1", val1);
    console.log("setModalData -> val2", val2);
  }

  follow() {}
  async addTrade() {
    this.setState({ modalVisible: true });

    const response = await axios.get(`${BASE_URL}/api/v1/market/symbols`);
    console.log("addTrade -> response", response);

    const symbols = Object.keys(response.data)
      .map(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        return key;
      })
      .filter(function(symbol) {
        var last3 = symbol.substr(symbol.length - 3);
        if (last3 !== "BTC") {
          return false;
        }
        return true;
      });

    this.setState({ symbols });
  }
  showModal = () => {
    this.setState({ modalVisible: true });
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields(async (err, values) => {
      console.log("handleCreate -> err", err);
      if (err) {
        return;
      }
      this.setState({ createTradeLoading: true });

      try {
        const response = await axios.post(`${BASE_URL}/api/v1/trades`, values);

        notifications.success({
          message: "Trade Created",
          description: "ssss",
        });
        this.setState({ modalVisible: false, createTradeLoading: false });
      } catch (error) {
        console.log("Profile -> openUploadWidget -> error", error);
      }

      console.log("Received values of form: ", values);
      // form.resetFields();
    });
  };
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    const { isSelfProfile, isFollowed, data } = this.props.profile;

    const { trades, symbols, createTradeLoading } = this.state;
    console.log("render -> symbols", symbols);
    const profilePhotoUri =
      data && data.profilePhoto
        ? `https://res.cloudinary.com/dsmfye6yy/image/upload/w_300,h_300,c_fill,g_custom/${data.profilePhoto}.jpg`
        : profilePlaceHolder;
    const coverPhotoUri =
      data && data.coverPhoto
        ? `https://res.cloudinary.com/dsmfye6yy/image/upload/w_1500,h_150,c_crop,g_custom/${data.coverPhoto}.jpg`
        : "";

    return (
      <Wrapper>
        <CreateCopyTradeModal
          modalVisible={this.state.modalVisible}
          wrappedComponentRef={this.saveFormRef}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          symbols={symbols}
          loading={createTradeLoading}
        />
        {this.props.profile.loading !== true ? (
          <>
            <Banner
              className="profile-banner"
              style={{
                backgroundImage: `url(${coverPhotoUri})`,
              }}
            >
              <Container className="container">
                <AvatarCard
                  avatar={profilePhotoUri}
                  name={this.props.profile.data.name}
                  lastName={this.props.profile.data.lastName}
                  userName={this.props.profile.data.userName}
                  openUploadWidget={() => {
                    this.openUploadWidget("profilePhoto");
                  }}
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
                          onClick={() => {
                            this.openUploadWidget("coverPhoto");
                          }}
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
export default connect(mapStateToProps, { ...profileActions, ...authActions })(
  Profile
);
