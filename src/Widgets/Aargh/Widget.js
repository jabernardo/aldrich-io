import React, { Component } from "react";
import Typed from "typed.js";

import * as Skeleton from "../../Components/Skeleton";

import "./Style.scss";

class Widget extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "aargh",
      projectDescription: "The quick brown fox jumps over the lazy dog.",
      projectLink: "https://github.com/jabernardo/aargh",
      projectVersion: "master",
      projectDownload: "https://github.com/jabernardo/aargh/archive/master.zip"
    };
  }

  loadProject() {
    fetch(
      "https://api.github.com/repos/jabernardo/" +
        this.state.projectName.toLocaleLowerCase() +
        "/releases/latest"
    )
      .then(res => {
        if (res.status != 200) {
          return false;
        }

        return res.json();
      })
      .then(
        result => {
          if (typeof result.tag_name != "undefined") {
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

    this.typed = new Typed("#" + this.state.projectName, {
      strings: [
        this.state.projectName,
        "@" + this.state.projectVersion,
        "written in",
        "Go"
      ],
      typeSpeed: Math.random() * 10,
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
      <Skeleton.Box>
        <div className="typed" id={this.state.projectName}>
          {this.state.projectName}
        </div>
        <p>{this.state.projectDescription}</p>
        <Skeleton.Button isLink target="_blank" href={this.state.projectLink}>
          View
        </Skeleton.Button>
        <Skeleton.Button isLink isPrimary href={this.state.projectDownload}>
          Download
        </Skeleton.Button>
      </Skeleton.Box>
    );
  }
}

export { Widget };
export default Widget;
