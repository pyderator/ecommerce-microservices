/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./components/SignupForm.js":
/*!**********************************!*\
  !*** ./components/SignupForm.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/pyderator/Desktop/Thesis/project/ecommerce-microservices/client/components/SignupForm.js\";\n\n\n\n\nconst SignupForm = () => {\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: errors,\n    1: setErrors\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    email: null,\n    password: null\n  });\n\n  const onSubmit = async event => {\n    event.preventDefault();\n\n    try {\n      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post('/api/users/signup', {\n        email,\n        password\n      });\n      next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');\n    } catch (err) {\n      const errors = {\n        other: []\n      };\n\n      for (let error of err.response.data.errors) {\n        if (error.field) {\n          errors[error.field] = error.message;\n        } else {\n          errors.other.push(error.message);\n        }\n      }\n\n      setErrors(errors);\n    }\n  };\n\n  const style = {\n    position: 'absolute',\n    left: '50%',\n    top: '50%',\n    transform: 'translate(-50%, -50%)'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"col-4\",\n    style: style,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Email:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          value: email,\n          onChange: e => setEmail(e.target.value),\n          className: \"form-control\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, undefined), errors.email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Password:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          value: password,\n          onChange: e => setPassword(e.target.value),\n          type: \"password\",\n          className: \"form-control\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, undefined), errors.password]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, undefined), errors.other, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"btn btn-primary\",\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1NpZ251cEZvcm0uanM/YjFmMiJdLCJuYW1lcyI6WyJTaWdudXBGb3JtIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9ycyIsInNldEVycm9ycyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiYXhpb3MiLCJSb3V0ZXIiLCJlcnIiLCJvdGhlciIsImVycm9yIiwiZGF0YSIsImZpZWxkIiwibWVzc2FnZSIsInB1c2giLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFDdkIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDRyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosK0NBQVEsQ0FBQztBQUFDRixTQUFLLEVBQUMsSUFBUDtBQUFhRyxZQUFRLEVBQUM7QUFBdEIsR0FBRCxDQUFwQzs7QUFFQSxRQUFNSSxRQUFRLEdBQUcsTUFBT0MsS0FBUCxJQUFpQjtBQUNoQ0EsU0FBSyxDQUFDQyxjQUFOOztBQUNBLFFBQUk7QUFDRixZQUFNQyxRQUFRLEdBQUcsTUFBTUMsaURBQUEsQ0FBVyxtQkFBWCxFQUErQjtBQUFDWCxhQUFEO0FBQVFHO0FBQVIsT0FBL0IsQ0FBdkI7QUFDQVMsNkRBQUEsQ0FBWSxHQUFaO0FBQ0QsS0FIRCxDQUlBLE9BQU9DLEdBQVAsRUFBWTtBQUNWLFlBQU1SLE1BQU0sR0FBRztBQUFDUyxhQUFLLEVBQUM7QUFBUCxPQUFmOztBQUNBLFdBQUssSUFBSUMsS0FBVCxJQUFrQkYsR0FBRyxDQUFDSCxRQUFKLENBQWFNLElBQWIsQ0FBa0JYLE1BQXBDLEVBQTRDO0FBQzFDLFlBQUlVLEtBQUssQ0FBQ0UsS0FBVixFQUFpQjtBQUNmWixnQkFBTSxDQUFDVSxLQUFLLENBQUNFLEtBQVAsQ0FBTixHQUFzQkYsS0FBSyxDQUFDRyxPQUE1QjtBQUNELFNBRkQsTUFHSztBQUNIYixnQkFBTSxDQUFDUyxLQUFQLENBQWFLLElBQWIsQ0FBa0JKLEtBQUssQ0FBQ0csT0FBeEI7QUFDRDtBQUNGOztBQUNEWixlQUFTLENBQUNELE1BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FsQkQ7O0FBb0JBLFFBQU1lLEtBQUssR0FBQztBQUNSQyxZQUFRLEVBQUUsVUFERjtBQUVSQyxRQUFJLEVBQUUsS0FGRTtBQUdSQyxPQUFHLEVBQUUsS0FIRztBQUlSQyxhQUFTLEVBQUU7QUFKSCxHQUFaO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixTQUFLLEVBQUVKLEtBQTlCO0FBQUEsMkJBQ0U7QUFBTSxjQUFRLEVBQUViLFFBQWhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBTyxlQUFLLEVBQUVQLEtBQWQ7QUFBcUIsa0JBQVEsRUFBRXlCLENBQUMsSUFBSXhCLFFBQVEsQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQTVDO0FBQThELG1CQUFTLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUdHdEIsTUFBTSxDQUFDTCxLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQU9FO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFPLGVBQUssRUFBRUcsUUFBZDtBQUF3QixrQkFBUSxFQUFFc0IsQ0FBQyxJQUFJckIsV0FBVyxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEQ7QUFBb0UsY0FBSSxFQUFDLFVBQXpFO0FBQW9GLG1CQUFTLEVBQUM7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUdHdEIsTUFBTSxDQUFDRixRQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixFQVlHRSxNQUFNLENBQUNTLEtBWlYsZUFhRTtBQUFRLGlCQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQW5ERDs7QUFxREEsK0RBQWVmLFVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ251cEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFNpZ251cEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtlbWFpbDpudWxsLCBwYXNzd29yZDpudWxsfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMvc2lnbnVwJyx7ZW1haWwsIHBhc3N3b3JkfSk7XG4gICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB7b3RoZXI6W119O1xuICAgICAgZm9yIChsZXQgZXJyb3Igb2YgZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgIGlmIChlcnJvci5maWVsZCkge1xuICAgICAgICAgIGVycm9yc1tlcnJvci5maWVsZF0gPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVycm9ycy5vdGhlci5wdXNoKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRFcnJvcnMoZXJyb3JzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3R5bGU9e1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPGgxPlNpZ24gVXA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgICAgICAgICB7ZXJyb3JzLmVtYWlsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XG4gICAgICAgICAge2Vycm9ycy5wYXNzd29yZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtlcnJvcnMub3RoZXJ9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignupForm.js\n");

/***/ }),

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SignupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SignupForm */ \"./components/SignupForm.js\");\n\nvar _jsxFileName = \"/Users/pyderator/Desktop/Thesis/project/ecommerce-microservices/client/pages/auth/signup.js\";\n\n\nconst signup = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignupForm__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (signup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hdXRoL3NpZ251cC5qcz85YWM5Il0sIm5hbWVzIjpbInNpZ251cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsc0JBQU8sOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJQSwrREFBZUEsTUFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGgvc2lnbnVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ251cEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWdudXBGb3JtJztcblxuY29uc3Qgc2lnbnVwID0gKCkgPT4ge1xuICByZXR1cm4gPFNpZ251cEZvcm0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaWdudXA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.js"));
module.exports = __webpack_exports__;

})();