webpackHotUpdate("static/development/pages/index.js",{

/***/ "./widgets/ProjectCard.js":
/*!********************************!*\
  !*** ./widgets/ProjectCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Skeleton */ "./components/Skeleton.js");
/* harmony import */ var _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectCard.module.scss */ "./widgets/ProjectCard.module.scss");
/* harmony import */ var _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/sudoaldrich/Workspace/jabernardo.github.io/widgets/ProjectCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class ProjectCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      projectName: props.name || "Project",
      projectDescription: props.description || "Project Description",
      projectLink: props.link || "Project Link",
      projectVersion: props.version || "master",
      projectDownload: "".concat(props.link, "/archive/master.zip"),
      projectLanguage: props.language || "PL"
    };
  }

  loadProject() {
    fetch("https://api.github.com/repos/jabernardo/" + this.state.projectName.toLocaleLowerCase() + "/releases/latest").then(res => {
      if (res.status !== 200) {
        return false;
      }

      return res.json();
    }).then(result => {
      if (typeof result.tag_name !== "undefined") {
        this.setState({
          projectVersion: result.tag_name,
          projectDownload: result.zipball_url
        });
      }
    }, error => {
      console.log("[github-api] no releases");
    }).catch(err => {
      console.log("[github-api] no releases");
    });
  }

  componentDidMount() {
    this.loadProject();
    this.typed = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a("#" + this.state.projectName.replace(/[\W]/gi, ""), {
      strings: [this.state.projectName, "@" + this.state.projectVersion, "written in", this.state.projectLanguage],
      typeSpeed: Math.random() * 10 + 100,
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
    return __jsx("div", {
      className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.go_relative,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.typed,
      id: this.state.projectName.replace(/[\W]/gi, ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    }, this.state.projectName), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, this.state.projectDescription), __jsx("div", {
      className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.go_bottom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }, __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      isLink: true,
      target: "_blank",
      href: this.state.projectLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }, "View"), __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      isLink: true,
      isPrimary: true,
      href: this.state.projectDownload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, "Download")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ })

})
//# sourceMappingURL=index.js.17b0d6a72a2b98f8bade.hot-update.js.map