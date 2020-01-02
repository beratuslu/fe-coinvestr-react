import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Input from "../../components/uielements/input";
import Checkbox from "../../components/uielements/checkbox";
import Button from "../../components/uielements/button";
import authAction from "../../redux/auth/actions";
import appAction from "../../redux/app/actions";
import Auth0 from "../../helpers/auth0";
import Firebase from "../../helpers/firebase";
import FirebaseLogin from "../../components/firebase";
import IntlMessages from "../../components/utility/intlMessages";
import Form from "../../components/uielements/form";
import SignInStyleWrapper from "./signin.style";
const FormItem = Form.Item;

const { login } = authAction;
const { clearMenu } = appAction;

class SignIn extends Component {
  state = {
    redirectToReferrer: false
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  // handleLogin = (token = false) => {
  //   const { login, clearMenu } = this.props;
  //   if (token) {
  //     console.log("1");
  //     login(token);
  //   } else {
  //     console.log("2");
  //     login();
  //   }
  //   clearMenu();
  //   this.props.history.push("/dashboard");
  // };

  handleLogin = e => {
    e.preventDefault();
    const { login, clearMenu } = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("geldi mi?");
        // Notification(
        //   "success",
        //   "Received values of form",
        //   JSON.stringify(values)
        // );
        login({ email: values.email, password: values.password });
      }
    });
  };
  render() {
    // const { history } = this.props;
    const from = { pathname: "/dashboard" };
    const { redirectToReferrer } = this.state;
    const { getFieldDecorator } = this.props.form;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>
            <Form onSubmit={this.handleSubmit}>
              <div className="isoSignInForm">
                <div className="isoInputWrapper">
                  {/* <Input size="large" placeholder="Username" /> */}

                  <FormItem hasFeedback>
                    {getFieldDecorator("email", {
                      rules: [
                        {
                          type: "email",
                          message: "The input is not valid E-mail!"
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!"
                        }
                      ]
                    })(
                      <Input
                        size="large"
                        name="email"
                        placeholder="E-mail"
                        id="email"
                      />
                    )}
                  </FormItem>
                </div>
                <div className="isoInputWrapper">
                  {/* <Input size="large" placeholder="Username" /> */}

                  <FormItem hasFeedback>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your password!"
                        }
                      ]
                    })(
                      <Input
                        size="large"
                        placeholder="Password"
                        name="password"
                        id="password"
                        type="password"
                      />
                    )}
                  </FormItem>
                </div>

                {/* <div className="isoInputWrapper">
                  <Input size="large" type="password" placeholder="Password" />
                </div> */}

                <div className="isoInputWrapper isoLeftRightComponent">
                  <Checkbox>
                    <IntlMessages id="page.signInRememberMe" />
                  </Checkbox>
                  <Button type="primary" onClick={this.handleLogin}>
                    <IntlMessages id="page.signInButton" />
                  </Button>
                </div>

                {/* <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p> */}

                <div className="isoInputWrapper isoOtherLogin">
                  {/* <Button
                  onClick={this.handleLogin}
                  type="primary"
                  className="btnFacebook"
                >
                  <IntlMessages id="page.signInFacebook" />
                </Button>
                <Button
                  onClick={this.handleLogin}
                  type="primary"
                  className="btnGooglePlus"
                >
                  <IntlMessages id="page.signInGooglePlus" />
                </Button>

                {Auth0.isValid && (
                  <Button
                    onClick={() => {
                      Auth0.login();
                    }}
                    type="primary"
                    className="btnAuthZero"
                  >
                    <IntlMessages id="page.signInAuth0" />
                  </Button>
                )}

                {Firebase.isValid && (
                  <FirebaseLogin history={history} login={this.props.login} />
                )} */}
                </div>

                <div className="isoCenterComponent isoHelperWrapper">
                  <Link to="/forgotpassword" className="isoForgotPass">
                    <IntlMessages id="page.signInForgotPass" />
                  </Link>
                  <Link to="/signup">
                    <IntlMessages id="page.signInCreateAccount" />
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.token !== null ? true : false
  }),
  { login, clearMenu }
)(Form.create()(SignIn));
