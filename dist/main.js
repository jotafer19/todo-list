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

.project > .project-icons {
    visibility: hidden
}

.project:hover > .project-icons {
    visibility: visible;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA,2BAA2B;;AAE3B;IACI,iBAAiB;IACjB,8BAA8B;AAClC;;AAEA,yBAAyB;;AAEzB;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA,4BAA4B;;AAE5B;IACI,gBAAgB;IAChB,gBAAgB;IAChB,+BAA+B;IAC/B,2BAA2B;IAC3B,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,2BAA2B;IAC3B,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI;AACJ;;AAEA;IACI,mBAAmB;AACvB;;;;AAIA,iCAAiC;;AAEjC;IACI,+BAA+B;IAC/B,OAAO;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,4CAA4C;IAC5C,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA,6BAA6B;;AAE7B;IACI,4BAA4B;IAC5B,aAAa;IACb,sCAAsC;IACtC,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC","sourcesContent":[":root {\n    --general-padding: 30px;\n    --sidebar-gap: 10px;\n    --task-padding: 6px 16px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    position: relative;\n}\n\n/* ------- HEADER ------- */\n\n#header {\n    min-height: 10svh;\n    background-color: antiquewhite;\n}\n\n/* ------- MAIN ------- */\n\n#main-container {\n    min-height: 90svh;\n    display: flex;\n}\n\n/* ------- SIDEBAR ------- */\n\n#side-bar {\n    min-width: 250px;\n    max-width: 300px;\n    padding: var(--general-padding);\n    background-color: aliceblue;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: var(--sidebar-gap);\n}\n\n#home-container,\n#projects-container,\n#projects-display {\n    display: flex;\n    flex-direction: column;\n    gap: var(--sidebar-gap);\n}\n\n.project {\n    cursor: pointer;\n    padding: 6px 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#new-project {\n    padding: 6px 10px;\n}\n\n#new-project:hover,\n.project:hover {\n    background-color: #4a4a4a50;\n    padding: 6px 10px;\n    border-radius: 4px;\n}\n\n.project > .project-icons {\n    visibility: hidden\n}\n\n.project:hover > .project-icons {\n    visibility: visible;\n}\n\n\n\n/* ------- TASK DISPLAY ------- */\n\n#tasks-container {\n    padding: var(--general-padding);\n    flex: 1;\n}\n\n#tasks-display {\n    display: flex;\n    flex-direction: column;\n    gap: var(--sidebar-gap);\n}\n\n.task {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.task-main {\n    padding: var(--task-padding);\n    display: grid;\n    grid-template-columns: 1fr min-content 150px;\n    border-bottom: 1px solid #d2d2d2;\n    cursor: pointer;\n}\n\n.task-icon {\n    width: 1.3rem;\n    height: auto;\n}\n\n.task-additional {\n    padding: var(--task-padding);\n    border: 1px solid #d2d2d2;\n    border-radius: 4px;\n}\n\n.collapse {\n    display: none;\n}\n\n.expand {\n    display: block;\n}\n\n/* ------- NEW TASK ------- */\n\n#new-task-form {\n    padding: var(--task-padding);\n    display: grid;\n    grid-template-columns: 1fr min-content;\n    gap: 16px;\n}\n\n#new-task-form.collapse {\n    display: none;\n}\n\n.hide {\n    visibility: hidden;\n}\n\n#new-task-main-info {\n    display: flex;\n    flex-direction: column;\n    gap: var(--sidebar-gap);\n}\n\ndialog {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}"],"sourceRoot":""}]);
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
/* harmony export */   getEditingTask: () => (/* binding */ getEditingTask),
/* harmony export */   getStorageProject: () => (/* binding */ getStorageProject),
/* harmony export */   getTaskProject: () => (/* binding */ getTaskProject),
/* harmony export */   resetNewTaskForm: () => (/* binding */ resetNewTaskForm)
/* harmony export */ });
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");
/* harmony import */ var _create_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-display */ "./src/create-display.js");



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
    if (!document.querySelector("#inbox").classList.contains("active")) {
        const allOptions = document.querySelectorAll("#new-task-project > option");
        allOptions.forEach(option => {
            if (option.value === document.querySelector(".active").getAttribute("data-id")) {
                option.setAttribute("selected", "selected")
            }
        })
    }
}

