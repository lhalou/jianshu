import React, { PureComponent } from "react";
import "./style.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionCreators } from "./store/index.js";
class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <div className="loginWrapper">
          <div className="loginBox">
            <input
              className="loginInput"
              placeholder="用户名"
              ref={(input) => (this.account = input)}
            ></input>
            <input
              className="loginInput"
              placeholder="密码"
              type="password"
              ref={(input) => (this.password = input)}
            ></input>
            <div
              className="loginBtn"
              onClick={() => this.props.login(this.account, this.password)}
            >
              提交
            </div>
          </div>
        </div>
      );
    } else {
      //重定向到首页
      return <Redirect to="/" />;
    }
  }
}
const mapState = (state) => ({
  loginStatus: state.getIn(["login", "login"]),
});
const mapDispatch = (dispatch) => ({
  login(accountElement, passwordElement) {
    console.log(accountElement.value, passwordElement.value);
    dispatch(actionCreators.login(accountElement.value, passwordElement.value));
  },
});
export default connect(mapState, mapDispatch)(Login);
