"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --general-padding: 30px;
    --sidebar-gap: 10px;
    --task-padding: 6px 16px;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    position: relative;
}

/* ------- HEADER ------- */

#header {
    min-height: 10svh;
    background-color: antiquewhite;
}

/* ------- MAIN ------- */

#main-container {
    min-height: 90svh;
    display: flex;
}

/* ------- SIDEBAR ------- */

#side-bar {
    min-width: 250px;
    max-width: 300px;
    padding: var(--general-padding);
    background-color: aliceblue;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--sidebar-gap);
}

#home-container,
#projects-container,
#projects-display {
    display: flex;
    flex-direction: column;
    gap: var(--sidebar-gap);
}

.project {
    cursor: pointer;
    padding: 6px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#new-project {
    padding: 6px 10px;
}

#new-project:hover,
.project:hover {
    background-color: #4a4a4a50;
    padding: 6px 10px;
    border-radius: 4px;
}

/* ------- TASK DISPLAY ------- */

#tasks-container {
    padding: var(--general-padding);
    flex: 1;
}

#tasks-display {
    display: flex;
    flex-direction: column;
    gap: var(--sidebar-gap);
}

.task {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.task-main {
    padding: var(--task-padding);
    display: grid;
    grid-template-columns: 1fr min-content 150px;
    border-bottom: 1px solid #d2d2d2;
    cursor: pointer;
}

.task-icon {
    width: 1.3rem;
    height: auto;
}

.task-additional {
    padding: var(--task-padding);
    border: 1px solid #d2d2d2;
    border-radius: 4px;
}

.collapse {
    display: none;
}

.expand {
    display: block;
}

/* ------- NEW TASK ------- */

#new-task-form {
    padding: var(--task-padding);
    display: grid;
    grid-template-columns: 1fr min-content;
    gap: 16px;
}

#new-task-form.collapse {
    display: none;
}

.hide {
    visibility: hidden;
}

#new-task-main-info {
    display: flex;
    flex-direction: column;
    gap: var(--sidebar-gap);
}

dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA,2BAA2B;;AAE3B;IACI,iBAAiB;IACjB,8BAA8B;AAClC;;AAEA,yBAAyB;;AAEzB;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA,4BAA4B;;AAE5B;IACI,gBAAgB;IAChB,gBAAgB;IAChB,+BAA+B;IAC/B,2BAA2B;IAC3B,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,2BAA2B;IAC3B,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,iCAAiC;;AAEjC;IACI,+BAA+B;IAC/B,OAAO;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,4CAA4C;IAC5C,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA,6BAA6B;;AAE7B;IACI,4BAA4B;IAC5B,aAAa;IACb,sCAAsC;IACtC,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC","sourcesContent":[":root {\n    --general-padding: 30px;\n    --sidebar-gap: 10px;\n    --task-padding: 6px 16px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    position: relative;\n}\n\n/* ------- HEADER ------- */\n\n#header {\n    min-height: 10svh;\n    background-color: antiquewhite;\n}\n\n/* ------- MAIN ------- */\n\n#main-container {\n    min-height: 90svh;\n    display: flex;\n}\n\n/* ------- SIDEBAR ------- */\n\n#side-bar {\n    min-width: 250px;\n    max-width: 300px;\n    padding: var(--general-padding);\n    background-color: aliceblue;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: var(--sidebar-gap);\n}\n\n#home-container,\n#projects-container,\n#projects-display {\n    display: flex;\n    flex-direction: column;\n    gap: var(--sidebar-gap);\n}\n\n.project {\n    cursor: pointer;\n    padding: 6px 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#new-project {\n    padding: 6px 10px;\n}\n\n#new-project:hover,\n.project:hover {\n    background-color: #4a4a4a50;\n    padding: 6px 10px;\n    border-radius: 4px;\n}\n\n/* ------- TASK DISPLAY ------- */\n\n#tasks-container {\n    padding: var(--general-padding);\n    flex: 1;\n}\n\n#tasks-display {\n    display: flex;\n    flex-direction: column;\n    gap: var(--sidebar-gap);\n}\n\n.task {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.task-main {\n    padding: var(--task-padding);\n    display: grid;\n    grid-template-columns: 1fr min-content 150px;\n    border-bottom: 1px solid #d2d2d2;\n    cursor: pointer;\n}\n\n.task-icon {\n    width: 1.3rem;\n    height: auto;\n}\n\n.task-additional {\n    padding: var(--task-padding);\n    border: 1px solid #d2d2d2;\n    border-radius: 4px;\n}\n\n.collapse {\n    display: none;\n}\n\n.expand {\n    display: block;\n}\n\n/* ------- NEW TASK ------- */\n\n#new-task-form {\n    padding: var(--task-padding);\n    display: grid;\n    grid-template-columns: 1fr min-content;\n    gap: 16px;\n}\n\n#new-task-form.collapse {\n    display: none;\n}\n\n.hide {\n    visibility: hidden;\n}\n\n#new-task-main-info {\n    display: flex;\n    flex-direction: column;\n    gap: var(--sidebar-gap);\n}\n\ndialog {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/DOM-functions.js":
/*!******************************!*\
  !*** ./src/DOM-functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewTask: () => (/* binding */ addNewTask),
/* harmony export */   createNewTask: () => (/* binding */ createNewTask),
/* harmony export */   createProjectOption: () => (/* binding */ createProjectOption),
/* harmony export */   deleteCurrentTasks: () => (/* binding */ deleteCurrentTasks),
/* harmony export */   getTaskProject: () => (/* binding */ getTaskProject),
/* harmony export */   resetNewTaskForm: () => (/* binding */ resetNewTaskForm),
/* harmony export */   submitEditTask: () => (/* binding */ submitEditTask)
/* harmony export */ });
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");


