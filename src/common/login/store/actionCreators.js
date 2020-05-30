import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";
const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true,
});
export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get("/api/login.json?account=" + account + "&password= " + password)
      .then((res) => {
        console.log(res);
        const result = res.data.data;
        console.log(result);
        if (result) {
          dispatch(changeLogin());
        } else {
          console.log("error");
        }
      });
  };
};
export const logout = () => ({
  type: constants.CHANGE_LOGOUT,
  value: false,
});
