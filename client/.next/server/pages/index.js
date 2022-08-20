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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  req\n}) => {\n  if (true) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n      baseURL: 'http://my-release-ingress-nginx-controller.default.svc.cluster.local',\n      headers: req.headers\n    });\n  } else {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2UxOTYiXSwibmFtZXMiOlsicmVxIiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSwrREFBZSxDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFhO0FBQzFCLFlBQW1DO0FBQ2pDLFdBQU9DLG1EQUFBLENBQWE7QUFDbEJDLGFBQU8sRUFBRSxzRUFEUztBQUVsQkMsYUFBTyxFQUFFSCxHQUFHLENBQUNHO0FBRkssS0FBYixDQUFQO0FBSUQsR0FMRCxNQU1LLEVBRUo7QUFDRixDQVZEIiwiZmlsZSI6Ii4vYXBpL2J1aWxkLWNsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHJlcSB9KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9teS1yZWxlYXNlLWluZ3Jlc3MtbmdpbngtY29udHJvbGxlci5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsJyxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgfSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7fSk7XG4gIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/pyderator/Desktop/Thesis/project/ecommerce-microservices/client/components/Product.js\";\n\n\n\n\n\nconst Product = ({\n  product\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n    href: '/products/' + product.id,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card\",\n      style: {\n        width: '16rem',\n        height: '16rem',\n        textAlign: 'center'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-body\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n          children: product.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: \"\",\n          alt: \"\",\n          style: {\n            marginLeft: \"auto\",\n            marginRight: \"auto\",\n            width: '10rem',\n            height: '10rem'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [product.price, \" \\u20AC\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1Byb2R1Y3QuanM/OWQwNiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvZHVjdCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ0aXRsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWU7QUFDN0Isc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUUsZUFBZUEsT0FBTyxDQUFDQyxFQUFuQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBRSxPQUFSO0FBQWlCQyxjQUFNLEVBQUUsT0FBekI7QUFBa0NDLGlCQUFTLEVBQUU7QUFBN0MsT0FBN0I7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtKLE9BQU8sQ0FBQ0s7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSyxhQUFHLEVBQUMsRUFBVDtBQUFZLGFBQUcsRUFBQyxFQUFoQjtBQUFtQixlQUFLLEVBQUU7QUFBQ0Msc0JBQVUsRUFBRSxNQUFiO0FBQXFCQyx1QkFBVyxFQUFFLE1BQWxDO0FBQTBDTCxpQkFBSyxFQUFFLE9BQWpEO0FBQTBEQyxrQkFBTSxFQUFFO0FBQWxFO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFBLHFCQUFJSCxPQUFPLENBQUNRLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQVpEOztBQWNBLCtEQUFlVCxPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBQcm9kdWN0ID0gKHtwcm9kdWN0fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9eycvcHJvZHVjdHMvJyArIHByb2R1Y3QuaWR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3t3aWR0aDogJzE2cmVtJywgaGVpZ2h0OiAnMTZyZW0nLCB0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGg1Pntwcm9kdWN0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIiBzdHlsZT17e21hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCIsIHdpZHRoOiAnMTByZW0nLCBoZWlnaHQ6ICcxMHJlbSd9fT48L2ltZz5cbiAgICAgICAgICA8cD57cHJvZHVjdC5wcmljZX0g4oKsPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Product */ \"./components/Product.js\");\n\nvar _jsxFileName = \"/Users/pyderator/Desktop/Thesis/project/ecommerce-microservices/client/pages/index.js\";\n\n\n\n\nconst Index = ({\n  currentUser,\n  products\n}) => {\n  const style = {\n    leftMargin: 'auto',\n    rightMargin: 'auto',\n    marginTop: '3em'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4\",\n      style: style,\n      children: products && products.map(item => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          class: \"col\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_3__.default, {\n            product: item\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 31\n          }, undefined), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\nIndex.getInitialProps = async (context, client, currentUser) => {\n  const {\n    data\n  } = await client.get('/api/products');\n  return {\n    products: data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiY3VycmVudFVzZXIiLCJwcm9kdWN0cyIsInN0eWxlIiwibGVmdE1hcmdpbiIsInJpZ2h0TWFyZ2luIiwibWFyZ2luVG9wIiwibWFwIiwiaXRlbSIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImNsaWVudCIsImRhdGEiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFDQyxhQUFEO0FBQWNDO0FBQWQsQ0FBRCxLQUE2QjtBQUN6QyxRQUFNQyxLQUFLLEdBQUM7QUFDVkMsY0FBVSxFQUFFLE1BREY7QUFFVkMsZUFBVyxFQUFFLE1BRkg7QUFHVkMsYUFBUyxFQUFFO0FBSEQsR0FBWjtBQUtBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx3RUFBZjtBQUF3RixXQUFLLEVBQUVILEtBQS9GO0FBQUEsZ0JBQ0dELFFBQVEsSUFBSUEsUUFBUSxDQUFDSyxHQUFULENBQWFDLElBQUksSUFBSTtBQUNoQyw0QkFDRTtBQUFLLGVBQUssRUFBQyxLQUFYO0FBQUEsdUNBQWtCLDhEQUFDLHdEQUFEO0FBQVMsbUJBQU8sRUFBRUE7QUFBbEIsYUFBNkJBLElBQUksQ0FBQ0MsRUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBR0QsT0FKWTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQWpCRDs7QUFtQkFULEtBQUssQ0FBQ1UsZUFBTixHQUF3QixPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixFQUF3QlgsV0FBeEIsS0FBd0M7QUFDOUQsUUFBTTtBQUFFWTtBQUFGLE1BQVcsTUFBTUQsTUFBTSxDQUFDRSxHQUFQLENBQVcsZUFBWCxDQUF2QjtBQUNBLFNBQU87QUFBQ1osWUFBUSxFQUFFVztBQUFYLEdBQVA7QUFDRCxDQUhEOztBQUtBLCtEQUFlYixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRDbGllbnQgZnJvbSAnLi4vYXBpL2J1aWxkLWNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0JztcblxuY29uc3QgSW5kZXggPSAoe2N1cnJlbnRVc2VyLCBwcm9kdWN0c30pID0+IHtcbiAgY29uc3Qgc3R5bGU9e1xuICAgIGxlZnRNYXJnaW46ICdhdXRvJyxcbiAgICByaWdodE1hcmdpbjogJ2F1dG8nLFxuICAgIG1hcmdpblRvcDogJzNlbSdcbiAgfSBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1jb2xzLTEgcm93LWNvbHMteHMtMSByb3ctY29scy1zbS0xIHJvdy1jb2xzLW1kLTIgcm93LWNvbHMtbGctNFwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIHtwcm9kdWN0cyAmJiBwcm9kdWN0cy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj4gPFByb2R1Y3QgcHJvZHVjdD17aXRlbX0ga2V5PXtpdGVtLmlkfT48L1Byb2R1Y3Q+IDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCwgY2xpZW50LCBjdXJyZW50VXNlcikgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoJy9hcGkvcHJvZHVjdHMnKTtcbiAgcmV0dXJuIHtwcm9kdWN0czogZGF0YX07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();