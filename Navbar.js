import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">News App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link  active " to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  " to="/Business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link   " to="/Sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link   " to="/Technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link   " to="/Health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link   " to="/Science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link   " to="/Entertainment">Entertainment</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
