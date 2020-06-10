(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@superset-ui/chart"), require("@superset-ui/style"), require("@superset-ui/translation"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@superset-ui/chart", "@superset-ui/style", "@superset-ui/translation", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@superset-ui/chart"), require("@superset-ui/style"), require("@superset-ui/translation"), require("react")) : factory(root["@superset-ui/chart"], root["@superset-ui/style"], root["@superset-ui/translation"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__superset_ui_chart__, __WEBPACK_EXTERNAL_MODULE__superset_ui_style__, __WEBPACK_EXTERNAL_MODULE__superset_ui_translation__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Vis.tsx":
/*!*********************!*\
  !*** ./src/Vis.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = Vis;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _style = _interopRequireDefault(__webpack_require__(/*! @superset-ui/style */ "@superset-ui/style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-family: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var BasicText = _style["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.typography.families.sansSerif;
});

function Vis(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className;
  return /*#__PURE__*/_react["default"].createElement(BasicText, {
    className: className
  }, "Hello world!");
}

/***/ }),

/***/ "./src/controlPanel.tsx":
/*!******************************!*\
  !*** ./src/controlPanel.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _translation = __webpack_require__(/*! @superset-ui/translation */ "@superset-ui/translation");

var _default = {
  controlPanelSections: [{
    label: (0, _translation.t)('Options'),
    expanded: true,
    controlSetRows: [[{
      name: 'font_size',
      config: {
        type: 'SelectControl',
        label: (0, _translation.t)('Font Size'),
        renderTrigger: true,
        clearable: false,
        "default": 0.4,
        // Values represent the percentage of space the "Hello world!" should take
        options: [{
          label: (0, _translation.t)('Tiny'),
          value: 0.2
        }, {
          label: (0, _translation.t)('Small'),
          value: 0.3
        }, {
          label: (0, _translation.t)('Normal'),
          value: 0.4
        }, {
          label: (0, _translation.t)('Large'),
          value: 0.5
        }, {
          label: (0, _translation.t)('Huge'),
          value: 0.6
        }]
      }
    }]]
  }]
};
exports["default"] = _default;

/***/ }),

/***/ "./src/images/thumbnail.png":
/*!**********************************!*\
  !*** ./src/images/thumbnail.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "thumbnail.png");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _translation = __webpack_require__(/*! @superset-ui/translation */ "@superset-ui/translation");

var _chart = __webpack_require__(/*! @superset-ui/chart */ "@superset-ui/chart");

var _controlPanel = _interopRequireDefault(__webpack_require__(/*! ./controlPanel */ "./src/controlPanel.tsx"));

var _transformProps = _interopRequireDefault(__webpack_require__(/*! ./transformProps */ "./src/transformProps.ts"));

var _thumbnail = _interopRequireDefault(__webpack_require__(/*! ./images/thumbnail.png */ "./src/images/thumbnail.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var metadata = new _chart.ChartMetadata({
  description: 'A chart plugin for Superset demonstrating current best practices',
  name: (0, _translation.t)('Hello World'),
  thumbnail: _thumbnail["default"],
  useLegacyApi: false
});
console.log('this one is from hello world plugin');

var HelloWorldChartPlugin = /*#__PURE__*/function (_ChartPlugin) {
  _inheritsLoose(HelloWorldChartPlugin, _ChartPlugin);

  function HelloWorldChartPlugin() {
    return _ChartPlugin.call(this, {
      loadChart: function loadChart() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(__webpack_require__(/*! ./Vis */ "./src/Vis.tsx"));
        });
      },
      metadata: metadata,
      transformProps: _transformProps["default"],
      controlPanel: _controlPanel["default"]
    }) || this;
  }

  return HelloWorldChartPlugin;
}(_chart.ChartPlugin);

exports["default"] = HelloWorldChartPlugin;

/***/ }),

/***/ "./src/transformProps.ts":
/*!*******************************!*\
  !*** ./src/transformProps.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = transformProps;

function transformProps(chartProps) {
  var width = chartProps.width,
      height = chartProps.height;
  console.log("chart props:", chartProps);
  return {
    width: width,
    height: height
  };
}

/***/ }),

/***/ "@superset-ui/chart":
/*!*************************************!*\
  !*** external "@superset-ui/chart" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__superset_ui_chart__;

/***/ }),

/***/ "@superset-ui/style":
/*!*************************************!*\
  !*** external "@superset-ui/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__superset_ui_style__;

/***/ }),

/***/ "@superset-ui/translation":
/*!*******************************************!*\
  !*** external "@superset-ui/translation" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__superset_ui_translation__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});