import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mr-0 mb-1">
          <h1>
            <b>Contact</b>
          </h1>
        </nav>
        <br />

        <div className="w3-row-padding w3-center " style={{ margin: "16px" }}>
          <div className="w3-third w3-dark-grey">
            <p>
              <i className="fa fa-envelope w3-xxlarge w3-text-light-grey" />
            </p>
            <p>katwalsaroj11@gmail.com</p>
          </div>
          <div className="w3-third w3-teal">
            <p>
              <i className="fa fa-map-marker w3-xxlarge w3-text-light-grey" />
            </p>
            <p>Kathmandu,Nepal</p>
          </div>
          <div className="w3-third w3-dark-grey ">
            <p>
              <i className="fa fa-phone w3-xxlarge w3-text-light-grey" />
            </p>
            <p>9847305212</p>
          </div>
        </div>

        <div className="w3-row-padding w3-center" style={{ margin: "16px" }}>
          <div
            className="w3-third w3-dark-grey w3-hover-blue"
            onClick={() =>
              window.open("https://www.instagram.com/tilakkatwal/", "_blank")
            }
          >
            <p>
              <i className="fa fa-instagram w3-xxlarge w3-text-light-grey  " />
            </p>
            <p>Instagram</p>
          </div>
          <div
            className="w3-third w3-teal w3-hover-blue"
            onClick={() =>
              window.open("https://www.facebook.com/tilak.katwal.71/", "_blank")
            }
          >
            <p>
              <i className="fa fa-facebook-official  w3-xxlarge w3-text-light-grey " />
            </p>
            <p>Facebook</p>
          </div>
          <div
            className="w3-third w3-dark-grey w3-hover-blue"
            onClick={() =>
              window.open("https://www.twitter.com/SarojkKatwal/", "_blank")
            }
          >
            <p>
              <i className="fa fa-twitter  w3-xxlarge w3-text-light-grey" />
            </p>
            <p>Twitter</p>
          </div>
        </div>
        <div className="w3-row-padding w3-center" style={{ margin: "16px" }}>
          <div
            className="w3-third w3-dark-grey w3-hover-blue"
            onClick={() =>
              window.open("https://github.com/Sarojkatwal/", "_blank")
            }
          >
            <p>
              <i className="fa fa-github w3-xxlarge w3-text-light-grey  " />
            </p>
            <p>Github</p>
          </div>
          <div
            className="w3-third w3-teal w3-hover-blue"
            onClick={() => window.open("/", "_blank")}
          >
            <p>
              <i className="fa fa-linkedin  w3-xxlarge w3-text-light-grey " />
            </p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
