import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import "../style.css";
import { actionCreators } from "../store/index.js";
import { Link } from "react-router-dom";
class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <Fragment>
        {list.map((item, index) => {
          return (
            <Link key={index} to={"/detail/ " + item.get("id")}>
              <div className="listItem">
                <img className="pic" src={item.get("imgUrl")} alt=""></img>
                <div className="listInfo">
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </div>
              </div>
            </Link>
          );
        })}
        <div className="loadMore" onClick={() => getMoreList(page)}>
          加载更多
        </div>
      </Fragment>
    );
  }
}
const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"]),
});
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    const action = actionCreators.getMoreList(page);
    dispatch(action);
  },
});
export default connect(mapState, mapDispatch)(List);
