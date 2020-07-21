import React, { Component } from "react";
import Typed from "typed.js";

import * as Skeleton from "../components/Skeleton";

import styles from "./ProjectCard.module.scss";

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: props.name || "Project",
      projectDescription: props.description || "Project Description",
      projectLink: props.link || "Project Link",
      projectVersion: props.version || "master",
      projectDownload: `${props.link}/archive/${props.version || "master"}.zip`,
      projectLanguage: props.language || "PL"
    };
  }

  loadProject() {
    fetch(
      "https://api.github.com/repos/jabernardo/" +
        this.state.projectName.toLocaleLowerCase() +
        "/releases/latest"
    )
      .then(res => {
        if (res.status !== 200) {
          return false;
        }

        return res.json();
      })
      .then(
        result => {
          if (typeof result.tag_name !== "undefined") {
            this.setState({
              projectVersion: result.tag_name,
              projectDownload: result.zipball_url
            });
          }
        },
        error => {
          console.log("[github-api] no releases");
        }
      )
      .catch(err => {
        console.log("[github-api] no releases");
      });
  }

  componentDidMount() {
    this.loadProject();

    this.typed = new Typed("#" + this.state.projectName.replace(/[\W]/gi, ""), {
      strings: [
        this.state.projectName,
        "@" + this.state.projectVersion,
        "written in",
        this.state.projectLanguage
      ],
      typeSpeed: (Math.random() * 10) + 100,
      backSpeed: 0,
      fadeOut: true,
      loop: true,
      startDelay: Math.random() * 1000
    });
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className={ styles.go_relative }>
        <div className={styles.typed} id={this.state.projectName.replace(/[\W]/gi, "")}>
          {this.state.projectName}
        </div>
        <p>{this.state.projectDescription}</p>
        <div className={ styles.go_bottom }>
          <Skeleton.Button isLink target="_blank" href={this.state.projectLink}>
            View
          </Skeleton.Button>
          <Skeleton.Button className={ "button button-primary " + styles.buttonPrimary } isLink href={this.state.projectDownload}>
            Download
          </Skeleton.Button>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
