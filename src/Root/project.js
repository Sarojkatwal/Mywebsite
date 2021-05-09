import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mr-0 mb-4">
          <h1>
            <b>Projects</b>
          </h1>
        </nav>

        <div id="accordion">
          <div className="card mb-3">
            <div className="card-header ">
              <a
                style={{
                  textDecoration: "none",
                }}
                className="card-link"
                data-toggle="collapse"
                href="#collapseOne"
              >
                1) Satra(A Project on C-Programming)
              </a>
            </div>
            <div
              id="collapseOne"
              className="collapse "
              data-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  This is a simple card game.This game is made without the use
                  of graphics.h header file. Use of array, pointer file handling
                  , decision making statements and looping statements are use
                  here for building this project.This game is made mainly for
                  entertainment purpose.
                </p>
                <h3>Team Members</h3>
                <ul>
                  <li>Saroj Kumar Katwal</li>
                  <li>Shankar Subedi</li>
                  <li>Umesh Rai</li>
                </ul>
                <div className="float-right">
                  <a href="https://github.com/Sarojkatwal/C-Lab/tree/master/projects">
                    <i className="fa fa-github m-3">
                      Click here to view the code
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">
              <a
                style={{
                  textDecoration: "none",
                }}
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseTwo"
              >
                2)Jumper(A Project on OOP)
              </a>
            </div>
            <div id="collapseTwo" className="collapse" data-parent="#accordion">
              <div className="card-body">
                <p>
                  This game is made as a project of OOP .SFML graphics libraryis
                  used to construct this game. This is a game where you have to
                  run and jump by collecting coins.Player have to save the
                  character from different obstacles on the way.Finally after
                  collecting all three flags game will be completed. Player's
                  life decreases when it get on contact with obstacles.The
                  obstacle bomb reduces the life to z- ero.When life becomes
                  zero game will be ended and score will be shown. Then we need
                  to type our name and our name and score will be saved if our
                  score is greater than fifth highscore.
                </p>
                <h3>Team Members</h3>
                <ul>
                  <li>Saroj Kumar Katwal</li>
                  <li>Pujan Dahal</li>
                  <li>Sampada Sharma</li>
                </ul>
                <div className="float-right">
                  <a href="https://github.com/Sarojkatwal/A-Project-on-OOP">
                    <i className="fa fa-github m-3">
                      Click here to view the code
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">
              <a
                style={{
                  textDecoration: "none",
                }}
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseThree"
              >
                3) A Project on Data Structure and Algorithm
              </a>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  This project shows the steps followed in Binary Search
                  Tree(BST) and Linear queue graphically .SFML(Graphics
                  Library)is use for this purpose.
                </p>
                <h3>Team Members</h3>
                <ul>
                  <li>Saroj Kumar Katwal</li>
                  <li>Sandesh Pandit</li>
                </ul>
                <div className="float-right">
                  <a href="https://github.com/Sarojkatwal/DSAProjectLinearQueue">
                    <i className="fa fa-github m-3">Linear Queue</i>
                  </a>
                </div>
                <div className="float-right">
                  <a href="https://github.com/Sarojkatwal/DSAprojectBST">
                    <i className="fa fa-github m-3">Binary Search Tree</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">
              <a
                style={{
                  textDecoration: "none",
                }}
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseEight"
              >
                4) A project on TOC
              </a>
            </div>
            <div
              id="collapseEight"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p> This is a mini-project on Theory of computation(TOC)</p>
                <div className="float-right">
                  <a href="https://github.com/Sarojkatwal/TOC_Project">
                    <i className="fa fa-github m-3">Click to view the code</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">
              <a
                style={{
                  textDecoration: "none",
                }}
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseFour"
              >
                5) A Project on Computer Graphics
              </a>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  This project mainly focuses on using algorithms for drawing
                  2-D shapes and process on them soas to make them look 3-D
                  objects.The graphics library that is supposed to be used is
                  OpenGL(Open Graphics Library).
                </p>
                <h3>Team Members</h3>
                <ul>
                  <li>Saroj Kumar Katwal</li>
                  <li>Kundan Dahal</li>
                  <li>Saurab Bhusal</li>
                  <li>Suraj Pande</li>
                </ul>
                <div className="float-right">
                  <a href="https://github.com/Sarojkatwal/GraphicsProject">
                    <i className="fa fa-github m-3">
                      Click here to view the code
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">
              <a
                style={{
                  textDecoration: "none",
                }}
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseFive"
              >
                6)LITC Intern Management
              </a>
            </div>
            <div
              id="collapseFive"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  This is the project on Database Management System(DBMS).It is
                  for managing the record of all the interns working on LICT.
                </p>
                <h3>Team Members</h3>
                <ul>
                  <li>Saroj Kumar Katwal</li>
                  <li>Kundan Dahal</li>
                  <li>Saurab Bhusal</li>
                  <li>Amir Ranabhat</li>
                </ul>
                <div className="float-right">
                  <a href="https://github.com/Sarojkatwal/SoftwareProject">
                    <i className="fa fa-github m-3">
                      Click here to view the code
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">
              <a
                style={{
                  textDecoration: "none",
                }}
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseSix"
              >
                7) A Project on Artificial Intelligence
              </a>
            </div>
            <div id="collapseSix" className="collapse" data-parent="#accordion">
              <div className="card-body">
                <p>
                  Several mini projects were done in AI course.Some of them were
                </p>
                <ul>
                  <li>Tic-Tac-Toe (Min max algorithm + alpha Beta Pruning)</li>
                  <li>Image Classification using CNN</li>
                  <li>MoonLander(Policy Gradient Reinforcement Lerning)</li>
                  <li>Mine Sweeper solution</li>
                </ul>
                <h3>Team Members</h3>
                <ul>
                  <li>Saroj Kumar Katwal</li>
                  <li>Kundan Dahal</li>
                  <li>Saurab Bhusal</li>
                </ul>
                <div className="float-right">
                  <a href="#">
                    <i className="fa fa-github m-3">
                      Click here to view the code
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">
              <a
                style={{
                  textDecoration: "none",
                }}
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseSeven"
              >
                8) Rent App(Minor Project)
              </a>
            </div>
            <div
              id="collapseSeven"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  The main objective is to develop an android app to create a
                  platform for users to register their credentials to either
                  search for vacant rent services or provide the vacant rents.
                  It is developed using react native framework.
                </p>
                <h3>Team Members</h3>
                <ul>
                  <li>Saroj Kumar Katwal</li>
                  <li>Kundan Dahal</li>
                  <li>Saurab Bhusal</li>
                </ul>
                <div className="float-right">
                  <a href="https://github.com/Sarojkatwal/RentApp/tree/Saroj">
                    <i className="fa fa-github m-3">
                      Click here to view the code
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
