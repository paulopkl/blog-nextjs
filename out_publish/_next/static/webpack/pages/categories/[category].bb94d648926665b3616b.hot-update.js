webpackHotUpdate_N_E("pages/categories/[category]",{

/***/ "./src/containers/HomePage/index.tsx":
/*!*******************************************!*\
  !*** ./src/containers/HomePage/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MainContainer */ "./src/components/MainContainer/index.tsx");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PostCard */ "./src/components/PostCard/index.tsx");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/app-config */ "./src/config/app-config.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./src/containers/HomePage/styles.ts");


var _jsxFileName = "C:\\Users\\Paulo\\Documents\\Projetos\\TypeScript\\Blog_Strapi\\blog-next\\src\\containers\\HomePage\\index.tsx";








function HomePage(_ref) {
  var _this = this;

  var posts = _ref.posts,
      category = _ref.category;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: _config_app_config__WEBPACK_IMPORTED_MODULE_7__["SITE_NAME"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "This's my tech blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), category && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Category: ", category]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 26
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainContainer__WEBPACK_IMPORTED_MODULE_5__["MainContainer"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        children: posts.map(function (post, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__["PostCard"], {
            cover: post.cover.formats.small.url,
            slug: post.slug,
            title: post.title
          }, post.slug, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this) // <h2 style={{ background: "red" }} key={i}>
          //     {post.title}
          // </h2>
          ;
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c = HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZVBhZ2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicG9zdHMiLCJjYXRlZ29yeSIsIlNJVEVfTkFNRSIsIm1hcCIsInBvc3QiLCJpIiwiY292ZXIiLCJmb3JtYXRzIiwic21hbGwiLCJ1cmwiLCJzbHVnIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJZSxTQUFTQSxRQUFULE9BQXNEO0FBQUE7O0FBQUEsTUFBbENDLEtBQWtDLFFBQWxDQSxLQUFrQztBQUFBLE1BQTNCQyxRQUEyQixRQUEzQkEsUUFBMkI7QUFDakUsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQVFDLDREQUFTQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosRUFNS0QsUUFBUSxpQkFBSTtBQUFBLCtCQUFnQkEsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTmpCLGVBT0kscUVBQUMsdUVBQUQ7QUFBQSw2QkFDSSxxRUFBQyxpREFBRDtBQUFBLGtCQUNLRCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSw4QkFDUCxxRUFBQyw2REFBRDtBQUVJLGlCQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxPQUFYLENBQW1CQyxLQUFuQixDQUF5QkMsR0FGcEM7QUFHSSxnQkFBSSxFQUFFTCxJQUFJLENBQUNNLElBSGY7QUFJSSxpQkFBSyxFQUFFTixJQUFJLENBQUNPO0FBSmhCLGFBQ1NQLElBQUksQ0FBQ00sSUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURPLENBT1A7QUFDQTtBQUNBO0FBVE87QUFBQSxTQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQXNCSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJKO0FBQUEsa0JBREo7QUEwQkg7S0EzQnVCWCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3JpZXMvW2NhdGVnb3J5XS5iYjk0ZDY0ODkyNjY2NWIzNjE2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IE1haW5Db250YWluZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBQb3N0Q2FyZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyBTSVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2FwcC1jb25maWdcIjtcbmltcG9ydCB7IEhvbWVQcm9wcyB9IGZyb20gXCIuLi8uLi9wYWdlc1wiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlQcm9wcyB9IGZyb20gXCIuLi8uLi9wYWdlcy9jYXRlZ29yaWVzL1tjYXRlZ29yeV1cIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5leHBvcnQgdHlwZSBIb21lUGFnZVByb3BzID0gSG9tZVByb3BzICYgQ2F0ZWdvcnlQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBwb3N0cywgY2F0ZWdvcnkgfTogSG9tZVBhZ2VQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e1NJVEVfTkFNRX08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzJ3MgbXkgdGVjaCBibG9nXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIHtjYXRlZ29yeSAmJiA8ZGl2PkNhdGVnb3J5OiB7Y2F0ZWdvcnl9PC9kaXY+fVxuICAgICAgICAgICAgPE1haW5Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0LnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9e3Bvc3QuY292ZXIuZm9ybWF0cy5zbWFsbC51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInJlZFwiIH19IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8L2gyPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=