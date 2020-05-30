import { fromJS } from "immutable";
import * as constants from "./constants.js";
const defaultStore = fromJS({
  topicList: [],
  articleList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    //action.topicList为普通对象，topicList是immutable对象，要做数据类型的转换
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    writerList: fromJS(action.writerList),
  });
};
const getMoreList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    aticlePage: action.newPage,
  });
};
export default (state = defaultStore, action) => {
  //if语句 使用switch--case代替
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    //merge就代替了set()方法的链式调用
    case constants.GET_MORE_LIST:
      return getMoreList(state, action);
    case constants.TOP_SHOW:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
