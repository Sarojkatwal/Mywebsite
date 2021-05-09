import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <>
        <div id="about">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary mr-0 mb-1">
            <h1>
              <b>About Me</b>
            </h1>
          </nav>
        </div>

        <div
          className="w3-container w3-padding-large"
          style={{ marginBottom: "32px" }}
        >
          <p>
            My name is Saroj Kumar Katwal. I'm a student of Computer Engineering
            at IOE Pulchowk Campus. I was born and raised in Okhaldhunga. I did
            SLC from Lali Guransh English School(LGES),Okhaldhunga. Then I did
            my +2 from Active Academy College,Bashundhara Kathmandu.
          </p>
          <p>
            I love reading books mostly related to history,mythology and
            philosophy. I’m also interested in collecting books I would love to
            have my own library. I also write poems ,gajals,muktaks and stories.
            I like to play football and watch almost every live matches of
            Barcelona FC and Manchester City FC.I am a great fan of Lionel Messi
            and Pep Guardiola.I also watch gangster movies and series during my
            free times.
          </p>

          <p>
            I also like to travel. I believe travelling gives you a new
            perspective to everything. You get to know a lot about the different
            cultures, their history, the language and all the small unique
            things every place has to offer.
          </p>
          <hr />

          <h3>
            <b>Skills</b>
          </h3>

          <p>HTML ,CSS & BOOTSTRAP</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-green w3-padding w3-center"
              style={{ width: "95%" }}
            >
              95%
            </div>
          </div>
          <br />
          <p>Javascript</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-green w3-padding w3-center"
              style={{ width: "95%" }}
            >
              95%
            </div>
          </div>
          <br />
          <p>React JS</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-green w3-padding w3-center"
              style={{ width: "95%" }}
            >
              95%
            </div>
          </div>
          <br />
          <p>Node JS and Express</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-green w3-padding w3-center"
              style={{ width: "85%" }}
            >
              85%
            </div>
          </div>
          <br />
          <p>PHP ,Mysql & MongoDB</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-green w3-padding w3-center"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
          <br />
          <p>React Native and Paper</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-green w3-padding w3-center"
              style={{ width: "95%" }}
            >
              95%
            </div>
          </div>
          <br />
          <p>Machine Learning and Deep Learning</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-green w3-padding w3-center"
              style={{ width: "80%" }}
            >
              80%
            </div>
          </div>
          <br />
          <p>C/C++</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-green w3-padding w3-center"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
          <br />
          <p>Python (NumPy,Matplotlib,Pandas,SciPy,Pygame etc..)</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-green w3-padding w3-center"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
          <br />
          <p>Graphics library (OpenGL and SFML)</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-green w3-padding w3-center"
              style={{ width: "70%" }}
            >
              70%
            </div>
          </div>
          <br />
          <br />
          <p>
            <button className="w3-button w3-grey w3-padding-large w3-margin-top w3-margin-bottom">
              <i className="fa fa-download w3-margin-right" />
              Download Resume
            </button>
          </p>
          <hr />
        </div>
      </>
    );
  }
}

export default About;
