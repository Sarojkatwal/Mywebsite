import React, { Component } from "react";
import $ from "jquery";
import "./home.css";
import firebase from "../../Firebase/firebase";

class Home extends Component {
  constructor(state) {
    super(state);
    this.state = {
      ok: "#",
      data: [],
    };
  }
  componentDidMount = () => {
    let modalId = $("#image-gallery");
    var x = [];
    firebase
      .firestore()
      .collection("Images")
      .get()
      .then((querySnapshot) => {
        //console.log("Query", querySnapshot);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log("Hello");
          //console.log(doc.data());
          x.push(doc.data().downloadURL);
        });
      })
      .then(() => {
        this.setState(
          {
            ...this.state,
            data: x,
          },
          () => {
            console.log("OK", this.state);
          }
        );
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    $(document).ready(function () {
      loadGallery(true, "a.thumbnail");

      //This function disables buttons when needed
      function disableButtons(counter_max, counter_current) {
        $("#show-previous-image, #show-next-image").show();
        if (counter_max === counter_current) {
          $("#show-next-image").hide();
        } else if (counter_current === 1) {
          $("#show-previous-image").hide();
        }
      }

      function loadGallery(setIDs, setClickAttr) {
        let current_image,
          selector,
          counter = 0;

        $("#show-next-image, #show-previous-image").click(function () {
          if ($(this).attr("id") === "show-previous-image") {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

        function updateGallery(selector) {
          let $sel = selector;
          current_image = $sel.data("image-id");
          $("#image-gallery-title").text($sel.data("title"));
          $("#image-gallery-image").attr("src", $sel.data("image"));
          disableButtons(counter, $sel.data("image-id"));
        }

        if (setIDs === true) {
          $("[data-image-id]").each(function () {
            counter++;
            $(this).attr("data-image-id", counter);
          });
        }
        $(setClickAttr).on("click", function () {
          updateGallery($(this));
        });
      }
    });

    // build key actions
  };

  show = (x) => {
    window.open(x, "_blank");
  };

  render() {
    //console.log(this.state.data);
    const imgs = this.state.data.map((img) => (
      <div className="col-lg-3 col-md-4 col-xs-6 thumb w3-hover-opacity">
        <img
          className="img-thumbnail"
          src={img}
          onClick={() => this.show(img)}
          alt="Another alt text"
        />
      </div>
    ));
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mr-0 mb-1">
          <h1>
            <b>Literature</b>
          </h1>
        </nav>
        <div className="row">
          <div className="row"></div>
          {imgs}
          <div
            className="modal fade"
            id="image-gallery"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    );
  }
}

export default Home;
