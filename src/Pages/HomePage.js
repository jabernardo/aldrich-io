import React, { Component } from "react";
import { Helmet } from "react-helmet";

import * as Skeleton from "../Components/Skeleton";

import { Widget as Header } from "../Widgets/Header/Widget";
import { Widget as Projects } from "../Widgets/Projects/Widget";
import { Widget as Contact } from "../Widgets/Contact/Widget";

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
          <meta property="og:title" content="Aldrich's GitHub Page" />
          <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
          <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />
          <meta name="author" content="John Aldrich Bernardo" />
          <meta name="description" content="Hello! My name is John Aldrich Bernardo." />
          <meta name="keywords" content="aldrich, john aldrich, jabernardo, john aldrich bernardo, bernardo" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://jabernardo.github.io" />
          <meta property="og:author" content="John Aldrich Bernardo" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jabernardo.github.io" />
          <meta property="og:description" content="Hello! My name is John Aldrich Bernardo. This is the terminal version of my CV." />
          <meta property="og:image" content="https://jabernardo.github.io/assets/me.jpg" />
          <meta property="og:image:secure_url" content="https://jabernardo.github.io/assets/me.jpg" />
        </Helmet>
        <Header className="header" />
        <Projects />
        <Contact />
      </Skeleton.Box>
    );
  }
}

export default HomePage;
