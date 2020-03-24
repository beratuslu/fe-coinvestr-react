// import React, { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import Spin from "../../ui/Antd/Spin/Spin";
import { Row, Col } from "antd";
import Modal from "../../ui/Antd/Modal/Modal";
import Container from "../../ui/UI/Container/Container";
import AvatarCard from "../../components/AvatarCard/AvatarCard";
import Button from "../../components/uielements/button";
import { RadioButton, RadioGroup } from "../../components/uielements/radio";

import Followers from "./Followers/Followers";
import Following from "./Following/Following";
import basicStyle from "../../settings/basicStyle";
import TradeList from "./TradeList/TradeList";
import Wrapper, { Banner, Navigation, ContentWrapper } from "./Profile.styles";
// import { useSelector, useDispatch } from "react-redux";
import profileActions from "../../redux/profile/actions";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.state = {
      active: "post",
      visible: false
    };
  }

  componentDidMount() {
    this.props.dispatch(profileActions.fetchProfileDataStart());
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
    const { trades } = this.props.profile;

    // const trades = [
    //   {
    //     id: 1,
    //     user: {
    //       name: "My user"
    //     },
    //     pair: "HOT_BTC",
    //     createdDate: "20/12/2020 15:30:05",
    //     buyPrice: "0.000000004",
    //     profitPrice: "0.000000005",
    //     stopPrice: "0.000000003",
    //     status: {
    //       completed: false,
    //       stopLoss: 10,
    //       profit: 50,
    //       remaining: 40
    //     }
    //   }
    // ];

    return (
      <Wrapper>
        {this.props.profile.loading !== true ? (
          <>
            <Banner
              className="profile-banner"
              style={{
                backgroundImage: `url(${this.props.profile.data.profile_bg})`
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
                      className={this.state.active === "post" ? "active" : ""}
                      onClick={() => this.handleMenu("post")}
                    >
                      {/* <strong>{this.props.profile.data.post.length}</strong>{" "} */}
                      Trades
                    </li>
                    <li
                      className={
                        this.state.active === "followers" ? "active" : ""
                      }
                      onClick={() => this.handleMenu("followers")}
                    >
                      <strong>
                        {this.props.profile.data.followers.length}
                      </strong>{" "}
                      Followers
                    </li>
                    <li
                      className={
                        this.state.active === "following" ? "active" : ""
                      }
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
                      <Button type="primary">Follow</Button>
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
              justifyContent: "center"
            }}
          >
            <Spin />
          </div>
        )}
      </Wrapper>
    );
  }
}
export default connect(state => ({
  profile: state.Profile,
  auth: state.auth
}))(MyProfile);
