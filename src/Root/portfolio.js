import React, { Component } from "react";

import welcome from "../Images/welcome.png";

class Portfolio extends Component {
  render() {
    const hasWindow = typeof window !== "undefined";
    const height = hasWindow ? window.innerHeight : "100%";
    return (
      <>
        <div style={{ height: "100vh" }}>
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide "
            data-bs-ride="carousel"
          >
            <img
              src={welcome}
              alt="asd"
              width="100%"
              style={{ maxHeight: height, padding: "2%" }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
