import React, { PureComponent } from "react";
import "../style.css";
class Recommend extends PureComponent {
  render() {
    return (
      <div className="recommendWrapper">
        <div className="recommendItem huiyuan"></div>
        <div className="recommendItem lianzai"></div>
        <div className="recommendItem banquan"></div>
        <div className="recommendItem xuetang"></div>
      </div>
    );
  }
}
export default Recommend;
