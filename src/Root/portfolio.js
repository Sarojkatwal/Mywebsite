import React, { Component } from "react";

import messi from "../Images/messi.jpg";
import bp from "../Images/bp.jpg";
import pep from "../Images/pep.jpg";
import busquet from "../Images/busquet.jpg";

// import  from "../Images/"
// import  from "../Images/"
// import  from "../Images/"
// import  from "../Images/"
// import  from "../Images/"
// import  from "../Images/"
// import  from "../Images/"
// import  from "../Images/"
class Portfolio extends Component {
  render() {
    const hasWindow = typeof window !== "undefined";
    const height = hasWindow ? window.innerHeight : "100%";
    return (
      <>
        <div>
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide "
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner  ">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={messi} alt="asd" width="100%" height={height} />

                <div class="carousel-caption d-none d-md-block ">
                  <h5 className="text-success">Favourite Player</h5>
                  <h1 className="text-primary">Lionel Messi</h1>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={pep} alt="asd" width="100%" height={height} />

                <div class="carousel-caption d-none d-md-block">
                  <h5 className="text-success">Favourite Coach</h5>
                  <h1 className="text-primary">Pep Guardiola</h1>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={bp} alt="asd" width="100%" height={height} />

                <div class="carousel-caption d-none d-md-block">
                  <h5 className="text-success">Favourite Writer</h5>
                  <h1 className="text-primary">BP Koirala</h1>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={busquet} alt="asd" width="100%" height={height} />

                <div class="carousel-caption d-none d-md-block">
                  <b>
                    <h5 className="text-success">Favourite Midfielder</h5>
                    <h1 className="text-primary">Sergio Busquet</h1>
                  </b>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
