import React, { Component } from "react";
import RGB from "./components/RGB";
import ControlPalette from "./components/ControlPalette";
import "./style/style.css";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Navigation from "./components/Navigation";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: false
    };
  }
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

  handleControlClick = color => {
    this.setState({
      selectedColor: color
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route
              path="/rgb"
              render={props => (
                <div className="grid">
                  <RGB
                    generatingFunction={this.generateRandomColor}
                    selectedColor={this.state.selectedColor}
                  />

                  <ControlPalette
                    generatingFunction={this.generateRandomColor}
                    handleClick={this.handleControlClick}
                  />
                </div>
              )}
            />

            <Route
              path="/bw"
              render={props => (
                <div className="grid">
                  <RGB
                    grayscaleColors={true}
                    generatingFunction={this.generateRandomColor}
                  />
                </div>
              )}
            />
            <Route
              exact
              path="/"
              render={props => (
                <div className="grid">
                  <RGB
                    generatingFunction={this.generateRandomColor}
                    selectedColor={this.state.selectedColor}
                  />

                  <ControlPalette
                    generatingFunction={this.generateRandomColor}
                    handleClick={this.handleControlClick}
                  />
                </div>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