function deleteCurrentTasks() {
    const currentTasks = document.querySelectorAll(".task");
    currentTasks.forEach(task => {
        task.remove();
    })
}

function addNewTask() {
    const newTaskForm = document.querySelector("#new-task-form");
    newTaskForm.classList.toggle("collapse");
    const newTaskButton = document.querySelector("#new-task-add");
    newTaskButton.classList.toggle("collapse");
}

function createNewTask() {
    const newTaskTitle = document.querySelector("#new-task-title").value;
    const newTaskDescription = document.querySelector("#new-task-description").value;
    const newTaskDate = document.querySelector("#new-task-date").value;
    const newTaskPriority = document.querySelector("#new-task-priority").value;
    const newTask = new _create_task__WEBPACK_IMPORTED_MODULE_0__["default"](newTaskTitle, newTaskDescription, newTaskDate, newTaskPriority);
    return newTask;
}

function createProjectOption(newProject) {
    const newTaskProject = document.querySelector("#new-task-project");
    const createOption = document.createElement("option");
    createOption.setAttribute("id", newProject.id);
    createOption.setAttribute("value", newProject.name);
    createOption.textContent = newProject.name
    newTaskProject.appendChild(createOption)
}

function getTaskProject(inbox) {
    const newTaskProject = document.querySelector("#new-task-project").value;
    for (let project of inbox.showAllProjects) {
        if (newTaskProject === project.name) {
            return project;
        }
    }
}

function resetNewTaskForm() {
    const newTaskForm = document.querySelector("#new-task-form");
    newTaskForm.classList.toggle("collapse");
    const newTaskButton = document.querySelector("#new-task-add");
    newTaskButton.classList.toggle("collapse");
    newTaskForm.reset();
}

function submitEditTask(task) {
    task.name = document.querySelector(".edit-task-name").value;;
    task.description = document.querySelector(".edit-task-description").value;
    task.date = document.querySelector(".edit-task-date").value;
    task.priority = document.querySelector(".edit-task-priority").value;
}



/***/ }),

/***/ "./src/create-display.js":
/*!*******************************!*\
  !*** ./src/create-display.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectDiv: () => (/* binding */ createProjectDiv),
/* harmony export */   createTaskDiv: () => (/* binding */ createTaskDiv),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _images_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/edit_icon.svg */ "./src/images/edit_icon.svg");
/* harmony import */ var _images_move_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/move_icon.svg */ "./src/images/move_icon.svg");
/* harmony import */ var _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/delete_icon.svg */ "./src/images/delete_icon.svg");




function loadPage(inbox) {
    document.querySelector("#inbox").classList.toggle("active");
    inbox.showTasks.forEach(task => {
        document.querySelector("#tasks-display").appendChild(createTaskDiv(task));
    })
}

function createTaskDiv(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("id", task.id)

    const taskMainInfo = document.createElement("div");
    taskMainInfo.classList.add("task-main");

    const taskMainLeft = document.createElement("div");
    taskMainLeft.classList.add("task-main-left");
    taskMainLeft.textContent = task.name;

    const taskMainRight = document.createElement("div");
    taskMainRight.classList.add("task-main-right");
    taskMainRight.textContent = task.date;

    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("task-icons");
    const myEditIcon = new Image();
    myEditIcon.src = _images_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
    myEditIcon.classList.add("edit-icon");
    myEditIcon.classList.add("task-icon");
    const myMoveIcon = new Image();
    myMoveIcon.src = _images_move_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    myMoveIcon.classList.add("move-icon");
    myMoveIcon.classList.add("task-icon");
    const myDeleteIcon = new Image();
    myDeleteIcon.src = _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
    myDeleteIcon.classList.add("delete-icon");
    myDeleteIcon.classList.add("task-icon");

    iconsContainer.append(myEditIcon, myMoveIcon, myDeleteIcon);

    taskMainInfo.append(taskMainLeft, taskMainRight, iconsContainer);

    const taskAdditionalInfo = document.createElement("div");
    taskAdditionalInfo.classList.add("task-additional");
    taskAdditionalInfo.classList.add("collapse");
    taskAdditionalInfo.textContent = task.description;
    
    taskDiv.append(taskMainInfo, taskAdditionalInfo);

    return taskDiv;
}

function createProjectDiv(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.setAttribute("data-id", `${project.id}`)
    projectDiv.textContent = project.name;

    return projectDiv;
}

function editTask(task) {
    const editTaskForm = document.createElement("form");
    editTaskForm.classList.add("edit-task-form");

    const editTaskName = document.createElement("input");
    editTaskName.classList.add("edit-task-name");
    editTaskName.value = task.name;

    const editTaskDescription = document.createElement("textarea");
    editTaskDescription.classList.add("edit-task-description");
    editTaskDescription.textContent = task.description;

    const editTaskDate = document.createElement("input");
    editTaskDate.classList.add("edit-task-date");
    editTaskDate.setAttribute("type", "date");
    editTaskDate.value = task.date;

    const editTaskPriority = document.createElement("select");
    editTaskPriority.classList.add("edit-task-priority");
    const taskPriority = ["High", "Medium", "Low"];
    for (let item of taskPriority) {
        const priorityItem = document.createElement("option");
        if (item === task.priority) {
            priorityItem.setAttribute("selected", "selected");
        }
        priorityItem.textContent = item;
        priorityItem.setAttribute("value", item);
        editTaskPriority.appendChild(priorityItem);
    }

    const editTaskButtons = document.createElement("div");
    const editSubmitButton = document.createElement("button");
    editSubmitButton.setAttribute("type", "submit");
    editSubmitButton.setAttribute("id", "edit-task-submit");
    editSubmitButton.textContent = "Edit Task";
    const editCancelButton = document.createElement("button");
    editCancelButton.textContent = "Cancel";
    editTaskButtons.append(editSubmitButton, editCancelButton);

    editTaskForm.append(editTaskName, editTaskDescription, editTaskDate, editTaskPriority, editTaskButtons);

    return editTaskForm;
}



