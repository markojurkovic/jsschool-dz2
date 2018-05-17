import React, { Component } from "react";
import "../style/style.css";
import PixelRow from "./PixelRow";
import uuidv4 from "../../node_modules/uuid";

class RGB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionColor: false
    };
  }
  rows = [];
  rowColors = [];

  generateColors() {
    for (let i = 0; i < 10; i++) {
      let row = {};
      for (let j = 0; j < 10; j++) {
        row[j] = {
          index: j,
          color: this.props.generatingFunction()
        };
      }
      this.rowColors[i] = row;
    }
  }

  generatePanel() {
    this.generateColors();
    for (let rowNumber = 0; rowNumber < 10; rowNumber++) {
      this.rows.push(
        <PixelRow
          key={rowNumber}
          rowColors={this.rowColors[rowNumber]}
          controlRow={false}
          selectionColor={this.state.selectionColor}
          generatingFunction={this.props.generatingFunction}
          handleClick={this.handlePixelClick}
        />
      );
    }
  }

  render() {
    this.generatePanel();
    return this.rows.map(row => {
      return row;
    });
  }
}

export default RGB;
