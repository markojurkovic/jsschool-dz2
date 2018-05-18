import React, { Component } from "react";
import "../style/style.css";
import PixelRow from "./PixelRow";

class ControlPalette extends Component {
  rowPixelColors = [];

  generateControlRowColors() {
    for (let i = 0; i < 10; i++) {
      let color = this.props.generatingFunction();
      this.rowPixelColors.push({
        index: i,
        color: color
      });
    }
  }

  handleColorPaletteClick = (
    rowNumber,
    indexInRow,
    selectedPixelColor
  ) => {
    this.props.handleClick(selectedPixelColor);
  };

  componentWillMount() {
    this.generateControlRowColors();
  }

  render() {
    return (
      <div className="controlRow">
        <PixelRow
          rowColors={this.rowPixelColors}
          colorSelected={this.props.colorSelected}
          handleClick={this.handleColorPaletteClick}
          generatingFunction={this.props.generatingFunction}
        />
      </div>
    );
  }
}

export default ControlPalette;
