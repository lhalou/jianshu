import React, { PureComponent } from "react";
import { connect } from "react-redux";

class Writer extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <div className="writerWrapper">
        {list.map((item) => {
          return (
            <div className="writer" key={item.get("id")}>
              <img className="writerImg" src={item.get("imgUrl")} alt=""></img>
              <p className="writerName">{item.get("name")}</p>
              <p className="writerTitle">{item.get("title")}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapState = (state) => ({
  list: state.getIn(["home", "writerList"]),
});
export default connect(mapState)(Writer);
