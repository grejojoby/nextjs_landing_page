webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "G:\\NextJS\\nextjs_landing_page\\src\\components\\team-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function TeamCard(_ref) {
  var _this = this;

  var src = _ref.src,
      altText = _ref.altText,
      title = _ref.title,
      designation = _ref.designation,
      social = _ref.social;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: altText,
    sx: styles.memberThumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.infoWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    className: "info__name",
    sx: styles.infoWrapper.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "info__designation",
    sx: styles.infoWrapper.designation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, designation)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.socialShare,
    className: "social__share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, social.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: item.id,
      href: item.path,
      className: item.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }, item.icon);
  })));
}
_c = TeamCard;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'primary'
      },
      '.info__designation': {
        color: 'primary'
      },
      '.social__share': {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1]
        }
      }
    }
  },
  memberThumb: {
    width: ['70px', '80px', '100px', null, null, '130px'],
    height: ['70px', '80px', '100px', null, null, '130px'],
    flexShrink: 0,
    border: '2px solid',
    borderColor: 'primary',
    borderRadius: '50%'
  },
  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [1.25, 1.35],
      transition: 'color 0.25s',
      mb: 1
    },
    designation: {
      fontSize: ['14px', null, null, 2],
      fontWeight: 'body',
      lineHeight: 'heading',
      color: 'text',
      transition: 'color 0.25s'
    }
  },
  socialShare: {
    position: ['relative', null, 'absolute'],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, '18px', 5],
    width: ['100%', null, 'auto'],
    display: 'flex',
    flexDirection: ['row', null, 'column'],
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s',
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ['text', null, 'primary'],
      lineHeight: '1em',
      my: [0, null, '-2px'],
      px: 1,
      transition: 'all 0.25s',
      '&:hover': {
        color: ['primary', null, 'text']
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "TeamCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsIm5hbWUiLCJzb2NpYWxTaGFyZSIsIm1hcCIsIml0ZW0iLCJpZCIsInBhdGgiLCJpY29uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwicHkiLCJweCIsInRyYW5zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImJveFNoYWRvdyIsImNvbG9yIiwib3BhY2l0eSIsImEiLCJteSIsIndpZHRoIiwiaGVpZ2h0IiwiZmxleFNocmluayIsImJvcmRlciIsImJvcmRlckNvbG9yIiwidGV4dEFsaWduIiwibXQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibWIiLCJyaWdodCIsImJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwicHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULE9BQWdFO0FBQUE7O0FBQUEsTUFBNUNDLEdBQTRDLFFBQTVDQSxHQUE0QztBQUFBLE1BQXZDQyxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLFdBQXVCLFFBQXZCQSxXQUF1QjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUM3RSxTQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBRU4sR0FBWjtBQUFpQixPQUFHLEVBQUVDLE9BQXRCO0FBQStCLE1B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LENBQUQsRUFBSSxDQUFKLEVBQU8sSUFBUCxFQUFhLENBQWIsQ0FEVDtBQUVEWCxXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLFNBQWYsQ0FGTjtBQUdEYSxnQkFBVSxFQUFFLEtBSFg7QUFJRFYsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxNQUFWLENBSkg7QUFLRFIsUUFBRSxFQUFFLENBTEg7QUFNREMsZ0JBQVUsRUFBRSxXQU5YO0FBT0QsaUJBQVc7QUFDVEksYUFBSyxFQUFFLENBQUMsU0FBRCxFQUFZLElBQVosRUFBa0IsTUFBbEI7QUFERTtBQVBWO0FBWlE7QUF2REEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45OGU5MGZkNjUzZWIxOTZlMzEwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBUZXh0LCBIZWFkaW5nLCBJbWFnZSwgQm94LCBMaW5rIH0gZnJvbSAndGhlbWUtdWknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtQ2FyZCh7IHNyYywgYWx0VGV4dCwgdGl0bGUsIGRlc2lnbmF0aW9uLCBzb2NpYWwgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLm1lbWJlclRodW1ifSAvPlxuICAgICAgPEJveCBzeD17c3R5bGVzLmluZm9XcmFwcGVyfT5cbiAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwiaW5mb19fbmFtZVwiIHN4PXtzdHlsZXMuaW5mb1dyYXBwZXIubmFtZX0+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwiaW5mb19fZGVzaWduYXRpb25cIiBzeD17c3R5bGVzLmluZm9XcmFwcGVyLmRlc2lnbmF0aW9ufT57ZGVzaWduYXRpb259PC9UZXh0PlxuXG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWxTaGFyZX0gY2xhc3NOYW1lPSdzb2NpYWxfX3NoYXJlJz5cbiAgICAgICAge3NvY2lhbC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGhyZWY9e2l0ZW0ucGF0aH0gY2xhc3NOYW1lPXtpdGVtLm5hbWV9PntpdGVtLmljb259PC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcHk6IFswLCBudWxsLCA0LCA1LCA2XSxcbiAgICBweDogWzIsIG51bGwsIDYsIDddLFxuICAgIHRyYW5zaXRpb246ICdlYXNlLWluLW91dCAwLjRzJyxcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiBbJ25vbmUnLCBudWxsLCAnMCA0cHggMTBweCByZ2JhKDM5LCA4MywgMTIzLCAwLjEyKSddLFxuICAgICAgJy5pbmZvX19uYW1lJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICAgICcuaW5mb19fZGVzaWduYXRpb24nOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJy5zb2NpYWxfX3NoYXJlJzoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBhOiB7XG4gICAgICAgICAgbXk6IDAsXG4gICAgICAgICAgcHk6IFswLCBudWxsLCAxXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBtZW1iZXJUaHVtYjoge1xuICAgIHdpZHRoOiBbJzcwcHgnLCAnODBweCcsICcxMDBweCcsIG51bGwsIG51bGwsICcxMzBweCddLFxuICAgIGhlaWdodDogWyc3MHB4JywgJzgwcHgnLCAnMTAwcHgnLCBudWxsLCBudWxsLCAnMTMwcHgnXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXG4gICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICB9LFxuICBpbmZvV3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtdDogWzMsIG51bGwsIDRdLFxuICAgIG5hbWU6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgMiwgMywgbnVsbCwgbnVsbCwgNF0sXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4yNSwgMS4zNV0sXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxuICAgICAgbWI6IDEsXG4gICAgfSxcbiAgICBkZXNpZ25hdGlvbjoge1xuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIG51bGwsIDJdLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXG4gICAgfSxcbiAgfSxcbiAgc29jaWFsU2hhcmU6IHtcbiAgICBwb3NpdGlvbjogWydyZWxhdGl2ZScsIG51bGwsICdhYnNvbHV0ZSddLFxuICAgIHJpZ2h0OiBbMCwgbnVsbCwgNiwgbnVsbCwgNCwgNl0sXG4gICAgYm90dG9tOiBbMCwgbnVsbCwgJzE4cHgnLCA1XSxcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJ2F1dG8nXSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogWydyb3cnLCBudWxsLCAnY29sdW1uJ10sXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgIG9wYWNpdHk6IFsxLCBudWxsLCAwXSxcbiAgICBwdDogMixcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogWzAsIDEsIG51bGwsIDJdLFxuICAgICAgY29sb3I6IFsndGV4dCcsIG51bGwsICdwcmltYXJ5J10sXG4gICAgICBsaW5lSGVpZ2h0OiAnMWVtJyxcbiAgICAgIG15OiBbMCwgbnVsbCwgJy0ycHgnXSxcbiAgICAgIHB4OiAxLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IFsncHJpbWFyeScsIG51bGwsICd0ZXh0J10sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==