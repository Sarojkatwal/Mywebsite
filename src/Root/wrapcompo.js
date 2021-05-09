import React, { Component } from "react";

export const Wrap = (WrappedComponent) => {
  // ...and returns another component...
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        ok: "#",
        ok1: "https://www.w3schools.com/w3css/default.asp",
      };
    }
    doopen = (x, y) => {
      x.current.style.display = "block";
      y.current.style.display = "block";
    };

    doclose = (x, y) => {
      x.current.style.display = "none";
      y.current.style.display = "none";
    };

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <WrappedComponent
          {...this.props}
          ok={this.state.ok}
          ok1={this.state.ok1}
          doclose={this.doclose}
          doopen={this.doopen}
        />
      );
    }
  };
};
