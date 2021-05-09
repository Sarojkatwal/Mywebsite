import React, { Component } from "react";
import "./App.css";
import Main from "./Root/main";
import { HashRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Main />
      </HashRouter>
    );
  }
}

export default App;
