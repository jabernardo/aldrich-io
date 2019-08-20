import React, { Component } from "react";

import * as Skeleton from "../../Components/Skeleton";

import { Widget as Calf } from "../Calf/Widget";
import { Widget as Saddle } from "../Saddle/Widget";
import { Widget as Aargh } from "../Aargh/Widget";
import { Widget as ConsolePHP } from "../Console-PHP/Widget";

import "./Style.scss";

class Widget extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Skeleton.Box overrideClass className="projects">
        <Skeleton.Box>
          <h2>Projects</h2>
          <Skeleton.Box isRow>
            <Skeleton.Box columns="four" className="pl-php">
              <Calf />
            </Skeleton.Box>
            <Skeleton.Box columns="four" className="pl-php">
              <Saddle />
            </Skeleton.Box>
            <Skeleton.Box columns="four" className="pl-go">
              <Aargh />
            </Skeleton.Box>
          </Skeleton.Box>
          <Skeleton.Box isRow>
            <Skeleton.Box columns="four" className="pl-php">
              <ConsolePHP />
            </Skeleton.Box>
          </Skeleton.Box>
        </Skeleton.Box>
      </Skeleton.Box>
    );
  }
}

class Projects extends Widget {
  constructor() {
    super();
  }
}

export { Widget, Projects };
export default Widget;
