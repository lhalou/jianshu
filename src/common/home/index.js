import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store/index.js";
import "./style.css";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";

class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  //组件解绑 一定要移除事件绑定
  componentWillMount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
  handleScrollTop() {
    //回到页面顶部
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="homeWrapper">
        <div className="homeLeft">
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4969/efed5888b8c06b5eae2e58bf6181846de4246178.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </div>
        <div className="homeRight">
          <Recommend />
          <Writer />
        </div>
        {this.props.showScroll ? (
          <div className="backTop" onClick={this.handleScrollTop.bind(this)}>
            回到顶部
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreators.topShow(true));
    } else {
      dispatch(actionCreators.topShow(false));
    }
  },
});
export default connect(mapState, mapDispatch)(Home);
