import React, { Component } from "react";
import Pixel from "./Pixel";
import "../style/style.css";

class PixelRow extends Component {
  constructor(props) {
    super(props);
    this.pixelRow = [];
  }

  generateRow() {
    let row = [];
    for (let pixelIndex in this.props.rowColors) {
      row.push(
        <Pixel
          key={this.props.rowColors[pixelIndex]["index"]}
          indexInRow={this.props.rowColors[pixelIndex]["index"]}
          rowNumber={this.props.rowNumber}
          pixelColor={this.props.rowColors[pixelIndex]["color"]}
          handleClick={this.props.handleClick}
        />
      );
    }

    this.pixelRow = row;
  }

  render() {
    this.generateRow();
    return (
      <div className="row">
        {this.pixelRow.map(pixel => {
          return pixel;
        })}
      </div>
    );
  }
}

export default PixelRow;