/***/ }),

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Project {
    constructor(name) {
        this._project = [];
        this._name = name;
        this._id = "project_" + (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])().slice(-12, -1);
    }

    get showProject() {
        return this._project;
    }

    get showTasks() {
        const projectTasks = [];
        for (let task of this._project) {
            projectTasks.push(task);
        }
        return projectTasks;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        return this._name = value;
    }

    get id() {
        return this._id;
    }

    addTask(task) {
        this._project.push(task);
    }

    deleteTask(task) {
        this._project.splice(this._project.indexOf(task), 1);
    }
}

/***/ }),

/***/ "./src/create-task.js":
/*!****************************!*\
  !*** ./src/create-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Task {
    constructor(name, description, date, priority) {
        this._id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this._name = name;
        this._description = description;
        this._date = date;
        this._priority = priority;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        return this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        return this._description = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        return this._date = value;
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        return this._priority = value;
    }
}

/***/ }),

/***/ "./src/group-projects.js":
/*!*******************************!*\
  !*** ./src/group-projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GroupProjects)
/* harmony export */ });
class GroupProjects {
    constructor() {
        this._allProjects = [];
    }

    get showAllProjects() {
        return this._allProjects;
    }

    get showProjectsNames() {
        const projectsNames = [];
        this._allProjects.forEach(project => {
            projectsNames.push(project.name);
        })
        return projectsNames;
    }

    addProject(project) {
        this._allProjects.push(project);
    }

    deleteProject(project) {
        this._allProjects.splice(this._allProjects.indexOf(project), 1)
    }

    get showTasks() {
        const allTasks = [];
        this._allProjects.forEach(project => {
            project.showProject.forEach(task => {
                allTasks.push(task);
            })
        })
        return allTasks;
    }

    deleteTask(task) {
        this._allProjects.forEach(project => {
            for (let oneTask of project.showProject) {
                if (oneTask === task) {
                    project.deleteTask(task);
                }
            }
        })
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _group_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-projects */ "./src/group-projects.js");
/* harmony import */ var _create_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-display */ "./src/create-display.js");
/* harmony import */ var _DOM_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM-functions */ "./src/DOM-functions.js");







const task1 = new _create_task__WEBPACK_IMPORTED_MODULE_1__["default"]("gym", "in the morning", "2023-11-02", "High");
const task2 = new _create_task__WEBPACK_IMPORTED_MODULE_1__["default"]("play dice throne", "with Dr Strange", "2023-10-21", "Medium");
const project1 = new _create_project__WEBPACK_IMPORTED_MODULE_2__["default"]("Project 1");
const project2 = new _create_project__WEBPACK_IMPORTED_MODULE_2__["default"]("Project 2");
const inbox = new _group_projects__WEBPACK_IMPORTED_MODULE_3__["default"]();


project1.addTask(task1)
project2.addTask(task2)

inbox.addProject(project1)
inbox.addProject(project2)

;(0,_create_display__WEBPACK_IMPORTED_MODULE_4__.loadPage)(inbox);

// INBOX BUTTON
const inboxButton = document.querySelector("#inbox");
inboxButton.addEventListener("click", () => {
    (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.deleteCurrentTasks)();
    const checkProjects = document.querySelectorAll(".project");
    checkProjects.forEach(project => {
        if (project.classList.contains("active")) {
            project.classList.toggle("active");
        }
    })
    inboxButton.classList.toggle("active");
    inbox.showTasks.forEach(task => {
        tasksDisplay.append((0,_create_display__WEBPACK_IMPORTED_MODULE_4__.createTaskDiv)(task));
    })
})

// PROJECT
const projectsDisplay = document.querySelector("#projects-display");
projectsDisplay.appendChild((0,_create_display__WEBPACK_IMPORTED_MODULE_4__.createProjectDiv)(project1))
projectsDisplay.appendChild((0,_create_display__WEBPACK_IMPORTED_MODULE_4__.createProjectDiv)(project2))
projectsDisplay.addEventListener("click", (event) => {
    console.log(event.target)
    console.log(inbox.showAllProjects)
    projectsDisplay.childNodes.forEach(child => {
        if (child !== event.target && child.classList.contains("active")) {
            child.classList.toggle("active");
        }
    })
    for (let project of inbox.showAllProjects) {
        if (event.target.dataset.id === project.id && !event.target.classList.contains("active")) {
            console.log(project.showProject)
            event.target.classList.toggle("active");
            (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.deleteCurrentTasks)();
            project.showProject.forEach(task => {
                const changeTask = (0,_create_display__WEBPACK_IMPORTED_MODULE_4__.createTaskDiv)(task);
                tasksDisplay.appendChild(changeTask)
            })
        }
    }
})  

// DELETE PROJECT

