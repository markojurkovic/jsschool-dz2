import React, { Component } from "react";
import RGB from "./components/RGB";
import ControlPalette from "./components/ControlPalette";
import "./style/style.css";

class AppContainer extends Component {
  generateRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  render() {
    return (
      <div className="grid">
        <RGB generatingFunction={this.generateRandomColor} />

        <ControlPalette
          generatingFunction={this.generateRandomColor}
        />
      </div>
    );
  }
}

export default AppContainer;
