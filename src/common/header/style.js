import styled from "styled-components";
import logoPic from "../../statics/logo.png";
export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: 100% 100%;
`;
export const Nav = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  padding-right: 80px;
  cursor: pointer;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({ placeholder: "搜索" })`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-enter {
    width: 160px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 240px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-left: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`;
export const SearchInfoTitile = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 13px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;

  .spin {
    font-size: 12px;
    margin-right: 2px;
    display: block;
    float: left;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
export const SearchInfoItem = styled.div`
  padding: 0 5px;
  line-height: 20px;
  font-size: 11px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const Addition = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 10px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.ref {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
    margin-left: 10px;
  }
`;
