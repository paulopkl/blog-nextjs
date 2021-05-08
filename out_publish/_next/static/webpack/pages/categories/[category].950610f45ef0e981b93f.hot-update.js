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
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "This's my tech blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), category && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Category: ", category]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
            lineNumber: 27,
            columnNumber: 25
          }, _this) // <h2 style={{ background: "red" }} key={i}>
          //     {post.title}
          // </h2>
          ;
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZVBhZ2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicG9zdHMiLCJjYXRlZ29yeSIsIlNJVEVfTkFNRSIsIm1hcCIsInBvc3QiLCJpIiwiY292ZXIiLCJmb3JtYXRzIiwic21hbGwiLCJ1cmwiLCJzbHVnIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNZSxTQUFTQSxRQUFULE9BQXNEO0FBQUE7O0FBQUEsTUFBbENDLEtBQWtDLFFBQWxDQSxLQUFrQztBQUFBLE1BQTNCQyxRQUEyQixRQUEzQkEsUUFBMkI7QUFDakUsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQVFDLDREQUFTQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosRUFNS0QsUUFBUSxpQkFBSTtBQUFBLCtCQUFnQkEsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTmpCLGVBT0kscUVBQUMsdUVBQUQ7QUFBQSw2QkFDSSxxRUFBQyxpREFBRDtBQUFBLGtCQUNLRCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSw4QkFDUCxxRUFBQyw2REFBRDtBQUVJLGlCQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxPQUFYLENBQW1CQyxLQUFuQixDQUF5QkMsR0FGcEM7QUFHSSxnQkFBSSxFQUFFTCxJQUFJLENBQUNNLElBSGY7QUFJSSxpQkFBSyxFQUFFTixJQUFJLENBQUNPO0FBSmhCLGFBQ1NQLElBQUksQ0FBQ00sSUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURPLENBT1A7QUFDQTtBQUNBO0FBVE87QUFBQSxTQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQXNCSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJKO0FBQUEsa0JBREo7QUEwQkg7S0EzQnVCWCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3JpZXMvW2NhdGVnb3J5XS45NTA2MTBmNDVlZjBlOTgxYjkzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IE1haW5Db250YWluZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBQb3N0Q2FyZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyBTSVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2FwcC1jb25maWdcIjtcbmltcG9ydCB7IEhvbWVQcm9wcyB9IGZyb20gXCIuLi8uLi9wYWdlc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmV4cG9ydCB0eXBlIEhvbWVQYWdlUHJvcHMgPSBIb21lUHJvcHMgJiB7XG4gICAgY2F0ZWdvcnk/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IHBvc3RzLCBjYXRlZ29yeSB9OiBIb21lUGFnZVByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT57U0lURV9OQU1FfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMncyBteSB0ZWNoIGJsb2dcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAge2NhdGVnb3J5ICYmIDxkaXY+Q2F0ZWdvcnk6IHtjYXRlZ29yeX08L2Rpdj59XG4gICAgICAgICAgICA8TWFpbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5jb3Zlci5mb3JtYXRzLnNtYWxsLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtwb3N0LnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwicmVkXCIgfX0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9NYWluQ29udGFpbmVyPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==