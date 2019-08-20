import React, { Component } from "react";
import Typed from "typed.js";

import "./Style.scss";

class Widget extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "console.php",
      projectDescription: "The quick brown fox jumps over the lazy dog.",
      projectLink: "https://github.com/jabernardo/console.php",
      projectVersion: "master",
      projectDownload:
        "https://github.com/jabernardo/console.php/archive/master.zip"
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

    this.typed = new Typed("#" + this.state.projectName.replace(".", "-"), {
      strings: [
        this.state.projectName,
        "@" + this.state.projectVersion,
        "written in",
        "PHP"
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
      <div className="container">
        <div className="typed" id={this.state.projectName.replace(".", "-")}>
          {this.state.projectName}
        </div>
        <p>{this.state.projectDescription}</p>
        <a className="button" target="_blank" href={this.state.projectLink}>
          View
        </a>
        <a className="button button-primary" href={this.state.projectDownload}>
          Download
        </a>
      </div>
    );
  }
}

export { Widget };
export default Widget;
