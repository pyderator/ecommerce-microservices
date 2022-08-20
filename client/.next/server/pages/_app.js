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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  req\n}) => {\n  if (true) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n      baseURL: 'http://my-release-ingress-nginx-controller.default.svc.cluster.local',\n      headers: req.headers\n    });\n  } else {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2UxOTYiXSwibmFtZXMiOlsicmVxIiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSwrREFBZSxDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFhO0FBQzFCLFlBQW1DO0FBQ2pDLFdBQU9DLG1EQUFBLENBQWE7QUFDbEJDLGFBQU8sRUFBRSxzRUFEUztBQUVsQkMsYUFBTyxFQUFFSCxHQUFHLENBQUNHO0FBRkssS0FBYixDQUFQO0FBSUQsR0FMRCxNQU1LLEVBRUo7QUFDRixDQVZEIiwiZmlsZSI6Ii4vYXBpL2J1aWxkLWNsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHJlcSB9KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9teS1yZWxlYXNlLWluZ3Jlc3MtbmdpbngtY29udHJvbGxlci5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsJyxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgfSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7fSk7XG4gIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/SiteNavbar.js":
/*!**********************************!*\
  !*** ./components/SiteNavbar.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/pyderator/Desktop/Thesis/project/ecommerce-microservices/client/components/SiteNavbar.js\";\n\n\nconst SiteNavbar = ({\n  currentUser\n}) => {\n  const links = [!currentUser && {\n    label: 'Sign Up',\n    href: '/auth/signup'\n  }, !currentUser && {\n    label: 'Sign In',\n    href: '/auth/signin'\n  }, currentUser && {\n    label: 'Sell Products',\n    href: '/products/new'\n  }, currentUser && {\n    label: 'My Orders',\n    href: '/orders'\n  }, currentUser && {\n    label: 'Sign Out',\n    href: '/auth/signout'\n  }].filter(linkConfig => linkConfig).map(linkConfig => {\n    const {\n      label,\n      href\n    } = linkConfig;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      className: \"nav-item\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: \"nav-link\",\n          children: label\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, undefined)\n    }, href, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, undefined);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n    className: \"navbar navbar-dark bg-dark\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"navbar-brand\",\n        children: \"e-commerce app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 22\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"d-flex justify-content-end\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"nav d-flex align-items-center\",\n        children: links\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SiteNavbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1NpdGVOYXZiYXIuanM/NGJiMiJdLCJuYW1lcyI6WyJTaXRlTmF2YmFyIiwiY3VycmVudFVzZXIiLCJsaW5rcyIsImxhYmVsIiwiaHJlZiIsImZpbHRlciIsImxpbmtDb25maWciLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBbUI7QUFDcEMsUUFBTUMsS0FBSyxHQUFHLENBQ1osQ0FBQ0QsV0FBRCxJQUFnQjtBQUFFRSxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsUUFBSSxFQUFFO0FBQTFCLEdBREosRUFFWixDQUFDSCxXQUFELElBQWdCO0FBQUVFLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxRQUFJLEVBQUU7QUFBMUIsR0FGSixFQUdaSCxXQUFXLElBQUk7QUFBQ0UsU0FBSyxFQUFFLGVBQVI7QUFBeUJDLFFBQUksRUFBRTtBQUEvQixHQUhILEVBSVpILFdBQVcsSUFBSTtBQUFDRSxTQUFLLEVBQUUsV0FBUjtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBSkgsRUFLWkgsV0FBVyxJQUFJO0FBQUVFLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FMSCxFQU1aQyxNQU5ZLENBT1pDLFVBQVUsSUFBSUEsVUFQRixFQVFaQyxHQVJZLENBU1hELFVBQUQsSUFBZ0I7QUFDZCxVQUFNO0FBQUNILFdBQUQ7QUFBUUM7QUFBUixRQUFnQkUsVUFBdEI7QUFDQSx3QkFDRTtBQUFlLGVBQVMsRUFBQyxVQUF6QjtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFRixJQUFaO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLFVBQWI7QUFBQSxvQkFBeUJEO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBU0MsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBT0QsR0FsQlcsQ0FBZDtBQW9CQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFBZTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQywrQkFBZDtBQUFBLGtCQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0EvQkQ7O0FBaUNBLCtEQUFlRixVQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaXRlTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgU2l0ZU5hdmJhciA9ICh7Y3VycmVudFVzZXJ9KSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBVcCcsIGhyZWY6ICcvYXV0aC9zaWdudXAnIH0sXG4gICAgIWN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIEluJywgaHJlZjogJy9hdXRoL3NpZ25pbicgfSxcbiAgICBjdXJyZW50VXNlciAmJiB7bGFiZWw6ICdTZWxsIFByb2R1Y3RzJywgaHJlZjogJy9wcm9kdWN0cy9uZXcnfSxcbiAgICBjdXJyZW50VXNlciAmJiB7bGFiZWw6ICdNeSBPcmRlcnMnLCBocmVmOiAnL29yZGVycyd9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIE91dCcsIGhyZWY6ICcvYXV0aC9zaWdub3V0JyB9XG4gIF0uZmlsdGVyKFxuICAgIGxpbmtDb25maWcgPT4gbGlua0NvbmZpZ1xuICApLm1hcChcbiAgICAobGlua0NvbmZpZykgPT4ge1xuICAgICAgY29uc3Qge2xhYmVsLCBocmVmfSA9IGxpbmtDb25maWc7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtocmVmfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57bGFiZWx9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICk7IFxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPmUtY29tbWVyY2UgYXBwPC9hPjwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAge2xpbmtzfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaXRlTmF2YmFyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SiteNavbar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_SiteNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SiteNavbar */ \"./components/SiteNavbar.js\");\n\nvar _jsxFileName = \"/Users/pyderator/Desktop/Thesis/project/ecommerce-microservices/client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst AppComponent = ({\n  Component,\n  pageProps,\n  currentUser\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SiteNavbar__WEBPACK_IMPORTED_MODULE_3__.default, {\n      currentUser: currentUser\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n      currentUser: currentUser\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\nAppComponent.getInitialProps = async context => {\n  let pageProps = {};\n  let currentUser = null;\n  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__.default)(context.ctx);\n\n  try {\n    const {\n      data\n    } = await client.get('/api/users/currentuser');\n    currentUser = data.currentUser;\n\n    if (context.Component.getInitialProps) {\n      pageProps = await context.Component.getInitialProps(context.ctx, client, data.currentUser);\n    }\n  } catch {}\n\n  return {\n    pageProps,\n    currentUser\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY2xpZW50IiwiYnVpbGRDbGllbnQiLCJjdHgiLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUMsV0FBYjtBQUF3QkM7QUFBeEIsQ0FBRCxLQUEyQztBQUM5RCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQVksaUJBQVcsRUFBRUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLFNBQUQsa0NBQ01ELFNBRE47QUFDaUIsaUJBQVcsRUFBRUM7QUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O0FBV0FILFlBQVksQ0FBQ0ksZUFBYixHQUErQixNQUFPQyxPQUFQLElBQW1CO0FBQ2hELE1BQUlILFNBQVMsR0FBRyxFQUFoQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxJQUFsQjtBQUNBLFFBQU1HLE1BQU0sR0FBR0MsMERBQVcsQ0FBQ0YsT0FBTyxDQUFDRyxHQUFULENBQTFCOztBQUNBLE1BQUk7QUFDRixVQUFNO0FBQUVDO0FBQUYsUUFBVyxNQUFNSCxNQUFNLENBQUNJLEdBQVAsQ0FBVyx3QkFBWCxDQUF2QjtBQUNBUCxlQUFXLEdBQUdNLElBQUksQ0FBQ04sV0FBbkI7O0FBQ0EsUUFBSUUsT0FBTyxDQUFDSixTQUFSLENBQWtCRyxlQUF0QixFQUF1QztBQUNyQ0YsZUFBUyxHQUFHLE1BQU1HLE9BQU8sQ0FBQ0osU0FBUixDQUFrQkcsZUFBbEIsQ0FBa0NDLE9BQU8sQ0FBQ0csR0FBMUMsRUFBK0NGLE1BQS9DLEVBQXVERyxJQUFJLENBQUNOLFdBQTVELENBQWxCO0FBQ0Q7QUFDRixHQU5ELENBT0EsTUFBTSxDQUFFOztBQUNSLFNBQU87QUFBQ0QsYUFBRDtBQUFZQztBQUFaLEdBQVA7QUFDRCxDQWJEOztBQWVBLCtEQUFlSCxZQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xuaW1wb3J0IFNpdGVOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaXRlTmF2YmFyJztcblxuY29uc3QgQXBwQ29tcG9uZW50ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNpdGVOYXZiYXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfS8+XG4gICAgICA8Q29tcG9uZW50IFxuICAgICAgICB7Li4ucGFnZVByb3BzfSBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgbGV0IGN1cnJlbnRVc2VyID0gbnVsbDtcbiAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoY29udGV4dC5jdHgpO1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpO1xuICAgIGN1cnJlbnRVc2VyID0gZGF0YS5jdXJyZW50VXNlcjtcbiAgICBpZiAoY29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBjb250ZXh0LkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY29udGV4dC5jdHgsIGNsaWVudCwgZGF0YS5jdXJyZW50VXNlcik7XG4gICAgfVxuICB9XG4gIGNhdGNoIHt9XG4gIHJldHVybiB7cGFnZVByb3BzLCBjdXJyZW50VXNlcn07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (function() {



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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();