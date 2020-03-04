// import React, { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import Spin from "../../ui/Antd/Spin/Spin";
import Modal from "../../ui/Antd/Modal/Modal";
import Container from "../../ui/UI/Container/Container";
import AvatarCard from "../../components/AvatarCard/AvatarCard";
import Button from "../../components/uielements/button";
import Posts from "./Trades/Posts";
import Trades from "./Trades/Trades";
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
    // const { view, height } = this.props.profile;
    console.log(
      "TCL: MyProfile -> render -> this.props.profile",
      this.props.profile
    );
    const todos = [
      {
        id: 6903,
        todo:
          "Ut corrupti eum. Magnam culpa et itaque voluptas maiores et sed molestiae ad. Ut earum est tempore enim odio hic architecto et iure. Qui dolore velit illo velit atque reprehenderit sed cupiditate.",
        createTime: "2016-12-26T15:52:07.773Z",
        color: 1,
        completed: true
      },
      {
        id: 47977,
        todo:
          "Eos quas doloremque iste aut. Harum doloribus atque. Natus quis odio eaque ea. Ut recusandae occaecati. Consequuntur deleniti qui perspiciatis veniam ut.",
        createTime: "2016-08-15T06:09:48.506Z",
        color: 3,
        completed: false
      },
      {
        id: 81193,
        todo:
          "Est quod in vel. Consequatur consequatur ipsa. Odio ea repellat aut quibusdam autem quibusdam. Ad ea quo in.",
        createTime: "2016-09-10T03:59:20.370Z",
        color: 2,
        completed: true
      },
      {
        id: 23485,
        todo:
          "Omnis non iste. Delectus omnis quaerat dicta in aut. Id velit est aliquid ut voluptas eligendi numquam.",
        createTime: "2016-07-04T04:40:50.001Z",
        color: 3,
        completed: false
      },
      {
        id: 61833,
        todo:
          "Exercitationem qui quia. Laborum suscipit qui voluptatum suscipit est accusamus. Placeat illo dolorem placeat totam.",
        createTime: "2017-06-18T00:51:31.881Z",
        color: 4,
        completed: true
      }
    ];
    const colors = ["#7ED321", "#de1b1b", "#511E78", "#ff9009", "#42a5f5"];
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

            <ContentWrapper>
              <Container className="container">
                <a href="http://localhost:3000/dashboard/scrum-board">
                  http://localhost:3000/dashboard/scrum-board
                </a>
                <br />
                <a href="http://localhost:3000/dashboard/invoice">
                  http://localhost:3000/dashboard/invoice
                </a>
                <br />
                <a href="http://localhost:3000/dashboard/cart">
                  http://localhost:3000/dashboard/cart
                </a>
                <br />
                <a href="http://localhost:3000/dashboard/card">
                  http://localhost:3000/dashboard/card
                </a>
                <hr />
                --<a>HOT_BTC</a>
                <a>20/12/2020 15:30:05</a>
                --<a>0.000000004</a>
                --<a>0.000000005</a>
                --<a>0.000000003</a>
                --<a>PROFIT / STILL / LOSS</a>
                <br />
                <Trades todos={todos} colors={colors} />
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
  profile: state.Profile,
  auth: state.auth
}))(MyProfile);
