import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "../style.css";
class Topic extends PureComponent {
  render() {
    return (
      <div className="topicWrapper">
        {
          //list是immutable对象，所以item也是immutable对象
          this.props.list.map((item) => {
            return (
              <div className="topicItem" key={item.get("id")}>
                <img
                  className="topic-pic"
                  src={item.get("imgUrl")}
                  alt=""
                ></img>
                {item.get("title")}
              </div>
            );
          })
        }
      </div>
    );
  }
}
const mapState = (state) => {
  //list是immutable对象
  return {
    list: state.get("home").get("topicList"),
  };
};
export default connect(mapState, null)(Topic);
