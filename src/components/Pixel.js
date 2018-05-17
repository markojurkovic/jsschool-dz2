import React, { Component } from "react";
import "../style/style.css";

class Pixel extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.handleClick(
      this.props.indexInRow,
      this.props.pixelColor
    );
  };

  render() {
    let pixelStyle = {
      backgroundColor: this.props.pixelColor
    };
    return (
      <div
        className="box"
        style={pixelStyle}
        onClick={this.handleClick}
      />
    );
  }
}

export default Pixel;
