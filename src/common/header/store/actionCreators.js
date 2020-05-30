import * as constants from "./constants.js";
import Axios from "axios";
import { fromJS } from "immutable";
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  //接受到的data是js对象，而reducer中处理的是immutable对象，所以需要对data进行数据转换
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
});
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
});
export const getList = () => {
  return (dispatch) => {
    Axios.get("/api/headerList.json")
      .then((res) => {
        const data = res.data;
        //data.data是js对象
        dispatch(changeList(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
