import React, { Component } from "react";
//import logo from "../logo192.png";
import Tooltip from "@material-ui/core/Tooltip";
import saroj from "../Images/saroj.JPG";
import { Wrap } from "./wrapcompo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

class Sidebars extends Component {
  constructor(props) {
    super(props);
    this.sidebar = React.createRef();
    this.overlay = React.createRef();
    this.pp = React.createRef();
  }

  show = () => {
    var x = this.pp.current.src;
    window.open(x, "_blank");
  };
  render() {
    return (
      <>
        <div
          className="w3-overlay  w3-animate-blue"
          onClick={() => this.props.doclose(this.sidebar, this.overlay)}
          ref={this.overlay}
          style={{ cursor: "pointer" }}
          title="close side menu"
          id="myOverlay"
        />
        <nav
          className="w3-sidebar w3-collapse w3-white w3-animate-left"
          style={{ zIndex: 3, width: "300px" }}
          id="mySidebar"
          ref={this.sidebar}
        >
          <br />
          <div className="w3-container">
            <span
              className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey "
              onClick={() => this.props.doclose(this.sidebar, this.overlay)}
            >
              <i className="fa fa-bars" />
            </span>
            <br />

            <Tooltip title="Click to view" placement="top">
              <img
                className="w3-hover-opacity"
                ref={this.pp}
                onClick={this.show}
                src={saroj}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                }}
                alt="logo"
              />
            </Tooltip>

            <br />
            <br />
          </div>
          <div className="w3-bar-block">
            <NavLink
              exact
              activeStyle={{ color: "magenta" }}
              to="/"
              //onClick={() => this.props.doclose(this.sidebar, this.overlay)}
              className="w3-bar-item w3-button w3-padding "
            >
              <i className="fa fa-th-large fa-fw w3-margin-right" />
              HOME
            </NavLink>
            <NavLink
              exact
              activeStyle={{ color: "magenta" }}
              to="/about"
              onClick={() => this.props.doclose(this.sidebar, this.overlay)}
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-user fa-fw w3-margin-right" />
              ABOUT
            </NavLink>
            <NavLink
              exact
              activeStyle={{ color: "magenta" }}
              to="/project"
              onClick={() => this.props.doclose(this.sidebar, this.overlay)}
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-file-code-o fa-fw w3-margin-right" />
              PROJECTS
            </NavLink>
            <NavLink
              exact
              activeStyle={{ color: "magenta" }}
              to="/contact"
              onClick={() => this.props.doclose(this.sidebar, this.overlay)}
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-envelope fa-fw w3-margin-right" />
              CONTACT
            </NavLink>
          </div>
        </nav>

        <span
          className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
          onClick={() => this.props.doopen(this.sidebar, this.overlay)}
        >
          <i className="fa fa-bars" />
        </span>
      </>
    );
  }
}

export default Wrap(Sidebars);
