import React, { Component } from "react";
import { Helmet } from "react-helmet";

import * as Skeleton from "../Components/Skeleton";

import { Widget as Header } from "../Widgets/Header/Widget";
import { Widget as Projects } from "../Widgets/Projects/Widget";
import { Widget as Contact } from "../Widgets/Contact/Widget";

import "../Styles/gradient.scss";

class HomePage extends Component {
  constructor(props) {
    super(props);

    Header.displayName = "Header";
    Projects.displayName = "Projects";
    Contact.displayName = "Contact";
  }

  render() {
    return (
      <Skeleton.Box overrideClass="true" className="homepage gradient">
        <Helmet>
          <title>John Aldrich Bernardo</title>
        </Helmet>
        <Header />
        <Projects />
        <Contact />
      </Skeleton.Box>
    );
  }
}

export default HomePage;
