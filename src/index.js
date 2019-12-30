import React, { Component } from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Sh from "./Pages/Sh";

import "./Styles/normalize.css";
import "./Styles/skeleton.css";

import "./Styles/global.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John Aldrich Bernardo"
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/sh">
            <Sh name={this.state.name} />
          </Route>
          <Route path="/">
            <HomePage name={this.state.name} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
