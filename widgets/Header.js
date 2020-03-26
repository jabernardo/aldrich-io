import React, { Component } from "react";

import * as Skeleton from "../components/Skeleton";

import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <Skeleton.Box className={styles.header}>
        <section>
          <img className={styles.profile} src="/assets/me-prof.png" alt={this.props.title || "John Aldrich Bernardo"} />
          <h1>{this.props.title || "John Aldrich Bernardo"}</h1>
          <a className={styles["cli-version"]} href="/cv-cli">&gt; View this page in CLI version</a>
        </section>
      </Skeleton.Box>
    );
  }
}

export default Header;
