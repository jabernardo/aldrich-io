import React, { Component } from "react";
import { Image, Placeholder } from "cloudinary-react";

import * as Skeleton from "../components/Skeleton";

import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <Skeleton.Box className={styles.header}>
        <section>
          <Image
            publicId="portfolio/me-prof_ghmwhg.png"
            height={256}
            width={256}
            loading="lazy"
            dpr="auto"
            responsive
            crop="scale"
            responsiveUseBreakpoints="true"
            className={styles.profile}
          >
            <Placeholder type="pixelate" />
          </Image>

          <h1>{this.props.title || "John Aldrich Bernardo"}</h1>
          <a className={styles["cli-version"]} href="/cv-cli">&gt; View this page in CLI version</a>
        </section>
      </Skeleton.Box>
    );
  }
}

export default Header;
