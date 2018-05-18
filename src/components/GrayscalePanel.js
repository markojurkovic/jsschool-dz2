import React, { Component } from "react";
import PixelRow from "./PixelRow";
import Color from "../../node_modules/color";

class GrayscalePanel extends Component {
  generatePanel() {
    let rows = [];
    for (let rowNumber = 0; rowNumber < 10; rowNumber++) {
      let gsColors = {};
      let rowColors = this.props.colors[rowNumber];

      for (let pixelIndex in rowColors) {
        let color = Color(rowColors[pixelIndex]["color"]);
        gsColors[pixelIndex] = {
          index: rowColors[pixelIndex]["index"],
          color: color.grayscale().string()
        };
      }

      rows.push(
        <PixelRow
          key={rowNumber}
          rowNumber={rowNumber}
          rowColors={gsColors}
          handleClick={() => {}}
        />
      );
    }
    return rows;
  }
  render() {
    return this.generatePanel();
  }
}

export default GrayscalePanel;
