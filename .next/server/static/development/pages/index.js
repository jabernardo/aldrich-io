module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Skeleton.js":
/*!********************************!*\
  !*** ./components/Skeleton.js ***!
  \********************************/
/*! exports provided: Box, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/sudoaldrich/Workspace/jabernardo.github.io/components/Skeleton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // Skeleton Container

class Box extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    var _this$props = this.props,
        {
      className,
      children,
      isRow,
      columns,
      overrideClass
    } = _this$props,
        props = _objectWithoutProperties(_this$props, ["className", "children", "isRow", "columns", "overrideClass"]);

    className = className || ""; // Add container class

    className += typeof overrideClass === "undefined" && typeof isRow === "undefined" && typeof columns === "undefined" ? " container" : ""; // Add row class

    className += typeof isRow !== "undefined" ? " row" : ""; // Add columns

    className += typeof columns !== "undefined" ? " " + columns + " columns" : "";
    return __jsx("div", _extends({
      className: className
    }, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }), children);
  }

} // Button


class Button extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    var _this$props2 = this.props,
        {
      className,
      children,
      isPrimary,
      isLink,
      type
    } = _this$props2,
        props = _objectWithoutProperties(_this$props2, ["className", "children", "isPrimary", "isLink", "type"]);

    className = className || "button ";
    className += isPrimary ? "button-primary " : "";

    if (typeof isLink !== "undefined") {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }, __jsx("a", _extends({}, props, {
        className: "jsx-1244087540" + " " + (props && props.className != null && props.className || className || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }), children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "1244087540",
        __self: this
      }, ".button{margin:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1ZG9hbGRyaWNoL1dvcmtzcGFjZS9qYWJlcm5hcmRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1NrZWxldG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFENkIsQUFHMEIsV0FDYiIsImZpbGUiOiIvaG9tZS9zdWRvYWxkcmljaC9Xb3Jrc3BhY2UvamFiZXJuYXJkby5naXRodWIuaW8vY29tcG9uZW50cy9Ta2VsZXRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIFNrZWxldG9uIENvbnRhaW5lclxuY2xhc3MgQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlzUm93LFxuICAgICAgY29sdW1ucyxcbiAgICAgIG92ZXJyaWRlQ2xhc3MsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XG5cbiAgICAvLyBBZGQgY29udGFpbmVyIGNsYXNzXG4gICAgY2xhc3NOYW1lICs9XG4gICAgICB0eXBlb2Ygb3ZlcnJpZGVDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgdHlwZW9mIGlzUm93ID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICB0eXBlb2YgY29sdW1ucyA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICA/IFwiIGNvbnRhaW5lclwiXG4gICAgICAgIDogXCJcIjtcblxuICAgIC8vIEFkZCByb3cgY2xhc3NcbiAgICBjbGFzc05hbWUgKz0gdHlwZW9mIGlzUm93ICE9PSBcInVuZGVmaW5lZFwiID8gXCIgcm93XCIgOiBcIlwiO1xuXG4gICAgLy8gQWRkIGNvbHVtbnNcbiAgICBjbGFzc05hbWUgKz1cbiAgICAgIHR5cGVvZiBjb2x1bW5zICE9PSBcInVuZGVmaW5lZFwiID8gXCIgXCIgKyBjb2x1bW5zICsgXCIgY29sdW1uc1wiIDogXCJcIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEJ1dHRvblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGlzUHJpbWFyeSwgaXNMaW5rLCB0eXBlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCBcImJ1dHRvbiBcIjtcbiAgICBjbGFzc05hbWUgKz0gaXNQcmltYXJ5ID8gXCJidXR0b24tcHJpbWFyeSBcIiA6IFwiXCI7XG5cbiAgICBpZiAodHlwZW9mIGlzTGluayAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucHJvcHN9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQm94LCBCdXR0b24gfTtcbiJdfQ== */\n/*@ sourceURL=/home/sudoaldrich/Workspace/jabernardo.github.io/components/Skeleton.js */"));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1468260611",
      __self: this
    }, ".button{margin:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1ZG9hbGRyaWNoL1dvcmtzcGFjZS9qYWJlcm5hcmRvLmdpdGh1Yi5pby9jb21wb25lbnRzL1NrZWxldG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFMkIsQUFHd0IsV0FDYiIsImZpbGUiOiIvaG9tZS9zdWRvYWxkcmljaC9Xb3Jrc3BhY2UvamFiZXJuYXJkby5naXRodWIuaW8vY29tcG9uZW50cy9Ta2VsZXRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIFNrZWxldG9uIENvbnRhaW5lclxuY2xhc3MgQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlzUm93LFxuICAgICAgY29sdW1ucyxcbiAgICAgIG92ZXJyaWRlQ2xhc3MsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XG5cbiAgICAvLyBBZGQgY29udGFpbmVyIGNsYXNzXG4gICAgY2xhc3NOYW1lICs9XG4gICAgICB0eXBlb2Ygb3ZlcnJpZGVDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgdHlwZW9mIGlzUm93ID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICB0eXBlb2YgY29sdW1ucyA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICA/IFwiIGNvbnRhaW5lclwiXG4gICAgICAgIDogXCJcIjtcblxuICAgIC8vIEFkZCByb3cgY2xhc3NcbiAgICBjbGFzc05hbWUgKz0gdHlwZW9mIGlzUm93ICE9PSBcInVuZGVmaW5lZFwiID8gXCIgcm93XCIgOiBcIlwiO1xuXG4gICAgLy8gQWRkIGNvbHVtbnNcbiAgICBjbGFzc05hbWUgKz1cbiAgICAgIHR5cGVvZiBjb2x1bW5zICE9PSBcInVuZGVmaW5lZFwiID8gXCIgXCIgKyBjb2x1bW5zICsgXCIgY29sdW1uc1wiIDogXCJcIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEJ1dHRvblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGlzUHJpbWFyeSwgaXNMaW5rLCB0eXBlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCBcImJ1dHRvbiBcIjtcbiAgICBjbGFzc05hbWUgKz0gaXNQcmltYXJ5ID8gXCJidXR0b24tcHJpbWFyeSBcIiA6IFwiXCI7XG5cbiAgICBpZiAodHlwZW9mIGlzTGluayAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucHJvcHN9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQm94LCBCdXR0b24gfTtcbiJdfQ== */\n/*@ sourceURL=/home/sudoaldrich/Workspace/jabernardo.github.io/components/Skeleton.js */"), __jsx("button", _extends({}, props, {
      className: "jsx-1468260611" + " " + (props && props.className != null && props.className || className || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }), children));
  }

}



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Skeleton */ "./components/Skeleton.js");
/* harmony import */ var _widgets_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/Header */ "./widgets/Header.js");
/* harmony import */ var _widgets_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/Projects */ "./widgets/Projects.js");
/* harmony import */ var _widgets_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/Contact */ "./widgets/Contact.js");
var _jsxFileName = "/home/sudoaldrich/Workspace/jabernardo.github.io/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    _widgets_Header__WEBPACK_IMPORTED_MODULE_3__["default"].displayName = "Header";
    _widgets_Projects__WEBPACK_IMPORTED_MODULE_4__["default"].displayName = "Projects";
    _widgets_Contact__WEBPACK_IMPORTED_MODULE_5__["default"].displayName = "Contact";
  }

  render() {
    return __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      overrideClass: "true",
      className: "homepage gradient",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, "John Aldrich Bernardo"), __jsx("meta", {
      property: "og:title",
      content: "Aldrich's GitHub Page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/x-icon",
      href: "/assets/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "/assets/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "author",
      content: "John Aldrich Bernardo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "description",
      content: "Hello! My name is John Aldrich Bernardo.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "keywords",
      content: "aldrich, john aldrich, jabernardo, john aldrich bernardo, bernardo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }), __jsx("meta", {
      charSet: "UTF-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "https://jabernardo.github.io",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:author",
      content: "John Aldrich Bernardo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "https://jabernardo.github.io",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:description",
      content: "Hello! My name is John Aldrich Bernardo. Click here to know me!",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "https://jabernardo.github.io/assets/me.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "https://jabernardo.github.io/assets/me.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }), __jsx("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=UA-105779805-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }), __jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)};
              gtag('js', new Date());
      
              gtag('config', 'UA-105779805-1');
            `
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    })), __jsx(_widgets_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }), __jsx(_widgets_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }), __jsx(_widgets_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./widgets/Contact.js":
/*!****************************!*\
  !*** ./widgets/Contact.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Donate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Donate */ "./widgets/Donate.js");
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Skeleton */ "./components/Skeleton.js");
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact.module.scss */ "./widgets/Contact.module.scss");
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/sudoaldrich/Workspace/jabernardo.github.io/widgets/Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    _Donate__WEBPACK_IMPORTED_MODULE_1__["default"].displayName = "Donate";
  }

  render() {
    return __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: "container contact-me",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, "Contact Me"), __jsx("p", {
      className: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, "Want to support or help with my projects? E-mail me at", " ", __jsx("a", {
      href: "mailto: 4ldrich@protonmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, "4ldrich@protonmail.com")), __jsx("section", {
      className: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx(_Donate__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./widgets/Contact.module.scss":
/*!*************************************!*\
  !*** ./widgets/Contact.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contact-me": "Contact_contact-me__2iUyv"
};

/***/ }),

/***/ "./widgets/Donate.js":
/*!***************************!*\
  !*** ./widgets/Donate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/sudoaldrich/Workspace/jabernardo.github.io/widgets/Donate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Donate extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("form", {
      action: "https://www.paypal.com/cgi-bin/webscr",
      method: "post",
      target: "_top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, __jsx("input", {
      type: "hidden",
      name: "cmd",
      value: "_s-xclick",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }), __jsx("input", {
      type: "hidden",
      name: "hosted_button_id",
      value: "Z8KL7MACBREJL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }), __jsx("input", {
      type: "image",
      src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",
      border: "0",
      name: "submit",
      alt: "PayPal - The safer, easier way to pay online!",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }), __jsx("img", {
      alt: "",
      border: "0",
      src: "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
      width: "1",
      height: "1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Donate);

/***/ }),

/***/ "./widgets/Header.js":
/*!***************************!*\
  !*** ./widgets/Header.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Skeleton */ "./components/Skeleton.js");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.scss */ "./widgets/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sudoaldrich/Workspace/jabernardo.github.io/widgets/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx("section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profile,
      src: "/assets/me-prof.png",
      alt: this.props.title || "John Aldrich Bernardo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, this.props.title || "John Aldrich Bernardo"), __jsx("a", {
      className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["cli-version"],
      href: "/cv-cli",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }, "> View this page in CLI version")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./widgets/Header.module.scss":
/*!************************************!*\
  !*** ./widgets/Header.module.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__iuTtq",
	"profile": "Header_profile__RPtqk",
	"cli-version": "Header_cli-version__hfVbH"
};

/***/ }),

/***/ "./widgets/ProjectCard.js":
/*!********************************!*\
  !*** ./widgets/ProjectCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "typed.js");
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
      projectDownload: `${props.link}/archive/master.zip`,
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

/***/ }),

/***/ "./widgets/ProjectCard.module.scss":
/*!*****************************************!*\
  !*** ./widgets/ProjectCard.module.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"typed": "ProjectCard_typed__3GIWY",
	"typed-cursor": "ProjectCard_typed-cursor__27cyu",
	"go_relative": "ProjectCard_go_relative__15L6f",
	"go_bottom": "ProjectCard_go_bottom__31gEu"
};

/***/ }),

/***/ "./widgets/Projects.js":
/*!*****************************!*\
  !*** ./widgets/Projects.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Skeleton */ "./components/Skeleton.js");
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ "./widgets/ProjectCard.js");
/* harmony import */ var _Projects_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects.module.scss */ "./widgets/Projects.module.scss");
/* harmony import */ var _Projects_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Projects_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/sudoaldrich/Workspace/jabernardo.github.io/widgets/Projects.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Projects extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      overrideClass: true,
      className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.projects,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }, "Projects"), __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      isRow: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      columns: "four",
      className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["pl-php"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "calf",
      description: "Yet another Micro-framework for PHP",
      link: "https://jabernardo.github.io/calf",
      language: "PHP",
      version: "master",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    })), __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      columns: "four",
      className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["pl-php"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "saddle",
      description: "A Simple Dependency Injection",
      link: "https://github.com/jabernardo/saddle",
      language: "PHP",
      version: "master",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    })), __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      columns: "four",
      className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["pl-go"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, __jsx(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "aargh",
      description: "Aargh! Command-line Application Base Template",
      link: "https://github.com/jabernardo/aargh",
      language: "Go",
      version: "master",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }))), __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      isRow: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      columns: "four",
      className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["pl-php"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "console.php",
      description: "Command-line Application Skeleton for PHP",
      link: "https://github.com/jabernardo/console.php",
      language: "PHP",
      version: "master",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    })), __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      columns: "four",
      className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["pl-py"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "WTF!",
      description: "Yet another cURL but using JSON files.",
      link: "https://github.com/jabernardo/wtf",
      language: "Python",
      version: "master",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    })), __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      columns: "four",
      className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["pl-py"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "TheF!",
      description: "Shorthand ?! Press The F!",
      link: "https://github.com/jabernardo/thef",
      language: "Python",
      version: "master",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./widgets/Projects.module.scss":
/*!**************************************!*\
  !*** ./widgets/Projects.module.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"projects": "Projects_projects__3CQf4",
	"pl-py": "Projects_pl-py__1aqIn",
	"pl-php": "Projects_pl-php__39etp",
	"pl-go": "Projects_pl-go__3Hd1H",
	"columns": "Projects_columns__3Rwyw"
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sudoaldrich/Workspace/jabernardo.github.io/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "typed.js":
/*!***************************!*\
  !*** external "typed.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typed.js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map