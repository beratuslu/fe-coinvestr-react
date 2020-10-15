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
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFollowModalCancel = this.handleFollowModalCancel.bind(this);

    this.handleMenu = this.handleMenu.bind(this);
    this.addTrade = this.addTrade.bind(this);
    this.follow = this.follow.bind(this);

    this.onRecordTypeChange = this.onRecordTypeChange.bind(this);
    this.onTradesPageChange = this.onTradesPageChange.bind(this);
    this.avatarClick = this.avatarClick.bind(this);
    this.openUploadWidget = this.openUploadWidget.bind(this);
    this.setModalData = this.setModalData.bind(this);

    this.state = {
      active: "trades",
      visible: false,

      recordType: "myTrades",
      pageSize: 10,
      tradesPageNumber: 1,
      trades: {},
      modalVisible: false,
      symbols: [],
      createTradeLoading: false,
      profile: {},
    };
  }

  componentDidMount() {
    const { userName } = this.props.auth.user;
    const { fetchProfileDataStart, setProfileOwner, match } = this.props;

    const userNameFromRoute = match.params.userName;

    const visitingOwnProfile = userName === userNameFromRoute;

    setProfileOwner(visitingOwnProfile);
    fetchProfileDataStart(userNameFromRoute);
  }
  async makeProfileRequest() {
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
            }
            if (type === "profilePhoto") {
              updateProfilePhotoSuccess(response.user);
            }
          } catch (error) {}
        }
      }
    );
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
  handleFollowModalCancel() {
    const { changeFollowModal } = this.props;
    changeFollowModal(false);
  }
  handleMenu(type) {
    const { changeFollowModal } = this.props;
    changeFollowModal(type);
  }

  onRecordTypeChange(event) {
    const { changeTradesRecordType } = this.props;
    changeTradesRecordType(event.target.value);
    // this.setState(
    //   { recordType: event.target.value, tradesPageNumber: 1 },
    //   () => {
    //     this.makeTradesRequest();
    //   }
    // );
  }
  onTradesPageChange(tradesPageNumber) {
    const { changeTradesPageNumber } = this.props;
    changeTradesPageNumber(tradesPageNumber);
    // this.setState({ tradesPageNumber }, () => {
    //   this.makeTradesRequest();
    // });
  }
  avatarClick() {}
  setModalData(val1, val2) {}

  follow() {}
  async addTrade() {
    this.setState({ modalVisible: true });

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
  showModal = () => {
    this.setState({ modalVisible: true });
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields(async (err, values) => {
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
      } catch (error) {}

      // form.resetFields();
    });
  };
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    const {
      isSelfProfile,
      isFollowed,
      profile,
      trades,
      tradesPageNumber,
      tradesPageSize,
      tradesTotalRecord,
      followModal,
    } = this.props.profile;
    const { followers, followings } = profile;
    const { push } = this.props.history;

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
                      // onClick={() => this.handleMenu("trades")}
                    >
                      Trades
                    </li>
                    <li
                      className={classNames({
                        disabled: followers.length == 0,
                      })}
                      onClick={() => {
                        if (followers.length) {
                          this.handleMenu("followers");
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
                          this.handleMenu("following");
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
              pageNumber={tradesPageNumber}
              pageSize={tradesPageSize}
              totalRecord={tradesTotalRecord}
            />

            <Modal
              wrapClassName="follow-modal"
              visible={!!followModal}
              onCancel={this.handleFollowModalCancel}
              footer={null}
            >
              {followModal === "followers" && (
                <Followers list={followers} push={push} title="Followers" />
              )}
              {followModal === "following" && (
                <Followers list={followings} push={push} title="Following" />
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
