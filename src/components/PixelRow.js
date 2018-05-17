import React, { Component } from "react";
import Pixel from "./Pixel";
import "../style/style.css";
import uuidv4 from "../../node_modules/uuid";

class PixelRow extends Component {
  constructor(props) {
    super(props);

    this.pixelRow = [];
    this.state = {
      rowColors: this.props.rowColors,
      selectionColor: false
    };

    console.log("rowColors: ", this.state.rowColors);
  }

  setNewSelectionColor = color => {
    this.setState({ selectionColor: color });
  };

  changePixelColor = indexInRow => {
    let rc = this.state.rowColors;
    rc[indexInRow]["color"] = this.state.selectionColor;
    rc[indexInRow]["index"] = indexInRow;

    this.setState({
      rowColors: rc
    });
  };

  handleClick = (indexInRow, color) => {
    if (this.props.controlRow) {
      this.setNewSelectionColor(color);
    } else if (this.state.selectionColor) {
      this.changePixelColor(indexInRow);
    }
  };

  generateRow() {
    let row = [];
    for (let pixelIndex in this.state.rowColors) {
      row.push(
        <Pixel
          key={this.state.rowColors[pixelIndex]["index"]}
          indexInRow={this.state.rowColors[pixelIndex]["index"]}
          pixelColor={this.state.rowColors[pixelIndex]["color"]}
          handleClick={this.handleClick}
        />
      );
    }

    this.pixelRow = row;
  }

  render() {
    console.log("New state: ", this.state);
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