function createNewTask() {
    const newTaskTitle = document.querySelector("#new-task-title").value;
    const newTaskDescription = document.querySelector("#new-task-description").value;
    const newTaskDate = document.querySelector("#new-task-date").value;
    const newTaskPriority = document.querySelector("#new-task-priority").value;
    const newTaskProject = document.querySelector("#new-task-project").value;
    const newTask = new _create_task__WEBPACK_IMPORTED_MODULE_0__["default"](newTaskTitle, newTaskDescription, newTaskDate, newTaskPriority, newTaskProject);
    console.log(newTask)
    return newTask;
}

function createProjectOption(newProject) {
    const newTaskProject = document.querySelector("#new-task-project");
    const createOption = document.createElement("option");
    createOption.setAttribute("value", newProject.id);
    createOption.textContent = newProject.name
    newTaskProject.appendChild(createOption)
}

function getTaskProject(inbox, task) {
    for (let project of inbox.showAllProjects) {
        if (project.id === task.project) {
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

function getStorageProject(inbox, task) {
    for (let project of inbox.showAllProjects) {
        if (project.showProject.includes(task)) {
            return project;
        }
    }
}

function getEditingTask(inbox) {
    const editingTaskDiv = document.querySelector(".editing-task");
    for (let task of inbox.showTasks) {
        if (task.id === editingTaskDiv.getAttribute("id")) {
            return task;
        }
    }
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
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _images_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/edit_icon.svg */ "./src/images/edit_icon.svg");
/* harmony import */ var _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/delete_icon.svg */ "./src/images/delete_icon.svg");



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
    const myDeleteIcon = new Image();
    myDeleteIcon.src = _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    myDeleteIcon.classList.add("delete-icon");
    myDeleteIcon.classList.add("task-icon");

    iconsContainer.append(myEditIcon, myDeleteIcon);

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
    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("project-icons");
    const myEditIcon = new Image();
    myEditIcon.src = _images_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
    myEditIcon.classList.add("edit-icon");
    myEditIcon.classList.add("project-icon");
    const myDeleteIcon = new Image();
    myDeleteIcon.src = _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    myDeleteIcon.classList.add("delete-icon");
    myDeleteIcon.classList.add("project-icon");
    iconsContainer.append(myEditIcon, myDeleteIcon);
    projectDiv.appendChild(iconsContainer);

    return projectDiv;
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
    constructor(name, description, date, priority, project) {
        this._id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this._name = name;
        this._description = description;
        this._date = date;
        this._priority = priority;
        this._project = project;
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

    get project() {
        return this._project;
    }

    set project(value) {
        return this._project = value;
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








const project1 = new _create_project__WEBPACK_IMPORTED_MODULE_2__["default"]("Project 1");
const project2 = new _create_project__WEBPACK_IMPORTED_MODULE_2__["default"]("Project 2");
const task1 = new _create_task__WEBPACK_IMPORTED_MODULE_1__["default"]("gym", "in the morning", "2023-11-02", "High", project1.id);
const task2 = new _create_task__WEBPACK_IMPORTED_MODULE_1__["default"]("play dice throne", "with Dr Strange", "2023-10-21", "Medium", project2.id);
console.log(task1)

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
    if (document.querySelector("#inbox").classList.contains("active")) {
        document.querySelector("#inbox").classList.toggle("active");
    }
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
projectsDisplay.addEventListener("click", event => {
    if (event.target.classList.contains("delete-icon")) {
        const targetedProject = event.target.parentElement.parentElement;
        for (let project of inbox.showAllProjects) {
            if (project.id === targetedProject.dataset.id) {
                inbox.deleteProject(project);
                targetedProject.remove();
                console.log(inbox.showAllProjects)
                console.log(inbox.showTasks)
                ;(0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.deleteCurrentTasks)();
                inboxButton.classList.toggle("active");
                inbox.showTasks.forEach(task => {
                    tasksDisplay.append((0,_create_display__WEBPACK_IMPORTED_MODULE_4__.createTaskDiv)(task));
                })
            }
        }
    }
})
// NEW PROJECT BUTTON
const newProjectButton = document.querySelector("#new-project");
newProjectButton.addEventListener("click", () => {
    newProjectButton.classList.toggle("collapse");
    newProjectButton.nextElementSibling.classList.toggle("collapse");
})

for (let project of inbox.showAllProjects) {
    ;(0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.createProjectOption)(project)
    const newProjectOption = document.createElement("option");
    newProjectOption.setAttribute("value", project.id);
    newProjectOption.textContent = project.name;
    document.querySelector("#edit-task-project").appendChild(newProjectOption)
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
    const newProjectOption = document.createElement("option");
    newProjectOption.setAttribute("value", newProject.name);
    newProjectOption.textContent = newProject.name;
    document.querySelector("#edit-task-project").appendChild(newProjectOption)
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
    const selectedProject = (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.getTaskProject)(inbox, newTask);
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
        const targetedTaskDiv = event.target.parentElement.parentElement.parentElement;
        for (let task of inbox.showTasks) {
            if (task.id === targetedTaskDiv.getAttribute("id")) {
                const editDialog = document.querySelector("#edit-task-dialog");
                targetedTaskDiv.classList.toggle("editing-task");
                editDialog.showModal();
                document.querySelector("#edit-task-name").value = task.name;
                document.querySelector("#edit-task-description").value = task.description;
                document.querySelector("#edit-task-date").value = task.date;
                document.querySelector("#edit-task-priority").value = task.priority;
                document.querySelector("#edit-task-project").value = (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.getStorageProject)(inbox, task).id;
            }
        }
    }
})

function newProjectStorage(myNewStorage) {
    for (let project of inbox.showAllProjects) {
        if (project.id === myNewStorage) {
            return project;
        }
    }
}

const editTaskSubmitButton = document.querySelector("#edit-task-submit");
editTaskSubmitButton.addEventListener("click", event => {
    event.preventDefault();
    const editingTask = (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.getEditingTask)(inbox);
    const originalProject = (0,_DOM_functions__WEBPACK_IMPORTED_MODULE_5__.getStorageProject)(inbox, editingTask)
    const newProject = newProjectStorage(document.querySelector("#edit-task-project").value);
    if (newProject !== originalProject) {
        originalProject.deleteTask(editingTask);
        newProject.addTask(editingTask);
        console.log(editingTask)
    }
    editingTask.name = document.querySelector("#edit-task-name").value;
    editingTask.description = document.querySelector("#edit-task-description").value;
    editingTask.date = document.querySelector("#edit-task-date").value;
    editingTask.priority = document.querySelector("#edit-task-priority").value;
    editingTask.project = document.querySelector("#edit-task-project").value;
    console.log(editingTask)
    if (document.querySelector("#inbox").classList.contains("active") || 
    document.querySelector(".project.active").dataset.id === editingTask.project) {
        const editingTaskDiv = (0,_create_display__WEBPACK_IMPORTED_MODULE_4__.createTaskDiv)(editingTask);
        document.querySelector(".editing-task").replaceWith(editingTaskDiv);
    } else if (document.querySelector(".project.active").dataset.id !== editingTask.project) {
        document.querySelector(".editing-task").remove()
    }
    document.querySelector("#edit-task-dialog").close();
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ3JvdXAtcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1nZW5lcmFsLXBhZGRpbmc6IDMwcHg7XG4gICAgLS1zaWRlYmFyLWdhcDogMTBweDtcbiAgICAtLXRhc2stcGFkZGluZzogNnB4IDE2cHg7XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogLS0tLS0tLSBIRUFERVIgLS0tLS0tLSAqL1xuXG4jaGVhZGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMHN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG5cbi8qIC0tLS0tLS0gTUFJTiAtLS0tLS0tICovXG5cbiNtYWluLWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogOTBzdmg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyogLS0tLS0tLSBTSURFQkFSIC0tLS0tLS0gKi9cblxuI3NpZGUtYmFyIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogdmFyKC0tZ2VuZXJhbC1wYWRkaW5nKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zaWRlYmFyLWdhcCk7XG59XG5cbiNob21lLWNvbnRhaW5lcixcbiNwcm9qZWN0cy1jb250YWluZXIsXG4jcHJvamVjdHMtZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xufVxuXG4ucHJvamVjdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNuZXctcHJvamVjdCB7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG59XG5cbiNuZXctcHJvamVjdDpob3Zlcixcbi5wcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhNTA7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucHJvamVjdCA+IC5wcm9qZWN0LWljb25zIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW5cbn1cblxuLnByb2plY3Q6aG92ZXIgPiAucHJvamVjdC1pY29ucyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuXG5cbi8qIC0tLS0tLS0gVEFTSyBESVNQTEFZIC0tLS0tLS0gKi9cblxuI3Rhc2tzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogdmFyKC0tZ2VuZXJhbC1wYWRkaW5nKTtcbiAgICBmbGV4OiAxO1xufVxuXG4jdGFza3MtZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xufVxuXG4udGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xufVxuXG4udGFzay1tYWluIHtcbiAgICBwYWRkaW5nOiB2YXIoLS10YXNrLXBhZGRpbmcpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQgMTUwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1pY29uIHtcbiAgICB3aWR0aDogMS4zcmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnRhc2stYWRkaXRpb25hbCB7XG4gICAgcGFkZGluZzogdmFyKC0tdGFzay1wYWRkaW5nKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZXhwYW5kIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogLS0tLS0tLSBORVcgVEFTSyAtLS0tLS0tICovXG5cbiNuZXctdGFzay1mb3JtIHtcbiAgICBwYWRkaW5nOiB2YXIoLS10YXNrLXBhZGRpbmcpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAxNnB4O1xufVxuXG4jbmV3LXRhc2stZm9ybS5jb2xsYXBzZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI25ldy10YXNrLW1haW4taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xufVxuXG5kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSwyQkFBMkI7O0FBRTNCO0lBQ0ksaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQzs7QUFFQSx5QkFBeUI7O0FBRXpCO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUEsNEJBQTRCOztBQUU1QjtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7Ozs7QUFJQSxpQ0FBaUM7O0FBRWpDO0lBQ0ksK0JBQStCO0lBQy9CLE9BQU87QUFDWDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSw2QkFBNkI7O0FBRTdCO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1nZW5lcmFsLXBhZGRpbmc6IDMwcHg7XFxuICAgIC0tc2lkZWJhci1nYXA6IDEwcHg7XFxuICAgIC0tdGFzay1wYWRkaW5nOiA2cHggMTZweDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogLS0tLS0tLSBIRUFERVIgLS0tLS0tLSAqL1xcblxcbiNoZWFkZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMHN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4vKiAtLS0tLS0tIE1BSU4gLS0tLS0tLSAqL1xcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDkwc3ZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiAtLS0tLS0tIFNJREVCQVIgLS0tLS0tLSAqL1xcblxcbiNzaWRlLWJhciB7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IHZhcigtLWdlbmVyYWwtcGFkZGluZyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zaWRlYmFyLWdhcCk7XFxufVxcblxcbiNob21lLWNvbnRhaW5lcixcXG4jcHJvamVjdHMtY29udGFpbmVyLFxcbiNwcm9qZWN0cy1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zaWRlYmFyLWdhcCk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXByb2plY3Qge1xcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0OmhvdmVyLFxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTUwO1xcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ucHJvamVjdCA+IC5wcm9qZWN0LWljb25zIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuXFxufVxcblxcbi5wcm9qZWN0OmhvdmVyID4gLnByb2plY3QtaWNvbnMge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5cXG5cXG4vKiAtLS0tLS0tIFRBU0sgRElTUExBWSAtLS0tLS0tICovXFxuXFxuI3Rhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IHZhcigtLWdlbmVyYWwtcGFkZGluZyk7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbiN0YXNrcy1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zaWRlYmFyLWdhcCk7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50YXNrLW1haW4ge1xcbiAgICBwYWRkaW5nOiB2YXIoLS10YXNrLXBhZGRpbmcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudCAxNTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staWNvbiB7XFxuICAgIHdpZHRoOiAxLjNyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnRhc2stYWRkaXRpb25hbCB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXRhc2stcGFkZGluZyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNvbGxhcHNlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmV4cGFuZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiAtLS0tLS0tIE5FVyBUQVNLIC0tLS0tLS0gKi9cXG5cXG4jbmV3LXRhc2stZm9ybSB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXRhc2stcGFkZGluZyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbiNuZXctdGFzay1mb3JtLmNvbGxhcHNlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNuZXctdGFzay1tYWluLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNpZGViYXItZ2FwKTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vY3JlYXRlLXRhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tEaXYgfSBmcm9tIFwiLi9jcmVhdGUtZGlzcGxheVwiO1xuXG5mdW5jdGlvbiBkZWxldGVDdXJyZW50VGFza3MoKSB7XG4gICAgY29uc3QgY3VycmVudFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICAgIGN1cnJlbnRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIik7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWFkZFwiKTtcbiAgICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25ldy10YXNrLXByb2plY3QgPiBvcHRpb25cIik7XG4gICAgICAgIGFsbE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Rhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1wcm9qZWN0XCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuZXdUYXNrVGl0bGUsIG5ld1Rhc2tEZXNjcmlwdGlvbiwgbmV3VGFza0RhdGUsIG5ld1Rhc2tQcmlvcml0eSwgbmV3VGFza1Byb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spXG4gICAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPcHRpb24obmV3UHJvamVjdCkge1xuICAgIGNvbnN0IG5ld1Rhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IGNyZWF0ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgY3JlYXRlT3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG5ld1Byb2plY3QuaWQpO1xuICAgIGNyZWF0ZU9wdGlvbi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QubmFtZVxuICAgIG5ld1Rhc2tQcm9qZWN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbilcbn1cblxuZnVuY3Rpb24gZ2V0VGFza1Byb2plY3QoaW5ib3gsIHRhc2spIHtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGluYm94LnNob3dBbGxQcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gdGFzay5wcm9qZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzZXROZXdUYXNrRm9ybSgpIHtcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZm9ybVwiKTtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stYWRkXCIpO1xuICAgIG5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xuICAgIG5ld1Rhc2tGb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGdldFN0b3JhZ2VQcm9qZWN0KGluYm94LCB0YXNrKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBpbmJveC5zaG93QWxsUHJvamVjdHMpIHtcbiAgICAgICAgaWYgKHByb2plY3Quc2hvd1Byb2plY3QuaW5jbHVkZXModGFzaykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRFZGl0aW5nVGFzayhpbmJveCkge1xuICAgIGNvbnN0IGVkaXRpbmdUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0aW5nLXRhc2tcIik7XG4gICAgZm9yIChsZXQgdGFzayBvZiBpbmJveC5zaG93VGFza3MpIHtcbiAgICAgICAgaWYgKHRhc2suaWQgPT09IGVkaXRpbmdUYXNrRGl2LmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBkZWxldGVDdXJyZW50VGFza3MsXG4gICAgYWRkTmV3VGFzayxcbiAgICBjcmVhdGVOZXdUYXNrLFxuICAgIGNyZWF0ZVByb2plY3RPcHRpb24sXG4gICAgZ2V0VGFza1Byb2plY3QsXG4gICAgcmVzZXROZXdUYXNrRm9ybSxcbiAgICBnZXRTdG9yYWdlUHJvamVjdCxcbiAgICBnZXRFZGl0aW5nVGFzayxcbn0iLCJpbXBvcnQgZWRpdEljb24gZnJvbSBcIi4vaW1hZ2VzL2VkaXRfaWNvbi5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2ltYWdlcy9kZWxldGVfaWNvbi5zdmdcIjtcblxuZnVuY3Rpb24gbG9hZFBhZ2UoaW5ib3gpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgaW5ib3guc2hvd1Rhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtZGlzcGxheVwiKS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRGl2KHRhc2spKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGl2KHRhc2spIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZClcblxuICAgIGNvbnN0IHRhc2tNYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza01haW5JbmZvLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1haW5cIik7XG5cbiAgICBjb25zdCB0YXNrTWFpbkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tNYWluTGVmdC5jbGFzc0xpc3QuYWRkKFwidGFzay1tYWluLWxlZnRcIik7XG4gICAgdGFza01haW5MZWZ0LnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuXG4gICAgY29uc3QgdGFza01haW5SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza01haW5SaWdodC5jbGFzc0xpc3QuYWRkKFwidGFzay1tYWluLXJpZ2h0XCIpO1xuICAgIHRhc2tNYWluUmlnaHQudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG5cbiAgICBjb25zdCBpY29uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWNvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2staWNvbnNcIik7XG4gICAgY29uc3QgbXlFZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15RWRpdEljb24uc3JjID0gZWRpdEljb247XG4gICAgbXlFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1pY29uXCIpO1xuICAgIG15RWRpdEljb24uY2xhc3NMaXN0LmFkZChcInRhc2staWNvblwiKTtcbiAgICBjb25zdCBteURlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBteURlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICBteURlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1pY29uXCIpO1xuICAgIG15RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pY29uXCIpO1xuXG4gICAgaWNvbnNDb250YWluZXIuYXBwZW5kKG15RWRpdEljb24sIG15RGVsZXRlSWNvbik7XG5cbiAgICB0YXNrTWFpbkluZm8uYXBwZW5kKHRhc2tNYWluTGVmdCwgdGFza01haW5SaWdodCwgaWNvbnNDb250YWluZXIpO1xuXG4gICAgY29uc3QgdGFza0FkZGl0aW9uYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkaXRpb25hbEluZm8uY2xhc3NMaXN0LmFkZChcInRhc2stYWRkaXRpb25hbFwiKTtcbiAgICB0YXNrQWRkaXRpb25hbEluZm8uY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlXCIpO1xuICAgIHRhc2tBZGRpdGlvbmFsSW5mby50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgXG4gICAgdGFza0Rpdi5hcHBlbmQodGFza01haW5JbmZvLCB0YXNrQWRkaXRpb25hbEluZm8pO1xuXG4gICAgcmV0dXJuIHRhc2tEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaXYocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGAke3Byb2plY3QuaWR9YClcbiAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIGNvbnN0IGljb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpY29uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uc1wiKTtcbiAgICBjb25zdCBteUVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbXlFZGl0SWNvbi5zcmMgPSBlZGl0SWNvbjtcbiAgICBteUVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWljb25cIik7XG4gICAgbXlFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xuICAgIGNvbnN0IG15RGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15RGVsZXRlSWNvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgIG15RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWljb25cIik7XG4gICAgbXlEZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XG4gICAgaWNvbnNDb250YWluZXIuYXBwZW5kKG15RWRpdEljb24sIG15RGVsZXRlSWNvbik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChpY29uc0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gcHJvamVjdERpdjtcbn1cblxuZXhwb3J0IHsgbG9hZFBhZ2UsIGNyZWF0ZVRhc2tEaXYsIGNyZWF0ZVByb2plY3REaXYgfSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3QgPSBbXTtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2lkID0gXCJwcm9qZWN0X1wiICsgdXVpZHY0KCkuc2xpY2UoLTEyLCAtMSk7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgc2hvd1Rhc2tzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0aGlzLl9wcm9qZWN0KSB7XG4gICAgICAgICAgICBwcm9qZWN0VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvamVjdFRhc2tzO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLl9wcm9qZWN0LnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3Quc3BsaWNlKHRoaXMuX3Byb2plY3QuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgfVxufSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1dWlkdjQoKTtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICAgIH1cblxuICAgIHNldCBkYXRlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgICB9XG5cbiAgICBzZXQgcHJvamVjdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdCA9IHZhbHVlO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cFByb2plY3RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fYWxsUHJvamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgc2hvd0FsbFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWxsUHJvamVjdHM7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dQcm9qZWN0c05hbWVzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c05hbWVzID0gW107XG4gICAgICAgIHRoaXMuX2FsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c05hbWVzLnB1c2gocHJvamVjdC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb2plY3RzTmFtZXM7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX2FsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX2FsbFByb2plY3RzLnNwbGljZSh0aGlzLl9hbGxQcm9qZWN0cy5pbmRleE9mKHByb2plY3QpLCAxKVxuICAgIH1cblxuICAgIGdldCBzaG93VGFza3MoKSB7XG4gICAgICAgIGNvbnN0IGFsbFRhc2tzID0gW107XG4gICAgICAgIHRoaXMuX2FsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnNob3dQcm9qZWN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgYWxsVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhbGxUYXNrcztcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy5fYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IG9uZVRhc2sgb2YgcHJvamVjdC5zaG93UHJvamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvbmVUYXNrID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuaW1wb3J0IEdyb3VwUHJvamVjdHMgZnJvbSBcIi4vZ3JvdXAtcHJvamVjdHNcIjtcbmltcG9ydCB7IGxvYWRQYWdlLCBjcmVhdGVQcm9qZWN0RGl2LCBjcmVhdGVUYXNrRGl2IH0gZnJvbSBcIi4vY3JlYXRlLWRpc3BsYXlcIjtcbmltcG9ydCB7IGRlbGV0ZUN1cnJlbnRUYXNrcywgYWRkTmV3VGFzaywgY3JlYXRlTmV3VGFzaywgY3JlYXRlUHJvamVjdE9wdGlvbiwgZ2V0VGFza1Byb2plY3QsIHJlc2V0TmV3VGFza0Zvcm0sIGdldFN0b3JhZ2VQcm9qZWN0LCBnZXRFZGl0aW5nVGFzayB9IGZyb20gXCIuL0RPTS1mdW5jdGlvbnNcIjtcblxuXG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KFwiUHJvamVjdCAxXCIpO1xuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdChcIlByb2plY3QgMlwiKTtcbmNvbnN0IHRhc2sxID0gbmV3IFRhc2soXCJneW1cIiwgXCJpbiB0aGUgbW9ybmluZ1wiLCBcIjIwMjMtMTEtMDJcIiwgXCJIaWdoXCIsIHByb2plY3QxLmlkKTtcbmNvbnN0IHRhc2syID0gbmV3IFRhc2soXCJwbGF5IGRpY2UgdGhyb25lXCIsIFwid2l0aCBEciBTdHJhbmdlXCIsIFwiMjAyMy0xMC0yMVwiLCBcIk1lZGl1bVwiLCBwcm9qZWN0Mi5pZCk7XG5jb25zb2xlLmxvZyh0YXNrMSlcblxuY29uc3QgaW5ib3ggPSBuZXcgR3JvdXBQcm9qZWN0cygpO1xuXG5cbnByb2plY3QxLmFkZFRhc2sodGFzazEpXG5wcm9qZWN0Mi5hZGRUYXNrKHRhc2syKVxuXG5pbmJveC5hZGRQcm9qZWN0KHByb2plY3QxKVxuaW5ib3guYWRkUHJvamVjdChwcm9qZWN0MilcblxubG9hZFBhZ2UoaW5ib3gpO1xuXG4vLyBJTkJPWCBCVVRUT05cbmNvbnN0IGluYm94QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKTtcbmluYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGVsZXRlQ3VycmVudFRhc2tzKCk7XG4gICAgY29uc3QgY2hlY2tQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgICBjaGVja1Byb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBpbmJveEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGluYm94LnNob3dUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0YXNrc0Rpc3BsYXkuYXBwZW5kKGNyZWF0ZVRhc2tEaXYodGFzaykpO1xuICAgIH0pXG59KVxuXG4vLyBQUk9KRUNUXG5jb25zdCBwcm9qZWN0c0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWRpc3BsYXlcIik7XG5wcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdERpdihwcm9qZWN0MSkpXG5wcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdERpdihwcm9qZWN0MikpXG5wcm9qZWN0c0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIHByb2plY3RzRGlzcGxheS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAoY2hpbGQgIT09IGV2ZW50LnRhcmdldCAmJiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgaW5ib3guc2hvd0FsbFByb2plY3RzKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC5pZCA9PT0gcHJvamVjdC5pZCAmJiAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC5zaG93UHJvamVjdClcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgZGVsZXRlQ3VycmVudFRhc2tzKCk7XG4gICAgICAgICAgICBwcm9qZWN0LnNob3dQcm9qZWN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlVGFzayA9IGNyZWF0ZVRhc2tEaXYodGFzayk7XG4gICAgICAgICAgICAgICAgdGFza3NEaXNwbGF5LmFwcGVuZENoaWxkKGNoYW5nZVRhc2spXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSkgIFxuXG4vLyBERUxFVEUgUFJPSkVDVFxucHJvamVjdHNEaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtaWNvblwiKSkge1xuICAgICAgICBjb25zdCB0YXJnZXRlZFByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGluYm94LnNob3dBbGxQcm9qZWN0cykge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHRhcmdldGVkUHJvamVjdC5kYXRhc2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgaW5ib3guZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB0YXJnZXRlZFByb2plY3QucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5ib3guc2hvd0FsbFByb2plY3RzKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluYm94LnNob3dUYXNrcylcbiAgICAgICAgICAgICAgICBkZWxldGVDdXJyZW50VGFza3MoKTtcbiAgICAgICAgICAgICAgICBpbmJveEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGluYm94LnNob3dUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YXNrc0Rpc3BsYXkuYXBwZW5kKGNyZWF0ZVRhc2tEaXYodGFzaykpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuLy8gTkVXIFBST0pFQ1QgQlVUVE9OXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdFwiKTtcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG59KVxuXG5mb3IgKGxldCBwcm9qZWN0IG9mIGluYm94LnNob3dBbGxQcm9qZWN0cykge1xuICAgIGNyZWF0ZVByb2plY3RPcHRpb24ocHJvamVjdClcbiAgICBjb25zdCBuZXdQcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBuZXdQcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3QuaWQpO1xuICAgIG5ld1Byb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stcHJvamVjdFwiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0T3B0aW9uKVxufVxuXG4vLyBTVUJNSVQgTkVXIFBST0pFQ1QgQlVUVE9OXG5jb25zdCBzdWJtaXROZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1zdWJtaXRcIik7XG5zdWJtaXROZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1uYW1lXCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7XG4gICAgaW5ib3guYWRkUHJvamVjdChuZXdQcm9qZWN0KVxuICAgIHByb2plY3RzRGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RGl2KG5ld1Byb2plY3QpKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG5cbiAgICBjcmVhdGVQcm9qZWN0T3B0aW9uKG5ld1Byb2plY3QpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG5ld1Byb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgbmV3UHJvamVjdC5uYW1lKTtcbiAgICBuZXdQcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5uYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLXByb2plY3RcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdE9wdGlvbilcbn0pXG5cbi8vIFRBU0tcbmNvbnN0IHRhc2tzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtZGlzcGxheVwiKTtcbnRhc2tzRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInRhc2stbWFpblwiKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0YXNrLW1haW4tbGVmdFwiIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwidGFzay1tYWluLXJpZ2h0XCIpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICB9XG59KVxuXG4vLyBORVcgVEFTSyBCVVRUT05cbmNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWFkZFwiKTtcbm5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGROZXdUYXNrKCk7XG59KVxuXG4vLyBTVUJNSVQgTkVXIFRBU0sgQlVUVE9OXG5jb25zdCBzdWJtaXROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1zdWJtaXRcIik7XG5zdWJtaXROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVOZXdUYXNrKCk7XG4gICAgY29uc3QgbmV3VGFza0Rpc3BsYXkgPSBjcmVhdGVUYXNrRGl2KG5ld1Rhc2spO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGdldFRhc2tQcm9qZWN0KGluYm94LCBuZXdUYXNrKTtcbiAgICBzZWxlY3RlZFByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuZGF0YXNldC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0LmlkIHx8IFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtZGlzcGxheVwiKS5hcHBlbmRDaGlsZChuZXdUYXNrRGlzcGxheSk7XG4gICAgfVxuICAgIHJlc2V0TmV3VGFza0Zvcm0oKTtcbn0pXG5cbi8vIERFTEVURSBUQVNLXG50YXNrc0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1pY29uXCIpKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkVGFzayA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBpbmJveC5zaG93VGFza3MpIHtcbiAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSB0YXJnZXRlZFRhc2suZ2V0QXR0cmlidXRlKFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICBpbmJveC5kZWxldGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIHRhcmdldGVkVGFzay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgZGVsZXRlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8gRURJVCBUQVNLXG50YXNrc0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXQtaWNvblwiKSkge1xuICAgICAgICBjb25zdCB0YXJnZXRlZFRhc2tEaXYgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgaW5ib3guc2hvd1Rhc2tzKSB7XG4gICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gdGFyZ2V0ZWRUYXNrRGl2LmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRpYWxvZ1wiKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRlZFRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImVkaXRpbmctdGFza1wiKTtcbiAgICAgICAgICAgICAgICBlZGl0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLW5hbWVcIikudmFsdWUgPSB0YXNrLm5hbWU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stZGVzY3JpcHRpb25cIikudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRhdGVcIikudmFsdWUgPSB0YXNrLmRhdGU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stcHJpb3JpdHlcIikudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLXByb2plY3RcIikudmFsdWUgPSBnZXRTdG9yYWdlUHJvamVjdChpbmJveCwgdGFzaykuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0U3RvcmFnZShteU5ld1N0b3JhZ2UpIHtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGluYm94LnNob3dBbGxQcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gbXlOZXdTdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgZWRpdFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1zdWJtaXRcIik7XG5lZGl0VGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZWRpdGluZ1Rhc2sgPSBnZXRFZGl0aW5nVGFzayhpbmJveCk7XG4gICAgY29uc3Qgb3JpZ2luYWxQcm9qZWN0ID0gZ2V0U3RvcmFnZVByb2plY3QoaW5ib3gsIGVkaXRpbmdUYXNrKVxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXdQcm9qZWN0U3RvcmFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1wcm9qZWN0XCIpLnZhbHVlKTtcbiAgICBpZiAobmV3UHJvamVjdCAhPT0gb3JpZ2luYWxQcm9qZWN0KSB7XG4gICAgICAgIG9yaWdpbmFsUHJvamVjdC5kZWxldGVUYXNrKGVkaXRpbmdUYXNrKTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRUYXNrKGVkaXRpbmdUYXNrKTtcbiAgICAgICAgY29uc29sZS5sb2coZWRpdGluZ1Rhc2spXG4gICAgfVxuICAgIGVkaXRpbmdUYXNrLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1uYW1lXCIpLnZhbHVlO1xuICAgIGVkaXRpbmdUYXNrLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgZWRpdGluZ1Rhc2suZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRhdGVcIikudmFsdWU7XG4gICAgZWRpdGluZ1Rhc2sucHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1wcmlvcml0eVwiKS52YWx1ZTtcbiAgICBlZGl0aW5nVGFzay5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stcHJvamVjdFwiKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhlZGl0aW5nVGFzaylcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgfHwgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LmFjdGl2ZVwiKS5kYXRhc2V0LmlkID09PSBlZGl0aW5nVGFzay5wcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGVkaXRpbmdUYXNrRGl2ID0gY3JlYXRlVGFza0RpdihlZGl0aW5nVGFzayk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdGluZy10YXNrXCIpLnJlcGxhY2VXaXRoKGVkaXRpbmdUYXNrRGl2KTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC5hY3RpdmVcIikuZGF0YXNldC5pZCAhPT0gZWRpdGluZ1Rhc2sucHJvamVjdCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRpbmctdGFza1wiKS5yZW1vdmUoKVxuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1kaWFsb2dcIikuY2xvc2UoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9