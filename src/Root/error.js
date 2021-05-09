import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export class Error extends Component {
  render() {
    alert("No such route");
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }
}

export default Error;
