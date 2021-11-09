webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/arrowOdd.svg */ "./src/assets/arrowOdd.svg");
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowEven.svg */ "./src/assets/arrowEven.svg");
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "G:\\NextJS\\nextjs_landing_page\\src\\sections\\workflow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






var data = [{
  id: 1,
  title: 'Set disbursement Instructions',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 2,
  title: 'Assembly retrieves funds from your account',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  title: 'Assembly initiates disbursement',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 4,
  title: 'Customer receives funds payment',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function WorkFlow() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.workflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Workflow",
    title: "This is the workflow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })));
}
_c = WorkFlow;
var styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: "url(".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10]
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none'
      }
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: "url(".concat(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default.a, ")")
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: "url(".concat(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default.a, ")"),
      top: 17
    },
    '&:last-child::before': {
      display: 'none'
    }
  },
  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5]
    }
  }
};

var _c;

$RefreshReg$(_c, "WorkFlow");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCIsIldvcmtGbG93Iiwic3R5bGVzIiwid29ya2Zsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQYXR0ZXJuQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJwb3NpdGlvbiIsInB5IiwiZ3JpZCIsIm1iIiwicHQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImNhcmQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIndpZHRoIiwibXgiLCJweCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJpY29uQm94IiwiZmxleFNocmluayIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwid3JhcHBlciIsIm10IiwibGluZUhlaWdodCIsInByIiwic3ViVGl0bGUiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBRFcsRUFPWDtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsNENBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FQVyxFQWFYO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxpQ0FGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQWJXLEVBbUJY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QUpDO0FBS0w1QixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUxDLEtBTEE7QUFhUDZCLFlBQVEsRUFBRTtBQUNSUixjQUFRLEVBQUUsQ0FERjtBQUVSQyxnQkFBVSxFQUFFLEdBRko7QUFHUkssZ0JBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUhKO0FBSVJILFdBQUssRUFBRSxPQUpDO0FBS1JNLGFBQU8sRUFBRSxJQUxEO0FBTVJGLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixDQUE1QjtBQU5JO0FBYkg7QUEvRUksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NjYxOTFiNjAwZTlhMWU1NTIwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcbmltcG9ydCBBcnJvd09kZCBmcm9tICdhc3NldHMvYXJyb3dPZGQuc3ZnJztcbmltcG9ydCBBcnJvd0V2ZW4gZnJvbSAnYXNzZXRzL2Fycm93RXZlbi5zdmcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6ICdTZXQgZGlzYnVyc2VtZW50IEluc3RydWN0aW9ucycsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnQXNzZW1ibHkgcmV0cmlldmVzIGZ1bmRzIGZyb20geW91ciBhY2NvdW50JyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdBc3NlbWJseSBpbml0aWF0ZXMgZGlzYnVyc2VtZW50JyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6ICdDdXN0b21lciByZWNlaXZlcyBmdW5kcyBwYXltZW50JyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy53b3JrZmxvd30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlciBzbG9nYW49XCJXb3JrZmxvd1wiIHRpdGxlPVwiVGhpcyBpcyB0aGUgd29ya2Zsb3dcIiAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHdvcmtmbG93OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICB9LFxuICBncmlkOiB7XG4gICAgbWI6IC0xLFxuICAgIHB0OiAwLFxuICAgIGdyaWRHYXA6IFtcbiAgICAgICczNXB4IDAnLFxuICAgICAgbnVsbCxcbiAgICAgICc0NXB4IDMwcHgnLFxuICAgICAgbnVsbCxcbiAgICAgICc1MHB4IDI1cHgnLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICAnNTBweCA2NXB4JyxcbiAgICBdLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxuICAgIF0sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsICdsZWZ0J10sXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxuICAgIG14OiBbJ2F1dG8nXSxcbiAgICBweDogWzQsIG51bGwsIG51bGwsIDBdLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3MiwgbnVsbCwgOTBdLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbiAgICAgIHdpZHRoOiAyMTUsXG4gICAgICBoZWlnaHQ6IDYwLFxuICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIyMHB4KSc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmOm50aC1vZi10eXBlKDJuLTEpOjpiZWZvcmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd09kZH0pYCxcbiAgICB9LFxuICAgICcmOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlJzoge1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dFdmVufSlgLFxuICAgICAgdG9wOiAxNyxcbiAgICB9LFxuICAgICcmOmxhc3QtY2hpbGQ6OmJlZm9yZSc6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuXG4gIGljb25Cb3g6IHtcbiAgICB3aWR0aDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxuICAgIGhlaWdodDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYm9yZGVyUmFkaXVzOiBbMTUsIG51bGwsIDIzLCBudWxsLCBudWxsLCAzMF0sXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCAwXSxcbiAgICBmb250U2l6ZTogWzYsIG51bGwsIDcsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBjb2xvcjogJyMyMzQ1ODInLFxuICB9LFxuICB3cmFwcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgbXQ6ICctNXB4JyxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgbGluZUhlaWdodDogWzEuNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS41NV0sXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxuICAgICAgbWI6IFsyLCAzXSxcbiAgICB9LFxuXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIG9wYWNpdHk6IDAuNzUsXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==