// NEW PROJECT BUTTON
const newProjectButton = document.querySelector("#new-project");
newProjectButton.addEventListener("click", () => {
    newProjectButton.classList.toggle("collapse");
    newProjectButton.nextElementSibling.classList.toggle("collapse");
})

for (let project of inbox.showAllProjects) {
    ;(0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.createProjectOption)(project)
}

// SUBMIT NEW PROJECT BUTTON
const submitNewProjectButton = document.querySelector("#new-project-submit");
submitNewProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newProjectName = document.querySelector("#new-project-name").value;
    const newProject = new _create_project__WEBPACK_IMPORTED_MODULE_2__["default"](newProjectName);
    inbox.addProject(newProject)
    projectsDisplay.appendChild((0,_create_display__WEBPACK_IMPORTED_MODULE_4__.createProjectDiv)(newProject));
    newProjectButton.classList.toggle("collapse");
    newProjectButton.nextElementSibling.classList.toggle("collapse");

    (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.createProjectOption)(newProject);
})

// TASK
const tasksDisplay = document.querySelector("#tasks-display");
tasksDisplay.addEventListener("click", event => {
    if (event.target.className === "task-main") {
        event.target.nextElementSibling.classList.toggle("collapse");
    }
    if (event.target.className === "task-main-left" || event.target.className === "task-main-right") {
        event.target.parentElement.nextElementSibling.classList.toggle("collapse");
    }
})

// NEW TASK BUTTON
const newTaskButton = document.querySelector("#new-task-add");
newTaskButton.addEventListener("click", () => {
    (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.addNewTask)();
})

// SUBMIT NEW TASK BUTTON
const submitNewTaskButton = document.querySelector("#new-task-submit");
submitNewTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newTask = (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.createNewTask)();
    const newTaskDisplay = (0,_create_display__WEBPACK_IMPORTED_MODULE_4__.createTaskDiv)(newTask);
    const selectedProject = (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.getTaskProject)(inbox);
    selectedProject.addTask(newTask);
    if (document.querySelector(".active").dataset.id === selectedProject.id || 
    document.querySelector("#inbox").classList.contains("active")) {
        document.querySelector("#tasks-display").appendChild(newTaskDisplay);
    }
    (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.resetNewTaskForm)();
})

// DELETE TASK
tasksDisplay.addEventListener("click", event => {
    if (event.target.classList.contains("delete-icon")) {
        const targetedTask = event.target.parentElement.parentElement.parentElement;
        for (let task of inbox.showTasks) {
            if (task.id === targetedTask.getAttribute("id")) {
                inbox.deleteTask(task);
                targetedTask.remove();
                console.log("Task deleted")
            }
        }
    }
})

// EDIT TASK
tasksDisplay.addEventListener("click", event => {
    if (event.target.classList.contains("edit-icon")) {
        const targetedTask = event.target.parentElement.parentElement.parentElement;
        for (let task of inbox.showTasks) {
            if (task.id === targetedTask.getAttribute("id")) {
                targetedTask.classList.toggle("editing-task");
                console.log(task.name, task.id)
                console.log(targetedTask)
                const editDialog = document.querySelector("#edit-task-dialog");
                editDialog.showModal();
                document.querySelector("#edit-task-name").value = task.name;
                document.querySelector("#edit-task-description").value = task.description;
                document.querySelector("#edit-task-date").value = task.date;
                document.querySelector("#edit-task-priority").value = task.priority;
            }
        }
    }
})

const editTaskSubmitButton = document.querySelector("#edit-task-submit");
editTaskSubmitButton.addEventListener("click", event => {
    event.preventDefault();
    const targetedTask = document.querySelector(".editing-task");
    for (let task of inbox.showTasks) {
        if (task.id === targetedTask.getAttribute("id")) {
            task.name = document.querySelector("#edit-task-name").value;
            task.description = document.querySelector("#edit-task-description").value;
            task.date = document.querySelector("#edit-task-date").value;
            task.priority = document.querySelector("#edit-task-priority").value;
            const newTaskDiv = (0,_create_display__WEBPACK_IMPORTED_MODULE_4__.createTaskDiv)(task);
            tasksDisplay.replaceChild(newTaskDiv, targetedTask);
            document.querySelector("edit-task-dialog").close()
        }
    }
})

/***/ }),

/***/ "./src/images/delete_icon.svg":
/*!************************************!*\
  !*** ./src/images/delete_icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23a5cc0343951724d21a.svg";

/***/ }),

/***/ "./src/images/edit_icon.svg":
/*!**********************************!*\
  !*** ./src/images/edit_icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5f48092f699ce8508d0.svg";

/***/ }),

