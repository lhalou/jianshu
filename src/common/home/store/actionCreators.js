import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  writerList: result.writerList,
});
const addHomeList = (list) => ({
  type: constants.GET_MORE_LIST,
  list: fromJS(list),
});
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};
export const getMoreList = (page) => {
  return (dispatch) => {
    axios
      .get("/api/homeList.json?page=" + page)
      .then((res) => {
        const result = res.data.data;
        dispatch(addHomeList(result, page + 1));
      })
      .catch(() => {
        alert("error");
      });
  };
};
export const topShow = (show) => ({
  type: constants.TOP_SHOW,
  show,
});
