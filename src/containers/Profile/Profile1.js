// import React, { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import Spin from "../../ui/Antd/Spin/Spin";
import Modal from "../../ui/Antd/Modal/Modal";
import Container from "../../ui/UI/Container/Container";
import AvatarCard from "../../components/AvatarCard/AvatarCard";
import Button from "../../components/uielements/button";
import Posts from "./Posts/Posts";
import Followers from "./Followers/Followers";
import Following from "./Following/Following";
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
    // const { view, height } = this.props;
    console.log("TCL: MyProfile -> render -> this.props", this.props);
    return (
      <Wrapper>
        {this.props.loading !== true ? (
          <>
            <Banner
              className="profile-banner"
              style={{ backgroundImage: `url(${this.props.data.profile_bg})` }}
            >
              <Container className="container">
                <AvatarCard
                  avatar={this.props.data.avatar}
                  name={this.props.data.name}
                  username={this.props.data.username}
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
                      <strong>{this.props.data.post.length}</strong> Trades
                    </li>
                    <li
                      className={
                        this.state.active === "followers" ? "active" : ""
                      }
                      onClick={() => this.handleMenu("followers")}
                    >
                      <strong>{this.props.data.followers.length}</strong>{" "}
                      Followers
                    </li>
                    <li
                      className={
                        this.state.active === "following" ? "active" : ""
                      }
                      onClick={() => this.handleMenu("following")}
                    >
                      <strong>{this.props.data.following.length}</strong>{" "}
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

            <ContentWrapper>
              <Container className="container">
                <Posts
                  avatar={this.props.data.avatar}
                  username={this.props.data.username}
                  data={this.props.data.post}
                />
                <Modal
                  wrapClassName="follow-modal"
                  visible={this.state.visible}
                  onCancel={this.handleCancel}
                  footer={null}
                >
                  {this.state.active === "followers" && (
                    <Followers data={this.props.data.followers} />
                  )}
                  {this.state.active === "following" && (
                    <Following data={this.props.data.following} />
                  )}
                </Modal>
              </Container>
            </ContentWrapper>
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
  ...state.Profile
}))(MyProfile);
