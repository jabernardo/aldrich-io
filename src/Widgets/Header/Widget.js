import React, { Component } from "react";

import * as Skeleton from "../../Components/Skeleton";

import "./Style.scss";

class Widget extends Component {
  render() {
    return (
      <Skeleton.Box>
        <section className="header">
          <h1>{this.props.title || "John Aldrich Bernardo"}</h1>
        </section>
      </Skeleton.Box>
    );
  }
}

export { Widget };
export default Widget;
