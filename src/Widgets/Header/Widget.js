import React, { Component } from "react";

import * as Skeleton from "../../Components/Skeleton";

import "./Style.scss";

class Widget extends Component {
  render() {
    return (
      <Skeleton.Box className="header">
        <section>
          <h1>{this.props.title || "John Aldrich Bernardo"}</h1>
          <a href="/sh">CLI</a>
        </section>
      </Skeleton.Box>
    );
  }
}

export { Widget };
export default Widget;
