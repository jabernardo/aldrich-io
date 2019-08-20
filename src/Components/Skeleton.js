import React, { Component } from "react";

// Skeleton Container
class Box extends Component {
  constructor() {
    super();
  }

  render() {
    var {
      className,
      children,
      isRow,
      columns,
      overrideClass,
      ...props
    } = this.props;

    className = className || "";

    // Add container class
    className +=
      typeof overrideClass === "undefined" &&
      typeof isRow === "undefined" &&
      typeof columns === "undefined"
        ? " container"
        : "";

    // Add row class
    className += typeof isRow !== "undefined" ? " row" : "";

    // Add columns
    className +=
      typeof columns !== "undefined" ? " " + columns + " columns" : "";

    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }
}

// Button
class Button extends Component {
  constructor() {
    super();
  }

  render() {
    var { className, children, isPrimary, isLink, type, ...props } = this.props;

    className = className || "button ";
    className += isPrimary ? "button-primary " : "";

    if (typeof isLink !== "undefined") {
      return (
        <a className={className} {...props}>
          {children}
        </a>
      );
    }

    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  }
}

export { Box, Button };
