import React, { Component } from "react";

import "./Style.scss";

class Widget extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <section className="header">
          <h1>{this.props.title || "John Aldrich Bernardo"}</h1>
        </section>
      </div>
    );
  }
}

class Header extends Widget {
  constructor() {
    super();
  }
}

export { Widget, Header };
export default Widget;
