import React, { Component } from "react";
import { Context } from "./";
import { publisher } from "../pubsub";

const { REACT_APP_SOCKET_PORT: SOCKET_PORT } = process.env;
const SOCKET_HOST = window.location.hostname;

class Provider extends Component {

  state = {
    passedDownFromProvider: "ฅ^•ﻌ•^ฅ",
    isAuthenticated: false
  };


  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider };