import React, { Component } from "react";

import * as Skeleton from "../components/Skeleton";

import ProjectCard  from "./ProjectCard";

import styles from "./Projects.module.scss";

class Projects extends Component {
  render() {
    return (
      <Skeleton.Box overrideClass className={styles.projects}>
        <Skeleton.Box>
          <h2>Projects</h2>
          <Skeleton.Box isRow>
            <Skeleton.Box columns="four" className={ styles["pl-php"] }>
              <ProjectCard
                name="calf"
                description="Yet another Micro-framework for PHP"
                link="https://jabernardo.github.io/calf"
                language="PHP"
                version="master"
              />
            </Skeleton.Box>
            <Skeleton.Box columns="four" className={ styles["pl-php"] }>
              <ProjectCard
                name="saddle"
                description="A Simple Dependency Injection"
                link="https://github.com/jabernardo/saddle"
                language="PHP"
                version="master"
              />
            </Skeleton.Box>
            <Skeleton.Box columns="four" className={ styles["pl-go"] }>
              <ProjectCard
                name="aargh"
                description="Aargh! Command-line Application Base Template"
                link="https://github.com/jabernardo/aargh"
                language="Go"
                version="master"
              />
            </Skeleton.Box>
          </Skeleton.Box>
          <Skeleton.Box isRow>
            <Skeleton.Box columns="four" className={ styles["pl-php"] }>
              <ProjectCard
                name="console.php"
                description="Command-line Application Skeleton for PHP"
                link="https://github.com/jabernardo/console.php"
                language="PHP"
                version="master"
              />
            </Skeleton.Box>
            <Skeleton.Box columns="four" className={ styles["pl-py"] }>
              <ProjectCard
                name="WTF!"
                description="Yet another cURL but using JSON files."
                link="https://github.com/jabernardo/wtf"
                language="Python"
                version="master"
              />
            </Skeleton.Box>
            <Skeleton.Box columns="four" className={ styles["pl-py"] }>
              <ProjectCard
                name="TheF!"
                description="Shorthand ?! Press The F!"
                link="https://github.com/jabernardo/thef"
                language="Python"
                version="master"
              />
            </Skeleton.Box>
          </Skeleton.Box>
        </Skeleton.Box>
      </Skeleton.Box>
    );
  }
}

export default Projects;
