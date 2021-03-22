webpackHotUpdate_N_E("pages/index",{

/***/ "./widgets/Header.js":
/*!***************************!*\
  !*** ./widgets/Header.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cloudinary-react */ "./node_modules/cloudinary-react/dist/cloudinary-react.esm.js");
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Skeleton */ "./components/Skeleton.js");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header.module.scss */ "./widgets/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\johna\\Documents\\Projects\\jabernardo.github.io\\widgets\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 7
        }
      }, __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
        publicId: "portfolio/me-prof_ghmwhg.png",
        height: 256,
        width: 256,
        className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.profile,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_6__["Placeholder"], {
        type: "pixelate",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }
      })), __jsx("img", {
        className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.profile,
        src: "/assets/me-prof.png",
        alt: this.props.title || "John Aldrich Bernardo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }
      }), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, this.props.title || "John Aldrich Bernardo"), __jsx("a", {
        className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a["cli-version"],
        href: "/cv-cli",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, "> View this page in CLI version")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd2lkZ2V0cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVzIiwiaGVhZGVyIiwicHJvZmlsZSIsInByb3BzIiwidGl0bGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7OztXQUNKLGtCQUFTO0FBQ1AsYUFDRSxNQUFDLHdEQUFEO0FBQWMsaUJBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHNEQUFEO0FBQ0UsZ0JBQVEsRUFBQyw4QkFEWDtBQUVFLGNBQU0sRUFBRSxHQUZWO0FBR0UsYUFBSyxFQUFFLEdBSFQ7QUFJRSxpQkFBUyxFQUFFRCwwREFBTSxDQUFDRSxPQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUUsTUFBQyw0REFBRDtBQUFhLFlBQUksRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkYsQ0FERixFQVNFO0FBQUssaUJBQVMsRUFBRUYsMERBQU0sQ0FBQ0UsT0FBdkI7QUFBZ0MsV0FBRyxFQUFDLHFCQUFwQztBQUEwRCxXQUFHLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxLQUFYLElBQW9CLHVCQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUssS0FBS0QsS0FBTCxDQUFXQyxLQUFYLElBQW9CLHVCQUF6QixDQVZGLEVBV0U7QUFBRyxpQkFBUyxFQUFFSiwwREFBTSxDQUFDLGFBQUQsQ0FBcEI7QUFBcUMsWUFBSSxFQUFDLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBWEYsQ0FERixDQURGO0FBaUJEOzs7O0VBbkJrQkssK0M7O0FBc0JOTixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZTNkNzFhNDM1NjVhMjgyMjVmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW1hZ2UsIFBsYWNlaG9sZGVyIH0gZnJvbSBcImNsb3VkaW5hcnktcmVhY3RcIjtcblxuaW1wb3J0ICogYXMgU2tlbGV0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2tlbGV0b25cIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2tlbGV0b24uQm94IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgcHVibGljSWQ9XCJwb3J0Zm9saW8vbWUtcHJvZl9naG13aGcucG5nXCJcbiAgICAgICAgICAgIGhlaWdodD17MjU2fVxuICAgICAgICAgICAgd2lkdGg9ezI1Nn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBsYWNlaG9sZGVyIHR5cGU9XCJwaXhlbGF0ZVwiIC8+XG4gICAgICAgICAgPC9JbWFnZT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9IHNyYz1cIi9hc3NldHMvbWUtcHJvZi5wbmdcIiBhbHQ9e3RoaXMucHJvcHMudGl0bGUgfHwgXCJKb2huIEFsZHJpY2ggQmVybmFyZG9cIn0gLz5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGUgfHwgXCJKb2huIEFsZHJpY2ggQmVybmFyZG9cIn08L2gxPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzW1wiY2xpLXZlcnNpb25cIl19IGhyZWY9XCIvY3YtY2xpXCI+Jmd0OyBWaWV3IHRoaXMgcGFnZSBpbiBDTEkgdmVyc2lvbjwvYT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9Ta2VsZXRvbi5Cb3g+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9