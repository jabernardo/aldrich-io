import React, { Component } from "react";

import * as Skeleton from "../../Components/Skeleton";

import { Widget as Calf } from "../Calf/Widget";
import { Widget as Saddle } from "../Saddle/Widget";
import { Widget as Aargh } from "../Aargh/Widget";
import { Widget as ConsolePHP } from "../Console-PHP/Widget";

import "./Style.scss";

class Widget extends Component {
  render() {
    return (
      <Skeleton.Box overrideClass className="projects">
        <Skeleton.Box>
          <h2>Projects</h2>
          <Skeleton.Box isRow>
            <Skeleton.Box columns="four" className="p-box pl-php">
              <Calf />
            </Skeleton.Box>
            <Skeleton.Box columns="four" className="p-box pl-php">
              <Saddle />
            </Skeleton.Box>
            <Skeleton.Box columns="four" className="p-box pl-go">
              <Aargh />
            </Skeleton.Box>
          </Skeleton.Box>
          <Skeleton.Box isRow>
            <Skeleton.Box columns="four" className="p-box pl-php">
              <ConsolePHP />
            </Skeleton.Box>
          </Skeleton.Box>
        </Skeleton.Box>
      </Skeleton.Box>
    );
  }
}

export { Widget };
export default Widget;
