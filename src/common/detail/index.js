import React, { PureComponent } from "react";
import "./style.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators } from "./store";
class Detail extends PureComponent {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="detailWrapper">
        <div className="detailHeader">{this.props.title}</div>
        <div className="detailContent">
          <img
            src="https://img95.699pic.com/photo/40100/6015.jpg_wh300.jpg"
            alt=""
          />
          <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
        </div>
      </div>
    );
  }
}
const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});
const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
});
export default connect(mapState, mapDispatch)(withRouter(Detail));
