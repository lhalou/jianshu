import React, { Component } from "react";
import Header from "./common/header/index.js";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./common/home/index.js";
import Detail from "./common/detail/loadable.js";
import store from "./store/index.js";
import Login from "./common/login/index.js";
import Write from "./common/write/index";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
