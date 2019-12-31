import React, { Component } from "react";

import * as Skeleton from "../../Components/Skeleton";

import "./Style.scss";

class Widget extends Component {
  render() {
    return (
      <Skeleton.Box className="header">
        <section>
          <img className="profile" src="/assets/me-prof.png" alt={this.props.title || "John Aldrich Bernardo"} />
          <h1>{this.props.title || "John Aldrich Bernardo"}</h1>
          <a className="cli-version" href="/cv-cli">&gt; View this page in CLI version</a>
        </section>
      </Skeleton.Box>
    );
  }
}

export { Widget };
export default Widget;
