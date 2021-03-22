import React, { Component } from "react";
import Head from "next/head";
import { CloudinaryContext } from "cloudinary-react";

import * as Skeleton from "../components/Skeleton";

import Header from "../widgets/Header";
import Projects from "../widgets/Projects";
import Contact from "../widgets/Contact";

class Index extends Component {
  constructor(props) {
    super(props);

    Header.displayName = "Header";
    Projects.displayName = "Projects";
    Contact.displayName = "Contact";
  }

  render() {
    return (
      <CloudinaryContext cloudName="sudoaldrich">
        <Skeleton.Box overrideClass="true" className="homepage gradient">
          <Head>
            <title>John Aldrich Bernardo</title>
            <meta property="og:title" content="Aldrich's GitHub Page" />
            <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
            <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />
            <meta name="author" content="John Aldrich Bernardo" />
            <meta name="description" content="Hello! My name is John Aldrich Bernardo." />
            <meta name="keywords" content="aldrich, john aldrich, jabernardo, john aldrich bernardo, bernardo" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href="https://jabernardo.github.io" />
            <meta property="og:author" content="John Aldrich Bernardo" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://jabernardo.github.io" />
            <meta property="og:description" content="Hello! My name is John Aldrich Bernardo. Click here to know me!" />
            <meta property="og:image" content="https://jabernardo.github.io/assets/me.jpg" />
            <meta property="og:image:secure_url" content="https://jabernardo.github.io/assets/me.jpg" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-105779805-1"></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());

                gtag('config', 'UA-105779805-1');
              `
            }}></script>
          </Head>
          <Header className="header" />
          <Projects />
          <Contact />
        </Skeleton.Box>
      </CloudinaryContext>
    );
  }
}

export default Index;
