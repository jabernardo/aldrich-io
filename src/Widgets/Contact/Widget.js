import React, { Component } from "react";

import { Widget as Donate } from "../Donate/Widget";

import "./Style.scss";

class Widget extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container contact-me">
        <h2>Contact Me</h2>
        <p className="center">
          Want to support or help with my projects? E-mail me at{" "}
          <a href="mailto: 4ldrich@protonmail.com">4ldrich@protonmail.com</a>
        </p>
        <section className="center">
          <Donate />
        </section>
      </div>
    );
  }
}

export { Widget };
export default Widget;
