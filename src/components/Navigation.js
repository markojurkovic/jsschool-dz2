import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

class Navigation extends Component {
  render() {
    return (
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link active" to="/rgb">
            RGB
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/bw">
            BW
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
