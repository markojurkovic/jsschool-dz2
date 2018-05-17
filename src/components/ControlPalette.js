import React, { Component } from "react";
import "../style/style.css";
import PixelRow from "./PixelRow";

class ControlPalette extends Component {
  rowPixelColors = [];

  constructor(props) {
    super(props);
    this.state = {
      colorSelected: false
    };
  }

  generateControlRow() {
    for (let i = 0; i < 10; i++) {
      let color = this.props.generatingFunction();
      this.rowPixelColors.push({
        index: i,
        color: color
      });
    }
  }

  handleControlClick = () => {
    this.props.handleClick();
  };

  componentWillMount() {
    this.generateControlRow();
  }

  render() {
    return (
      <div className="controlRow">
        <PixelRow
          rowColors={this.rowPixelColors}
          colorSelected={this.state.colorSelected}
          controlRow={true}
          handleClick={this.handleControlClick}
          handleColorChange={this.handleColorChange}
          generatingFunction={this.props.generatingFunction}
        />
      </div>
    );
  }
}

export default ControlPalette;
