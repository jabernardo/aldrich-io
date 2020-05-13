import React, { Component } from "react";

import * as Skeleton from "../components/Skeleton";

import ProjectCard  from "./ProjectCard";

import styles from "./Projects.module.scss";
import { map } from "jquery";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  loadDb() {
    fetch("/database.json")
      .then(res => {
        if (res.status !== 200) {
          return false;
        }

        return res.json();
      })
      .then(
        result => {
          this.setState({ projects: result });
        },
        error => {
          console.log("[github-api] no releases");
        }
      );
  }

  componentDidMount() {
    this.loadDb();
  }

  render() {
    return (
      <Skeleton.Box overrideClass className={styles.projects}>
        <Skeleton.Box>
          <h2>Projects</h2>
          { this.state.projects.map(data => {
            // return JSON.stringify(data);
            return (
              <ProjectCard
                name={data.project}
                description={data.desc}
                link={ data.link || `https://github.com/${data.user}/${data.project}` }
                language={data.lang}
                version={data.version}
              />
            )
          }) }
        </Skeleton.Box>
      </Skeleton.Box>
    );
  }
}

export default Projects;
