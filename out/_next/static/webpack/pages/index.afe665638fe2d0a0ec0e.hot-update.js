webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card.js */ "./src/components/feature-card.js");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/feature/performance.svg */ "./src/assets/feature/performance.svg");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/feature/partnership.svg */ "./src/assets/feature/partnership.svg");
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/feature/subscription.svg */ "./src/assets/feature/subscription.svg");
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/feature/support.svg */ "./src/assets/feature/support.svg");
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "G:\\NextJS\\nextjs_landing_page\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








var data = [{
  id: 1,
  imgSrc: assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Fast Performance',
  title: 'Fast Performance',
  text: 'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.'
}, {
  id: 2,
  imgSrc: assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Pro Subscription',
  title: 'Pro Subscription',
  text: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.'
}, {
  id: 3,
  imgSrc: assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Partnership deal',
  title: 'Partnership deal',
  text: 'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.'
}, {
  id: 4,
  imgSrc: assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Customer Support',
  title: 'Customer Support',
  text: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.'
}];
function Feature() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.feature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Quality Features",
    title: "Amazing Useful Features",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 8
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 8
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc,
      altText: item.altText,
      title: item.title,
      text: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    });
  }))));
}
_c = Feature;
var styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)']
  }
};

var _c;

$RefreshReg$(_c, "Feature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiUGFydG5lcnNoaXAiLCJTdWJzY3JpcHRpb24iLCJTdXBwb3J0IiwiRmVhdHVyZSIsInZhcmlhbnQiLCJzdHlsZXMiLCJncmlkIiwibWFwIiwiaXRlbSIsInB0IiwicHgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVDLHFFQUZWO0FBR0VDLFNBQU8sRUFBRSxrQkFIWDtBQUlFQyxPQUFLLEVBQUUsa0JBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0FEVyxFQVNYO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRUsscUVBRlY7QUFHRUgsU0FBTyxFQUFFLGtCQUhYO0FBSUVDLE9BQUssRUFBRSxrQkFKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQVRXLEVBaUJYO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRU0sc0VBRlY7QUFHRUosU0FBTyxFQUFFLGtCQUhYO0FBSUVDLE9BQUssRUFBRSxrQkFKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQWpCVyxFQXlCWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVPLGlFQUZWO0FBR0VMLFNBQU8sRUFBRSxrQkFIWDtBQUlFQyxPQUFLLEVBQUUsa0JBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0F6QlcsQ0FBYjtBQW1DZSxTQUFTSSxPQUFULEdBQW1CO0FBQUE7O0FBQ2hDLFNBQ0M7QUFBUyxNQUFFLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGlFQUFEO0FBQWUsVUFBTSxFQUFDLGtCQUF0QjtBQUF5QyxTQUFLLEVBQUMseUJBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRWIsSUFBSSxDQUFDYyxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLFdBQ1IscURBQUMsa0VBQUQ7QUFBYSxTQUFHLEVBQUVBLElBQUksQ0FBQ2QsRUFBdkI7QUFBMkIsU0FBRyxFQUFFYyxJQUFJLENBQUNiLE1BQXJDO0FBQTZDLGFBQU8sRUFBRWEsSUFBSSxDQUFDWCxPQUEzRDtBQUFvRSxXQUFLLEVBQUVXLElBQUksQ0FBQ1YsS0FBaEY7QUFBdUYsVUFBSSxFQUFFVSxJQUFJLENBQUNULElBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUTtBQUFBLEdBQVQsQ0FERixDQUZGLENBREYsQ0FERDtBQWFEO0tBZHVCSSxPO0FBZ0J4QixJQUFNRSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pHLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixJQUE1QixFQUFrQyxDQUFsQyxDQURBO0FBRUpDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FGQTtBQUdKQyxXQUFPLEVBQUUsQ0FDUCxRQURPLEVBRVAsSUFGTyxFQUdQLFdBSE8sRUFJUCxJQUpPLEVBS1AsV0FMTyxFQU1QLFdBTk8sRUFPUCxJQVBPLEVBUVAsV0FSTyxDQUhMO0FBYUpDLHVCQUFtQixFQUFFLENBQUMsZUFBRCxFQUFrQixJQUFsQixFQUF3QixlQUF4QjtBQWJqQjtBQURPLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWZlNjY1NjM4ZmUyZDBhMGVjMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5pbXBvcnQgRmVhdHVyZUNhcmQgZnJvbSAnY29tcG9uZW50cy9mZWF0dXJlLWNhcmQuanMnO1xuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3BlcmZvcm1hbmNlLnN2Zyc7XG5pbXBvcnQgUGFydG5lcnNoaXAgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnJztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnYXNzZXRzL2ZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2Zyc7XG5pbXBvcnQgU3VwcG9ydCBmcm9tICdhc3NldHMvZmVhdHVyZS9zdXBwb3J0LnN2Zyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpbWdTcmM6IFBlcmZvcm1hbmNlLFxuICAgIGFsdFRleHQ6ICdGYXN0IFBlcmZvcm1hbmNlJyxcbiAgICB0aXRsZTogJ0Zhc3QgUGVyZm9ybWFuY2UnLFxuICAgIHRleHQ6XG4gICAgICAnTGV04oCZcyBqdXN0IGdldCB0aGlzIG91dCBvZiB0aGUgd2F5IC0gdGhlcmUgd2lsbCBhbHdheXMgYmUgYSBraXQgdmVyc2lvbiBvZiBFZHUgZmxvdy4gUGFpZCBzdWJzY3JpcHRpb25zIGFsbG93IHVzIHRvIGNvbnRpbnVlIGhlbHBpbmcgbGVhcm5lcnMgYXJvdW5kIHRoZSB3b3JsZC4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1nU3JjOiBQYXJ0bmVyc2hpcCxcbiAgICBhbHRUZXh0OiAnUHJvIFN1YnNjcmlwdGlvbicsXG4gICAgdGl0bGU6ICdQcm8gU3Vic2NyaXB0aW9uJyxcbiAgICB0ZXh0OlxuICAgICAgJ1dlIGJlbGlldmUgaXTigJlzIGltcG9ydGFudCBmb3IgZXZlcnlvbmUgdG8gaGF2ZSBhY2Nlc3MgdG8gc29mdHdhcmUg4oCTIGVzcGVjaWFsbHkgd2hlbiBpdCBjb21lcyB0byBkaWdpdGFsIGxlYXJuaW5nIGJlIG5hdmlnYXRlZCBieSBrZXlib2FyZCBhbmQgc2NyZWVuIHJlYWRlcnMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGltZ1NyYzogU3Vic2NyaXB0aW9uLFxuICAgIGFsdFRleHQ6ICdQYXJ0bmVyc2hpcCBkZWFsJyxcbiAgICB0aXRsZTogJ1BhcnRuZXJzaGlwIGRlYWwnLFxuICAgIHRleHQ6XG4gICAgICAnTGV04oCZcyBqdXN0IGdldCB0aGlzIG91dCBvZiB0aGUgd2F5IC0gdGhlcmUgd2lsbCBhbHdheXMgYmUgYSBraXQgdmVyc2lvbiBvZiBFZHUgZmxvdy4gUGFpZCBzdWJzY3JpcHRpb25zIGFsbG93IHVzIHRvIGNvbnRpbnVlIGhlbHBpbmcgbGVhcm5lcnMgYXJvdW5kIHRoZSB3b3JsZC4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaW1nU3JjOiBTdXBwb3J0LFxuICAgIGFsdFRleHQ6ICdDdXN0b21lciBTdXBwb3J0JyxcbiAgICB0aXRsZTogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgIHRleHQ6XG4gICAgICAnV2UgYmVsaWV2ZSBpdOKAmXMgaW1wb3J0YW50IGZvciBldmVyeW9uZSB0byBoYXZlIGFjY2VzcyB0byBzb2Z0d2FyZSDigJMgZXNwZWNpYWxseSB3aGVuIGl0IGNvbWVzIHRvIGRpZ2l0YWwgbGVhcm5pbmcgYmUgbmF2aWdhdGVkIGJ5IGtleWJvYXJkIGFuZCBzY3JlZW4gcmVhZGVycy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZSgpIHtcbiAgcmV0dXJuIChcbiAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLmZlYXR1cmUnIH19PlxuICAgICA8Q29udGFpbmVyPlxuICAgICAgIDxTZWN0aW9uSGVhZGVyIHNsb2dhbj1cIlF1YWxpdHkgRmVhdHVyZXNcIiB0aXRsZT1cIkFtYXppbmcgVXNlZnVsIEZlYXR1cmVzXCIgLz5cbiAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8RmVhdHVyZUNhcmQga2V5PXtpdGVtLmlkfSBzcmM9e2l0ZW0uaW1nU3JjfSBhbHRUZXh0PXtpdGVtLmFsdFRleHR9IHRpdGxlPXtpdGVtLnRpdGxlfSB0ZXh0PXtpdGVtLnRleHR9IC8+XG4gICAgICAgICkpfVxuICAgICAgIDwvR3JpZD5cbiAgICAgPC9Db250YWluZXI+XG5cbiAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcbiAgICBweDogWzUsIDYsIDAsIG51bGwsIDcsIDgsIDddLFxuICAgIGdyaWRHYXA6IFtcbiAgICAgICc0MHB4IDAnLFxuICAgICAgbnVsbCxcbiAgICAgICc0NXB4IDMwcHgnLFxuICAgICAgbnVsbCxcbiAgICAgICc2MHB4IDUwcHgnLFxuICAgICAgJzcwcHggNTBweCcsXG4gICAgICBudWxsLFxuICAgICAgJzgwcHggOTBweCcsXG4gICAgXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknLCBudWxsLCAncmVwZWF0KDIsMWZyKSddLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=