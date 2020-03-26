import React, { Component } from "react";

import Donate from "./Donate";
import * as Skeleton from "../components/Skeleton";

import "./Contact.module.scss";

class Contact extends Component {
  constructor(props) {
    super(props);

    Donate.displayName = "Donate";
  }

  render() {
    return (
      <Skeleton.Box className="container contact-me">
        <h2>Contact Me</h2>
        <p className="center">
          Want to support or help with my projects? E-mail me at{" "}
          <a href="mailto: 4ldrich@protonmail.com">4ldrich@protonmail.com</a>
        </p>
        <section className="center">
          <Donate />
        </section>
      </Skeleton.Box>
    );
  }
}

export default Contact;
