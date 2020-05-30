import { fromJS } from "immutable";
import * as constants from "./constants.js";
const defaultStore = fromJS({
  login: false,
});

export default (state = defaultStore, action) => {
  //if语句 使用switch--case代替
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set("login", action.value);
    case constants.CHANGE_LOGOUT:
      return state.set("login", action.value);
    default:
      return state;
  }
};
