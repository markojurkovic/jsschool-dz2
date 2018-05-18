import React, { Component } from "react";
import "../style/style.css";
import PixelRow from "./PixelRow";
import GrayscalePanel from "./GrayscalePanel";

class RGB extends Component {
  rc = [];
  constructor(props) {
    super(props);
    this.state = {
      rowColors: []
    };
  }

  handleGridPixelClick = (rowNumber, indexInRow, pixelColor) => {
    if (!this.props.selectedColor) {
      return;
    }
    let rc = this.state.rowColors;
    rc[rowNumber][indexInRow]["color"] = this.props.selectedColor;

    this.setState({
      rowColors: rc
    });
  };

  bw = () => {
    this.generatePanel();
    return <GrayscalePanel colors={this.state.rowColors} />;
  };

  generateColors() {
    for (let i = 0; i < 10; i++) {
      let row = {};
      for (let j = 0; j < 10; j++) {
        row[j] = {
          index: j,
          color: this.props.generatingFunction()
        };
      }
      this.rc[i] = row;
    }

    this.setState({
      rowColors: this.rc
    });
  }

  generatePanel() {
    let rows = [];
    for (let rowNumber = 0; rowNumber < 10; rowNumber++) {
      rows.push(
        <PixelRow
          key={rowNumber}
          rowNumber={rowNumber}
          rowColors={this.state.rowColors[rowNumber]}
          controlRow={false}
          selectionColor={this.state.selectionColor}
          generatingFunction={this.props.generatingFunction}
          handleClick={this.handleGridPixelClick}
        />
      );
    }
    return rows;
  }

  componentWillMount() {
    this.generateColors();
  }

  render() {
    return this.props.grayscaleColors
      ? this.bw()
      : this.generatePanel();
  }
}

export default RGB;
