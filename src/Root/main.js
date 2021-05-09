import React, { Component } from "react";
import Portfolio from "./portfolio";
import Footer from "./footer";
import About from "./about";
import Contact from "./contact";
import Project from "./project";
import Sidebars from "./sidebar";
import Literature from "./Literature/home";
import Error from "./error";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" col-md-2 col-lg-3 ">
            <Sidebars />
          </div>
          <div
            className=" col-md-10 col-lg-9 "
            style={{
              height: "100%",
              paddingLeft: "30px",
            }}
          >
            <div
              style={{
                minHeight: "90vh",
              }}
            >
              <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route path="/about" component={About} />
                <Route path="/project" component={Project} />
                <Route path="/contact" component={Contact} />
                <Route path="/literature" component={Literature} />
                <Route component={Error} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