/***/ "./src/images/move_icon.svg":
/*!**********************************!*\
  !*** ./src/images/move_icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "272f254a943c291f1819.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZEQUFhO0FBQ2pDLDJCQUEyQiw4REFBYTtBQUN4Qyw0QkFBNEIsOERBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQWdCO0FBQ3BCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhEQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ3JvdXAtcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1nZW5lcmFsLXBhZGRpbmc6IDMwcHg7XG4gICAgLS1zaWRlYmFyLWdhcDogMTBweDtcbiAgICAtLXRhc2stcGFkZGluZzogNnB4IDE2cHg7XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogLS0tLS0tLSBIRUFERVIgLS0tLS0tLSAqL1xuXG4jaGVhZGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMHN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG5cbi8qIC0tLS0tLS0gTUFJTiAtLS0tLS0tICovXG5cbiNtYWluLWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogOTBzdmg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyogLS0tLS0tLSBTSURFQkFSIC0tLS0tLS0gKi9cblxuI3NpZGUtYmFyIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogdmFyKC0tZ2VuZXJhbC1wYWRkaW5nKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zaWRlYmFyLWdhcCk7XG59XG5cbiNob21lLWNvbnRhaW5lcixcbiNwcm9qZWN0cy1jb250YWluZXIsXG4jcHJvamVjdHMtZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xufVxuXG4ucHJvamVjdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNuZXctcHJvamVjdCB7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG59XG5cbiNuZXctcHJvamVjdDpob3Zlcixcbi5wcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhNTA7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4vKiAtLS0tLS0tIFRBU0sgRElTUExBWSAtLS0tLS0tICovXG5cbiN0YXNrcy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLWdlbmVyYWwtcGFkZGluZyk7XG4gICAgZmxleDogMTtcbn1cblxuI3Rhc2tzLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNpZGViYXItZ2FwKTtcbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbn1cblxuLnRhc2stbWFpbiB7XG4gICAgcGFkZGluZzogdmFyKC0tdGFzay1wYWRkaW5nKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50IDE1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2staWNvbiB7XG4gICAgd2lkdGg6IDEuM3JlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi50YXNrLWFkZGl0aW9uYWwge1xuICAgIHBhZGRpbmc6IHZhcigtLXRhc2stcGFkZGluZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jb2xsYXBzZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmV4cGFuZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIC0tLS0tLS0gTkVXIFRBU0sgLS0tLS0tLSAqL1xuXG4jbmV3LXRhc2stZm9ybSB7XG4gICAgcGFkZGluZzogdmFyKC0tdGFzay1wYWRkaW5nKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xuICAgIGdhcDogMTZweDtcbn1cblxuI25ldy10YXNrLWZvcm0uY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNuZXctdGFzay1tYWluLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNpZGViYXItZ2FwKTtcbn1cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsMkJBQTJCOztBQUUzQjtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7QUFDbEM7O0FBRUEseUJBQXlCOztBQUV6QjtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBLDRCQUE0Qjs7QUFFNUI7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0IsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsaUNBQWlDOztBQUVqQztJQUNJLCtCQUErQjtJQUMvQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUEsNkJBQTZCOztBQUU3QjtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZ2VuZXJhbC1wYWRkaW5nOiAzMHB4O1xcbiAgICAtLXNpZGViYXItZ2FwOiAxMHB4O1xcbiAgICAtLXRhc2stcGFkZGluZzogNnB4IDE2cHg7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIC0tLS0tLS0gSEVBREVSIC0tLS0tLS0gKi9cXG5cXG4jaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogMTBzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLyogLS0tLS0tLSBNQUlOIC0tLS0tLS0gKi9cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA5MHN2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogLS0tLS0tLSBTSURFQkFSIC0tLS0tLS0gKi9cXG5cXG4jc2lkZS1iYXIge1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1nZW5lcmFsLXBhZGRpbmcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xcbn1cXG5cXG4jaG9tZS1jb250YWluZXIsXFxuI3Byb2plY3RzLWNvbnRhaW5lcixcXG4jcHJvamVjdHMtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE1MDtcXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLyogLS0tLS0tLSBUQVNLIERJU1BMQVkgLS0tLS0tLSAqL1xcblxcbiN0YXNrcy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1nZW5lcmFsLXBhZGRpbmcpO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4jdGFza3MtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4udGFzay1tYWluIHtcXG4gICAgcGFkZGluZzogdmFyKC0tdGFzay1wYWRkaW5nKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQgMTUwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWljb24ge1xcbiAgICB3aWR0aDogMS4zcmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi50YXNrLWFkZGl0aW9uYWwge1xcbiAgICBwYWRkaW5nOiB2YXIoLS10YXNrLXBhZGRpbmcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jb2xsYXBzZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5leHBhbmQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogLS0tLS0tLSBORVcgVEFTSyAtLS0tLS0tICovXFxuXFxuI25ldy10YXNrLWZvcm0ge1xcbiAgICBwYWRkaW5nOiB2YXIoLS10YXNrLXBhZGRpbmcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jbmV3LXRhc2stZm9ybS5jb2xsYXBzZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jbmV3LXRhc2stbWFpbi1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zaWRlYmFyLWdhcCk7XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZUN1cnJlbnRUYXNrcygpIHtcbiAgICBjb25zdCBjdXJyZW50VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gICAgY3VycmVudFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkTmV3VGFzaygpIHtcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZm9ybVwiKTtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stYWRkXCIpO1xuICAgIG5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuZXdUYXNrVGl0bGUsIG5ld1Rhc2tEZXNjcmlwdGlvbiwgbmV3VGFza0RhdGUsIG5ld1Rhc2tQcmlvcml0eSk7XG4gICAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPcHRpb24obmV3UHJvamVjdCkge1xuICAgIGNvbnN0IG5ld1Rhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IGNyZWF0ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgY3JlYXRlT3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIG5ld1Byb2plY3QuaWQpO1xuICAgIGNyZWF0ZU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBuZXdQcm9qZWN0Lm5hbWUpO1xuICAgIGNyZWF0ZU9wdGlvbi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QubmFtZVxuICAgIG5ld1Rhc2tQcm9qZWN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbilcbn1cblxuZnVuY3Rpb24gZ2V0VGFza1Byb2plY3QoaW5ib3gpIHtcbiAgICBjb25zdCBuZXdUYXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stcHJvamVjdFwiKS52YWx1ZTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGluYm94LnNob3dBbGxQcm9qZWN0cykge1xuICAgICAgICBpZiAobmV3VGFza1Byb2plY3QgPT09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0TmV3VGFza0Zvcm0oKSB7XG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIik7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWFkZFwiKTtcbiAgICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFZGl0VGFzayh0YXNrKSB7XG4gICAgdGFzay5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2stbmFtZVwiKS52YWx1ZTs7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIHRhc2suZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWRhdGVcIikudmFsdWU7XG4gICAgdGFzay5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xufVxuXG5leHBvcnQge1xuICAgIGRlbGV0ZUN1cnJlbnRUYXNrcyxcbiAgICBhZGROZXdUYXNrLFxuICAgIGNyZWF0ZU5ld1Rhc2ssXG4gICAgY3JlYXRlUHJvamVjdE9wdGlvbixcbiAgICBnZXRUYXNrUHJvamVjdCxcbiAgICByZXNldE5ld1Rhc2tGb3JtLFxuICAgIHN1Ym1pdEVkaXRUYXNrXG59IiwiaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL2ltYWdlcy9lZGl0X2ljb24uc3ZnXCI7XG5pbXBvcnQgbW92ZUljb24gZnJvbSBcIi4vaW1hZ2VzL21vdmVfaWNvbi5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2ltYWdlcy9kZWxldGVfaWNvbi5zdmdcIjtcblxuZnVuY3Rpb24gbG9hZFBhZ2UoaW5ib3gpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgaW5ib3guc2hvd1Rhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtZGlzcGxheVwiKS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRGl2KHRhc2spKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGl2KHRhc2spIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZClcblxuICAgIGNvbnN0IHRhc2tNYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza01haW5JbmZvLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1haW5cIik7XG5cbiAgICBjb25zdCB0YXNrTWFpbkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tNYWluTGVmdC5jbGFzc0xpc3QuYWRkKFwidGFzay1tYWluLWxlZnRcIik7XG4gICAgdGFza01haW5MZWZ0LnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuXG4gICAgY29uc3QgdGFza01haW5SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza01haW5SaWdodC5jbGFzc0xpc3QuYWRkKFwidGFzay1tYWluLXJpZ2h0XCIpO1xuICAgIHRhc2tNYWluUmlnaHQudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG5cbiAgICBjb25zdCBpY29uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWNvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2staWNvbnNcIik7XG4gICAgY29uc3QgbXlFZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15RWRpdEljb24uc3JjID0gZWRpdEljb247XG4gICAgbXlFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1pY29uXCIpO1xuICAgIG15RWRpdEljb24uY2xhc3NMaXN0LmFkZChcInRhc2staWNvblwiKTtcbiAgICBjb25zdCBteU1vdmVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbXlNb3ZlSWNvbi5zcmMgPSBtb3ZlSWNvbjtcbiAgICBteU1vdmVJY29uLmNsYXNzTGlzdC5hZGQoXCJtb3ZlLWljb25cIik7XG4gICAgbXlNb3ZlSWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pY29uXCIpO1xuICAgIGNvbnN0IG15RGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15RGVsZXRlSWNvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgIG15RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWljb25cIik7XG4gICAgbXlEZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25cIik7XG5cbiAgICBpY29uc0NvbnRhaW5lci5hcHBlbmQobXlFZGl0SWNvbiwgbXlNb3ZlSWNvbiwgbXlEZWxldGVJY29uKTtcblxuICAgIHRhc2tNYWluSW5mby5hcHBlbmQodGFza01haW5MZWZ0LCB0YXNrTWFpblJpZ2h0LCBpY29uc0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0YXNrQWRkaXRpb25hbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGRpdGlvbmFsSW5mby5jbGFzc0xpc3QuYWRkKFwidGFzay1hZGRpdGlvbmFsXCIpO1xuICAgIHRhc2tBZGRpdGlvbmFsSW5mby5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VcIik7XG4gICAgdGFza0FkZGl0aW9uYWxJbmZvLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBcbiAgICB0YXNrRGl2LmFwcGVuZCh0YXNrTWFpbkluZm8sIHRhc2tBZGRpdGlvbmFsSW5mbyk7XG5cbiAgICByZXR1cm4gdGFza0Rpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpdihwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYCR7cHJvamVjdC5pZH1gKVxuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICByZXR1cm4gcHJvamVjdERpdjtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sodGFzaykge1xuICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGVkaXRUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWZvcm1cIik7XG5cbiAgICBjb25zdCBlZGl0VGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWRpdFRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stbmFtZVwiKTtcbiAgICBlZGl0VGFza05hbWUudmFsdWUgPSB0YXNrLm5hbWU7XG5cbiAgICBjb25zdCBlZGl0VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGVkaXRUYXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1kZXNjcmlwdGlvblwiKTtcbiAgICBlZGl0VGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGVkaXRUYXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlZGl0VGFza0RhdGUuY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1kYXRlXCIpO1xuICAgIGVkaXRUYXNrRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBlZGl0VGFza0RhdGUudmFsdWUgPSB0YXNrLmRhdGU7XG5cbiAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBlZGl0VGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stcHJpb3JpdHlcIik7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRhc2tQcmlvcml0eSkge1xuICAgICAgICBjb25zdCBwcmlvcml0eUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBpZiAoaXRlbSA9PT0gdGFzay5wcmlvcml0eSkge1xuICAgICAgICAgICAgcHJpb3JpdHlJdGVtLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcHJpb3JpdHlJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgcHJpb3JpdHlJdGVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGl0ZW0pO1xuICAgICAgICBlZGl0VGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBlZGl0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0U3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgZWRpdFN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFzay1zdWJtaXRcIik7XG4gICAgZWRpdFN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XG4gICAgY29uc3QgZWRpdENhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdENhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgZWRpdFRhc2tCdXR0b25zLmFwcGVuZChlZGl0U3VibWl0QnV0dG9uLCBlZGl0Q2FuY2VsQnV0dG9uKTtcblxuICAgIGVkaXRUYXNrRm9ybS5hcHBlbmQoZWRpdFRhc2tOYW1lLCBlZGl0VGFza0Rlc2NyaXB0aW9uLCBlZGl0VGFza0RhdGUsIGVkaXRUYXNrUHJpb3JpdHksIGVkaXRUYXNrQnV0dG9ucyk7XG5cbiAgICByZXR1cm4gZWRpdFRhc2tGb3JtO1xufVxuXG5leHBvcnQgeyBsb2FkUGFnZSwgY3JlYXRlVGFza0RpdiwgY3JlYXRlUHJvamVjdERpdiwgZWRpdFRhc2sgfSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3QgPSBbXTtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2lkID0gXCJwcm9qZWN0X1wiICsgdXVpZHY0KCkuc2xpY2UoLTEyLCAtMSk7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgc2hvd1Rhc2tzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0aGlzLl9wcm9qZWN0KSB7XG4gICAgICAgICAgICBwcm9qZWN0VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvamVjdFRhc2tzO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLl9wcm9qZWN0LnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3Quc3BsaWNlKHRoaXMuX3Byb2plY3QuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgfVxufSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1dWlkdjQoKTtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGU7XG4gICAgfVxuXG4gICAgc2V0IGRhdGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwUHJvamVjdHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9hbGxQcm9qZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIGdldCBzaG93QWxsUHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxQcm9qZWN0cztcbiAgICB9XG5cbiAgICBnZXQgc2hvd1Byb2plY3RzTmFtZXMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzTmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzTmFtZXMucHVzaChwcm9qZWN0Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcHJvamVjdHNOYW1lcztcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5fYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5fYWxsUHJvamVjdHMuc3BsaWNlKHRoaXMuX2FsbFByb2plY3RzLmluZGV4T2YocHJvamVjdCksIDEpXG4gICAgfVxuXG4gICAgZ2V0IHNob3dUYXNrcygpIHtcbiAgICAgICAgY29uc3QgYWxsVGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy5fYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2hvd1Byb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBhbGxUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFsbFRhc2tzO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2sodGFzaykge1xuICAgICAgICB0aGlzLl9hbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgb25lVGFzayBvZiBwcm9qZWN0LnNob3dQcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uZVRhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vY3JlYXRlLXRhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgR3JvdXBQcm9qZWN0cyBmcm9tIFwiLi9ncm91cC1wcm9qZWN0c1wiO1xuaW1wb3J0IHsgbG9hZFBhZ2UsIGNyZWF0ZVByb2plY3REaXYsIGNyZWF0ZVRhc2tEaXYsIGVkaXRUYXNrIH0gZnJvbSBcIi4vY3JlYXRlLWRpc3BsYXlcIjtcbmltcG9ydCB7IGRlbGV0ZUN1cnJlbnRUYXNrcywgYWRkTmV3VGFzaywgY3JlYXRlTmV3VGFzaywgY3JlYXRlUHJvamVjdE9wdGlvbiwgZ2V0VGFza1Byb2plY3QsIHJlc2V0TmV3VGFza0Zvcm0sIHN1Ym1pdEVkaXRUYXNrIH0gZnJvbSBcIi4vRE9NLWZ1bmN0aW9uc1wiO1xuXG5jb25zdCB0YXNrMSA9IG5ldyBUYXNrKFwiZ3ltXCIsIFwiaW4gdGhlIG1vcm5pbmdcIiwgXCIyMDIzLTExLTAyXCIsIFwiSGlnaFwiKTtcbmNvbnN0IHRhc2syID0gbmV3IFRhc2soXCJwbGF5IGRpY2UgdGhyb25lXCIsIFwid2l0aCBEciBTdHJhbmdlXCIsIFwiMjAyMy0xMC0yMVwiLCBcIk1lZGl1bVwiKTtcbmNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QoXCJQcm9qZWN0IDFcIik7XG5jb25zdCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiUHJvamVjdCAyXCIpO1xuY29uc3QgaW5ib3ggPSBuZXcgR3JvdXBQcm9qZWN0cygpO1xuXG5cbnByb2plY3QxLmFkZFRhc2sodGFzazEpXG5wcm9qZWN0Mi5hZGRUYXNrKHRhc2syKVxuXG5pbmJveC5hZGRQcm9qZWN0KHByb2plY3QxKVxuaW5ib3guYWRkUHJvamVjdChwcm9qZWN0MilcblxubG9hZFBhZ2UoaW5ib3gpO1xuXG4vLyBJTkJPWCBCVVRUT05cbmNvbnN0IGluYm94QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKTtcbmluYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGVsZXRlQ3VycmVudFRhc2tzKCk7XG4gICAgY29uc3QgY2hlY2tQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgICBjaGVja1Byb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBpbmJveEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGluYm94LnNob3dUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0YXNrc0Rpc3BsYXkuYXBwZW5kKGNyZWF0ZVRhc2tEaXYodGFzaykpO1xuICAgIH0pXG59KVxuXG4vLyBQUk9KRUNUXG5jb25zdCBwcm9qZWN0c0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWRpc3BsYXlcIik7XG5wcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdERpdihwcm9qZWN0MSkpXG5wcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdERpdihwcm9qZWN0MikpXG5wcm9qZWN0c0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcbiAgICBjb25zb2xlLmxvZyhpbmJveC5zaG93QWxsUHJvamVjdHMpXG4gICAgcHJvamVjdHNEaXNwbGF5LmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGlmIChjaGlsZCAhPT0gZXZlbnQudGFyZ2V0ICYmIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBpbmJveC5zaG93QWxsUHJvamVjdHMpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkID09PSBwcm9qZWN0LmlkICYmICFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnNob3dQcm9qZWN0KVxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBkZWxldGVDdXJyZW50VGFza3MoKTtcbiAgICAgICAgICAgIHByb2plY3Quc2hvd1Byb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VUYXNrID0gY3JlYXRlVGFza0Rpdih0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrc0Rpc3BsYXkuYXBwZW5kQ2hpbGQoY2hhbmdlVGFzaylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59KSAgXG5cbi8vIERFTEVURSBQUk9KRUNUXG5cbi8vIE5FVyBQUk9KRUNUIEJVVFRPTlxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3RcIik7XG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xufSlcblxuZm9yIChsZXQgcHJvamVjdCBvZiBpbmJveC5zaG93QWxsUHJvamVjdHMpIHtcbiAgICBjcmVhdGVQcm9qZWN0T3B0aW9uKHByb2plY3QpXG59XG5cbi8vIFNVQk1JVCBORVcgUFJPSkVDVCBCVVRUT05cbmNvbnN0IHN1Ym1pdE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LXN1Ym1pdFwiKTtcbnN1Ym1pdE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LW5hbWVcIikudmFsdWU7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTtcbiAgICBpbmJveC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpXG4gICAgcHJvamVjdHNEaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3REaXYobmV3UHJvamVjdCkpO1xuICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xuICAgIG5ld1Byb2plY3RCdXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcblxuICAgIGNyZWF0ZVByb2plY3RPcHRpb24obmV3UHJvamVjdCk7XG59KVxuXG4vLyBUQVNLXG5jb25zdCB0YXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWRpc3BsYXlcIik7XG50YXNrc0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0YXNrLW1haW5cIikge1xuICAgICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwidGFzay1tYWluLWxlZnRcIiB8fCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInRhc2stbWFpbi1yaWdodFwiKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG4gICAgfVxufSlcblxuLy8gTkVXIFRBU0sgQlVUVE9OXG5jb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1hZGRcIik7XG5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkTmV3VGFzaygpO1xufSlcblxuLy8gU1VCTUlUIE5FVyBUQVNLIEJVVFRPTlxuY29uc3Qgc3VibWl0TmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stc3VibWl0XCIpO1xuc3VibWl0TmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlTmV3VGFzaygpO1xuICAgIGNvbnN0IG5ld1Rhc2tEaXNwbGF5ID0gY3JlYXRlVGFza0RpdihuZXdUYXNrKTtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBnZXRUYXNrUHJvamVjdChpbmJveCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmRhdGFzZXQuaWQgPT09IHNlbGVjdGVkUHJvamVjdC5pZCB8fCBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWRpc3BsYXlcIikuYXBwZW5kQ2hpbGQobmV3VGFza0Rpc3BsYXkpO1xuICAgIH1cbiAgICByZXNldE5ld1Rhc2tGb3JtKCk7XG59KVxuXG4vLyBERUxFVEUgVEFTS1xudGFza3NEaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtaWNvblwiKSkge1xuICAgICAgICBjb25zdCB0YXJnZXRlZFRhc2sgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgaW5ib3guc2hvd1Rhc2tzKSB7XG4gICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gdGFyZ2V0ZWRUYXNrLmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgaW5ib3guZGVsZXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRlZFRhc2sucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIGRlbGV0ZWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vIEVESVQgVEFTS1xudGFza3NEaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LWljb25cIikpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRUYXNrID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIGluYm94LnNob3dUYXNrcykge1xuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IHRhcmdldGVkVGFzay5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldGVkVGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiZWRpdGluZy10YXNrXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2submFtZSwgdGFzay5pZClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRlZFRhc2spXG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRpYWxvZ1wiKTtcbiAgICAgICAgICAgICAgICBlZGl0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLW5hbWVcIikudmFsdWUgPSB0YXNrLm5hbWU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stZGVzY3JpcHRpb25cIikudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRhdGVcIikudmFsdWUgPSB0YXNrLmRhdGU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stcHJpb3JpdHlcIikudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSlcblxuY29uc3QgZWRpdFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1zdWJtaXRcIik7XG5lZGl0VGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0aW5nLXRhc2tcIik7XG4gICAgZm9yIChsZXQgdGFzayBvZiBpbmJveC5zaG93VGFza3MpIHtcbiAgICAgICAgaWYgKHRhc2suaWQgPT09IHRhcmdldGVkVGFzay5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICAgICAgdGFzay5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRhdGVcIikudmFsdWU7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stcHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrRGl2ID0gY3JlYXRlVGFza0Rpdih0YXNrKTtcbiAgICAgICAgICAgIHRhc2tzRGlzcGxheS5yZXBsYWNlQ2hpbGQobmV3VGFza0RpdiwgdGFyZ2V0ZWRUYXNrKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJlZGl0LXRhc2stZGlhbG9nXCIpLmNsb3NlKClcbiAgICAgICAgfVxuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9