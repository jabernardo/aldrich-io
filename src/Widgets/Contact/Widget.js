import React, { Component } from "react";

import { Widget as Donate } from "../Donate/Widget";
import * as Skeleton from "../../Components/Skeleton";

import "./Style.scss";

class Widget extends Component {
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

export { Widget };
export default Widget;
