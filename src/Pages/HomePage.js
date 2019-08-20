import React, { Component } from "react";

import * as Skeleton from "../Components/Skeleton";

import { Header } from "../Widgets/Header/Widget";
import { Projects } from "../Widgets/Projects/Widget";
import { Widget as Contact } from "../Widgets/Contact/Widget";

import "../Styles/gradient.scss";

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Skeleton.Box overrideClass="true" className="homepage gradient">
        <Header />
        <Projects />
        <Contact />
      </Skeleton.Box>
    );
  }
}

export default HomePage;
