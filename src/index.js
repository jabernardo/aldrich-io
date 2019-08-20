import React, { Component } from "react";
import { render } from "react-dom";

import HomePage from "./Pages/HomePage";

import "./Styles/normalize.css";
import "./Styles/skeleton.css";

import "./Styles/global.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "John Aldrich Bernardo"
    };
  }

  render() {
    return <HomePage name={this.state.name} />;
  }
}

render(<App />, document.getElementById("root"));
