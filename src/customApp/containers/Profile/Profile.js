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
import FollowUserModal from "./components/FollowUserModal/FollowUserModal";
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
import classNames from "classnames";

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
    this.handleNewTradeModalCancel = this.handleNewTradeModalCancel.bind(this);
    this.handleFollowListModalCancel = this.handleFollowListModalCancel.bind(
      this
    );
    this.addTrade = this.addTrade.bind(this);
    this.unfollow = this.unfollow.bind(this);

    this.handleFollowUserModalCreate = this.handleFollowUserModalCreate.bind(
      this
    );
    this.handleFollowUserModalCancel = this.handleFollowUserModalCancel.bind(
      this
    );

    this.showFollowUserModal = this.showFollowUserModal.bind(this);

    this.onRecordTypeChange = this.onRecordTypeChange.bind(this);
    this.onTradesPageChange = this.onTradesPageChange.bind(this);

    this.openUploadWidget = this.openUploadWidget.bind(this);

    this.state = {
      active: "trades",
      visible: false,

      recordType: "myTrades",
      pageSize: 10,
      tradesPageNumber: 1,
      trades: {},
      symbols: [],
      followUserModalVisible: false,
      newTradeModalVisible: false,
      createTradeLoading: false,
      profile: {},
      followAmount: null,
      isFollowedFromState: null,
    };
  }

  componentDidMount() {}
  async makeProfileRequest() {
    // const BASE_URL = `/api/v1/profile`;
    // const trades = await axios.post(`/api/v1/profile/`, requestObj);
    // this.setState({ trades });
  }

  async updateLocalStorage(updatedPart) {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem(
      "user",
      JSON.stringify({ ...userFromLocalStorage, ...updatedPart })
    );

    // const BASE_URL = `/api/v1/profile`;
    // const trades = await axios.post(`/api/v1/profile/`, requestObj);
    // this.setState({ trades });
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
              localStorage.setItem("user", JSON.stringify(response.user));
            }
            if (type === "profilePhoto") {
              updateProfilePhotoSuccess(response.user);
              localStorage.setItem("user", JSON.stringify(response.user));
            }
          } catch (error) {}
        }
      }
    );
  }

  renderMenu() {
    return (
      <DropdownMenu className="followDropDownMenu">
        <FollowDropDownMenuStyles />
        <MenuItem onClick={this.showFollowUserModal} key="1">
          Edit Copy
        </MenuItem>
        <MenuItem onClick={this.unfollow} className="unfollow" key="2">
          Unfollow
        </MenuItem>
      </DropdownMenu>
    );
  }
  changeFollowListModalVisibility(type) {
    const { changeFollowListModal } = this.props;
    changeFollowListModal(type);
  }

  handleFollowListModalCancel() {
    const { changeFollowListModal } = this.props;
    changeFollowListModal(false);
  }

  onRecordTypeChange(event) {
    const { changeTradesRecordType } = this.props;
    changeTradesRecordType(event.target.value);
  }
  onTradesPageChange(tradesPageNumber) {
    const { changeTradesPageNumber } = this.props;
    changeTradesPageNumber(tradesPageNumber);
  }

  async addTrade() {
    this.setState({ newTradeModalVisible: true });

    const response = await axios.get(`${BASE_URL}/api/v1/market/symbols`);

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
  handleNewTradeModalCancel = () => {
    this.setState({ newTradeModalVisible: false });
  };

  handleCreateNewTrade = () => {
    const { form } = this.newTradeFormRef.props;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      this.setState({ createTradeLoading: true });

      try {
        const response = await axios.post(`${BASE_URL}/api/v1/trades`, values);

        notifications.success({
          message: "Trade Created",
          // description: "ssss",
        });
        this.setState({
          newTradeModalVisible: false,
          createTradeLoading: false,
        });
      } catch (error) {}

      // form.resetFields();
    });
  };
  saveNewTradeFormRef = (formRef) => {
    this.newTradeFormRef = formRef;
  };

  saveFollowFormRef = (formRef) => {
    this.followFormRef = formRef;
  };

  handleFollowUserModalCreate() {
    const { auth, addFollowerToProfile } = this.props;
    const { id, followers } = this.props.profile.profile;
    console.log(
      "Profile -> handleFollowUserModalCreate -> followers",
      followers
    );

    const { form } = this.followFormRef.props;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      const traderId = id;

      let isFollowed = false;

      let arr = followers.filter((user) => user.id === auth.user.id);
      if (arr.length) {
        isFollowed = true;
      }

      try {
        const requestObj = {
          ...values,
          traderId,
          updating: isFollowed,
        };
        const response = await axios.post(
          `${BASE_URL}/api/v1/profile/follow`,
          requestObj
        );

        notifications.success({
          message: "Success!",
          // description: "ssss",
        });
        this.setState({
          followUserModalVisible: false,
        });

        if (!isFollowed) {
          console.log(
            "Profile -> handleFollowUserModalCreate -> auth.user",
            auth.user
          );
          addFollowerToProfile(auth.user);
        }
      } catch (error) {
        console.log("Profile -> handleFollowUserModalCreate -> error", error);
      }

      // form.resetFields();
    });
  }

  async showFollowUserModal() {
    const { auth } = this.props;
    const { id, followers } = this.props.profile.profile;

    this.setState({
      followUserModalVisible: true,
      followUserModalTitle: "Enter Copy Amount",
    });

    const requestObj = { userId: auth.user.id, traderId: id };

    let isFollowed = false;

    let arr = followers.filter((user) => user.id === auth.user.id);
    if (arr.length) {
      isFollowed = true;
    }

    if (isFollowed) {
      this.setState({ isFollowedFromState: isFollowed });
      const result = await axios.post(
        `${BASE_URL}/api/v1/profile/get-follow-amount`,
        requestObj
      );
      this.setState({ followAmount: result.amount });
    }
  }
  async unfollow() {
    const { auth, removeFollowerFromProfile } = this.props;
    const { id, followers } = this.props.profile.profile;

    const requestObj = { traderId: id };
    try {
      const result = await axios.post(
        `${BASE_URL}/api/v1/profile/unfollow`,
        requestObj
      );
      removeFollowerFromProfile(auth.user.id);
    } catch (error) {
      console.log("Profile -> unfollow -> error", error);
    }
  }

  handleFollowUserModalCancel() {
    this.setState({ followUserModalVisible: false });
  }
  render() {
    const { auth } = this.props;
    const { isFollowedFromState, followAmount } = this.state;
    const {
      isSelfProfile,
      profile,
      trades,
      tradesPageNumber,
      tradesPageSize,
      tradesTotalRecord,
      followListModal,
      loading,
    } = this.props.profile;
    const { followers, followings } = profile;
    const { push } = this.props.history;

    let isFollowed = false;

    if (!loading) {
      let arr = followers.filter((user) => user.id === auth.user.id);
      if (arr.length) {
        isFollowed = true;
      }
    }

    const { symbols, createTradeLoading } = this.state;
    const profilePhotoUri =
      profile && profile.profilePhoto
        ? `https://res.cloudinary.com/dsmfye6yy/image/upload/w_300,h_300,c_fill,g_custom/${profile.profilePhoto}.jpg`
        : profilePlaceHolder;
    const coverPhotoUri =
      profile && profile.coverPhoto
        ? `https://res.cloudinary.com/dsmfye6yy/image/upload/w_1500,h_150,c_crop,g_custom/${profile.coverPhoto}.jpg`
        : "";

    return (
      <Wrapper>
        <CreateCopyTradeModal
          modalVisible={this.state.newTradeModalVisible}
          wrappedComponentRef={this.saveNewTradeFormRef}
          onCancel={this.handleNewTradeModalCancel}
          onCreate={this.handleCreateNewTrade}
          symbols={symbols}
          loading={createTradeLoading}
        />
        <FollowUserModal
          modalVisible={this.state.followUserModalVisible}
          wrappedComponentRef={this.saveFollowFormRef}
          onCancel={this.handleFollowUserModalCancel}
          onCreate={this.handleFollowUserModalCreate}
          symbols={symbols}
          loading={createTradeLoading}
          isFollowed={isFollowedFromState}
          followAmount={followAmount}
        />

        <Modal
          wrapClassName="follow-modal"
          visible={!!followListModal}
          onCancel={this.handleFollowListModalCancel}
          footer={null}
        >
          {followListModal === "followers" && (
            <Followers list={followers} push={push} title="Followers" />
          )}
          {followListModal === "following" && (
            <Followers list={followings} push={push} title="Following" />
          )}
        </Modal>

        {loading !== true ? (
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
                  name={profile.name}
                  lastName={profile.lastName}
                  userName={profile.userName}
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
                      // onClick={() => this.changeFollowListModalVisibility("trades")}
                    >
                      Trades
                    </li>
                    <li
                      className={classNames({
                        disabled: followers.length == 0,
                      })}
                      onClick={() => {
                        if (followers.length) {
                          this.changeFollowListModalVisibility("followers");
                        }
                      }}
                    >
                      <strong>{followers.length}</strong> Followers
                    </li>
                    <li
                      className={classNames({
                        disabled: followings.length == 0,
                      })}
                      onClick={() => {
                        if (followings.length) {
                          this.changeFollowListModalVisibility("following");
                        }
                      }}
                    >
                      <strong>{followings.length}</strong> Following
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
                        <Button
                          type="primary"
                          onClick={this.showFollowUserModal}
                        >
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
              pageNumber={tradesPageNumber}
              pageSize={tradesPageSize}
              totalRecord={tradesTotalRecord}
            />
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
