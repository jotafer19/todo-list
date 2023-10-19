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
    if (document.querySelector("#inbox").classList.contains("active") && !event.target.classList.contains("edit-icon")) {
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

// EDIT PROJECT
projectsDisplay.addEventListener("click", event => {
    if (event.target.classList.contains("edit-icon")) {
        const targetedProject = event.target.parentElement.parentElement;
        for (let project of inbox.showAllProjects) {
            if (project.id === targetedProject.getAttribute("data-id")) {
                const editProjectForm = document.querySelector("#edit-project-form");
                document.querySelector("#edit-project-name").value = project.name
                editProjectForm.classList.toggle("collapse")
                targetedProject.classList.toggle("collapse")
                targetedProject.classList.toggle("editing-project")
                projectsDisplay.insertBefore(editProjectForm, targetedProject)
            }
        }
    }
})

const editProjectSubmitButton = document.querySelector("#edit-project-submit");
editProjectSubmitButton.addEventListener("click", event => {
    event.preventDefault();
    const editProjectForm = document.querySelector("#edit-project-form");
    const editingProject = document.querySelector(".editing-project");
    for (let project of inbox.showAllProjects) {
        if (project.id === editingProject.dataset.id) {
            project.name = document.querySelector("#edit-project-name").value;
            editingProject.textContent = project.name;
            editProjectForm.classList.toggle("collapse")
            editingProject.classList.toggle("collapse")
            editingProject.classList.toggle("editing-project")

            document.querySelectorAll("#new-task-project > option").forEach(option => {
                if (option.value === project.id) {
                    option.textContent = project.name
                }
            })

            document.querySelectorAll("#edit-task-project > option").forEach(option => {
                if (option.value === project.id) {
                    option.textContent = project.name
                }
            })
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
    document.querySelector("#new-project-form").reset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOERBQWM7QUFDdEMsNEJBQTRCLGlFQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhEQUFhO0FBQzVDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS1kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dyb3VwLXByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZ2VuZXJhbC1wYWRkaW5nOiAzMHB4O1xuICAgIC0tc2lkZWJhci1nYXA6IDEwcHg7XG4gICAgLS10YXNrLXBhZGRpbmc6IDZweCAxNnB4O1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIC0tLS0tLS0gSEVBREVSIC0tLS0tLS0gKi9cblxuI2hlYWRlciB7XG4gICAgbWluLWhlaWdodDogMTBzdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4vKiAtLS0tLS0tIE1BSU4gLS0tLS0tLSAqL1xuXG4jbWFpbi1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDkwc3ZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIC0tLS0tLS0gU0lERUJBUiAtLS0tLS0tICovXG5cbiNzaWRlLWJhciB7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmc6IHZhcigtLWdlbmVyYWwtcGFkZGluZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xufVxuXG4jaG9tZS1jb250YWluZXIsXG4jcHJvamVjdHMtY29udGFpbmVyLFxuI3Byb2plY3RzLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNpZGViYXItZ2FwKTtcbn1cblxuLnByb2plY3Qge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbmV3LXByb2plY3Qge1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xufVxuXG4jbmV3LXByb2plY3Q6aG92ZXIsXG4ucHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTUwO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnByb2plY3QgPiAucHJvamVjdC1pY29ucyB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuXG59XG5cbi5wcm9qZWN0OmhvdmVyID4gLnByb2plY3QtaWNvbnMge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cblxuXG4vKiAtLS0tLS0tIFRBU0sgRElTUExBWSAtLS0tLS0tICovXG5cbiN0YXNrcy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLWdlbmVyYWwtcGFkZGluZyk7XG4gICAgZmxleDogMTtcbn1cblxuI3Rhc2tzLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNpZGViYXItZ2FwKTtcbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbn1cblxuLnRhc2stbWFpbiB7XG4gICAgcGFkZGluZzogdmFyKC0tdGFzay1wYWRkaW5nKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50IDE1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2staWNvbiB7XG4gICAgd2lkdGg6IDEuM3JlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi50YXNrLWFkZGl0aW9uYWwge1xuICAgIHBhZGRpbmc6IHZhcigtLXRhc2stcGFkZGluZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jb2xsYXBzZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmV4cGFuZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIC0tLS0tLS0gTkVXIFRBU0sgLS0tLS0tLSAqL1xuXG4jbmV3LXRhc2stZm9ybSB7XG4gICAgcGFkZGluZzogdmFyKC0tdGFzay1wYWRkaW5nKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xuICAgIGdhcDogMTZweDtcbn1cblxuI25ldy10YXNrLWZvcm0uY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNuZXctdGFzay1tYWluLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNpZGViYXItZ2FwKTtcbn1cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsMkJBQTJCOztBQUUzQjtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7QUFDbEM7O0FBRUEseUJBQXlCOztBQUV6QjtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBLDRCQUE0Qjs7QUFFNUI7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0IsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7O0FBSUEsaUNBQWlDOztBQUVqQztJQUNJLCtCQUErQjtJQUMvQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUEsNkJBQTZCOztBQUU3QjtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZ2VuZXJhbC1wYWRkaW5nOiAzMHB4O1xcbiAgICAtLXNpZGViYXItZ2FwOiAxMHB4O1xcbiAgICAtLXRhc2stcGFkZGluZzogNnB4IDE2cHg7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIC0tLS0tLS0gSEVBREVSIC0tLS0tLS0gKi9cXG5cXG4jaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogMTBzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLyogLS0tLS0tLSBNQUlOIC0tLS0tLS0gKi9cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA5MHN2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogLS0tLS0tLSBTSURFQkFSIC0tLS0tLS0gKi9cXG5cXG4jc2lkZS1iYXIge1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1nZW5lcmFsLXBhZGRpbmcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xcbn1cXG5cXG4jaG9tZS1jb250YWluZXIsXFxuI3Byb2plY3RzLWNvbnRhaW5lcixcXG4jcHJvamVjdHMtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE1MDtcXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnByb2plY3QgPiAucHJvamVjdC1pY29ucyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlblxcbn1cXG5cXG4ucHJvamVjdDpob3ZlciA+IC5wcm9qZWN0LWljb25zIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuXFxuXFxuLyogLS0tLS0tLSBUQVNLIERJU1BMQVkgLS0tLS0tLSAqL1xcblxcbiN0YXNrcy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1nZW5lcmFsLXBhZGRpbmcpO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4jdGFza3MtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4udGFzay1tYWluIHtcXG4gICAgcGFkZGluZzogdmFyKC0tdGFzay1wYWRkaW5nKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQgMTUwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWljb24ge1xcbiAgICB3aWR0aDogMS4zcmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi50YXNrLWFkZGl0aW9uYWwge1xcbiAgICBwYWRkaW5nOiB2YXIoLS10YXNrLXBhZGRpbmcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jb2xsYXBzZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5leHBhbmQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogLS0tLS0tLSBORVcgVEFTSyAtLS0tLS0tICovXFxuXFxuI25ldy10YXNrLWZvcm0ge1xcbiAgICBwYWRkaW5nOiB2YXIoLS10YXNrLXBhZGRpbmcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jbmV3LXRhc2stZm9ybS5jb2xsYXBzZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jbmV3LXRhc2stbWFpbi1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zaWRlYmFyLWdhcCk7XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrRGl2IH0gZnJvbSBcIi4vY3JlYXRlLWRpc3BsYXlcIjtcblxuZnVuY3Rpb24gZGVsZXRlQ3VycmVudFRhc2tzKCkge1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgICBjdXJyZW50VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGROZXdUYXNrKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1mb3JtXCIpO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1hZGRcIik7XG4gICAgbmV3VGFza0J1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICBjb25zdCBhbGxPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNuZXctdGFzay1wcm9qZWN0ID4gb3B0aW9uXCIpO1xuICAgICAgICBhbGxPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzaygpIHtcbiAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLXRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgbmV3VGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWRhdGVcIikudmFsdWU7XG4gICAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1wcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUYXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stcHJvamVjdFwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sobmV3VGFza1RpdGxlLCBuZXdUYXNrRGVzY3JpcHRpb24sIG5ld1Rhc2tEYXRlLCBuZXdUYXNrUHJpb3JpdHksIG5ld1Rhc2tQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxuICAgIHJldHVybiBuZXdUYXNrO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0T3B0aW9uKG5ld1Byb2plY3QpIHtcbiAgICBjb25zdCBuZXdUYXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stcHJvamVjdFwiKTtcbiAgICBjb25zdCBjcmVhdGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGNyZWF0ZU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBuZXdQcm9qZWN0LmlkKTtcbiAgICBjcmVhdGVPcHRpb24udGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0Lm5hbWVcbiAgICBuZXdUYXNrUHJvamVjdC5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb24pXG59XG5cbmZ1bmN0aW9uIGdldFRhc2tQcm9qZWN0KGluYm94LCB0YXNrKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBpbmJveC5zaG93QWxsUHJvamVjdHMpIHtcbiAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHRhc2sucHJvamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0TmV3VGFza0Zvcm0oKSB7XG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIik7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWFkZFwiKTtcbiAgICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBnZXRTdG9yYWdlUHJvamVjdChpbmJveCwgdGFzaykge1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgaW5ib3guc2hvd0FsbFByb2plY3RzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0LnNob3dQcm9qZWN0LmluY2x1ZGVzKHRhc2spKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RWRpdGluZ1Rhc2soaW5ib3gpIHtcbiAgICBjb25zdCBlZGl0aW5nVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdGluZy10YXNrXCIpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgaW5ib3guc2hvd1Rhc2tzKSB7XG4gICAgICAgIGlmICh0YXNrLmlkID09PSBlZGl0aW5nVGFza0Rpdi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgZGVsZXRlQ3VycmVudFRhc2tzLFxuICAgIGFkZE5ld1Rhc2ssXG4gICAgY3JlYXRlTmV3VGFzayxcbiAgICBjcmVhdGVQcm9qZWN0T3B0aW9uLFxuICAgIGdldFRhc2tQcm9qZWN0LFxuICAgIHJlc2V0TmV3VGFza0Zvcm0sXG4gICAgZ2V0U3RvcmFnZVByb2plY3QsXG4gICAgZ2V0RWRpdGluZ1Rhc2ssXG59IiwiaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL2ltYWdlcy9lZGl0X2ljb24uc3ZnXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlX2ljb24uc3ZnXCI7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKGluYm94KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGluYm94LnNob3dUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWRpc3BsYXlcIikuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0Rpdih0YXNrKSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rpdih0YXNrKSB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpXG5cbiAgICBjb25zdCB0YXNrTWFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tNYWluSW5mby5jbGFzc0xpc3QuYWRkKFwidGFzay1tYWluXCIpO1xuXG4gICAgY29uc3QgdGFza01haW5MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTWFpbkxlZnQuY2xhc3NMaXN0LmFkZChcInRhc2stbWFpbi1sZWZ0XCIpO1xuICAgIHRhc2tNYWluTGVmdC50ZXh0Q29udGVudCA9IHRhc2submFtZTtcblxuICAgIGNvbnN0IHRhc2tNYWluUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tNYWluUmlnaHQuY2xhc3NMaXN0LmFkZChcInRhc2stbWFpbi1yaWdodFwiKTtcbiAgICB0YXNrTWFpblJpZ2h0LnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuXG4gICAgY29uc3QgaWNvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGljb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25zXCIpO1xuICAgIGNvbnN0IG15RWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBteUVkaXRJY29uLnNyYyA9IGVkaXRJY29uO1xuICAgIG15RWRpdEljb24uY2xhc3NMaXN0LmFkZChcImVkaXQtaWNvblwiKTtcbiAgICBteUVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25cIik7XG4gICAgY29uc3QgbXlEZWxldGVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbXlEZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgbXlEZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtaWNvblwiKTtcbiAgICBteURlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcInRhc2staWNvblwiKTtcblxuICAgIGljb25zQ29udGFpbmVyLmFwcGVuZChteUVkaXRJY29uLCBteURlbGV0ZUljb24pO1xuXG4gICAgdGFza01haW5JbmZvLmFwcGVuZCh0YXNrTWFpbkxlZnQsIHRhc2tNYWluUmlnaHQsIGljb25zQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRhc2tBZGRpdGlvbmFsSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FkZGl0aW9uYWxJbmZvLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFkZGl0aW9uYWxcIik7XG4gICAgdGFza0FkZGl0aW9uYWxJbmZvLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZVwiKTtcbiAgICB0YXNrQWRkaXRpb25hbEluZm8udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIFxuICAgIHRhc2tEaXYuYXBwZW5kKHRhc2tNYWluSW5mbywgdGFza0FkZGl0aW9uYWxJbmZvKTtcblxuICAgIHJldHVybiB0YXNrRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGl2KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBgJHtwcm9qZWN0LmlkfWApXG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBjb25zdCBpY29uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWNvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvbnNcIik7XG4gICAgY29uc3QgbXlFZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15RWRpdEljb24uc3JjID0gZWRpdEljb247XG4gICAgbXlFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1pY29uXCIpO1xuICAgIG15RWRpdEljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcbiAgICBjb25zdCBteURlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBteURlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICBteURlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1pY29uXCIpO1xuICAgIG15RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xuICAgIGljb25zQ29udGFpbmVyLmFwcGVuZChteUVkaXRJY29uLCBteURlbGV0ZUljb24pO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaWNvbnNDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHByb2plY3REaXY7XG59XG5cbmV4cG9ydCB7IGxvYWRQYWdlLCBjcmVhdGVUYXNrRGl2LCBjcmVhdGVQcm9qZWN0RGl2IH0iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gW107XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9pZCA9IFwicHJvamVjdF9cIiArIHV1aWR2NCgpLnNsaWNlKC0xMiwgLTEpO1xuICAgIH1cblxuICAgIGdldCBzaG93UHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dUYXNrcygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gW107XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgdGhpcy5fcHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2plY3RUYXNrcztcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy5fcHJvamVjdC5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2sodGFzaykge1xuICAgICAgICB0aGlzLl9wcm9qZWN0LnNwbGljZSh0aGlzLl9wcm9qZWN0LmluZGV4T2YodGFzayksIDEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX2lkID0gdXVpZHY0KCk7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgZGF0ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0IHByb2plY3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3QgPSB2YWx1ZTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXBQcm9qZWN0cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2FsbFByb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHNob3dBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbFByb2plY3RzO1xuICAgIH1cblxuICAgIGdldCBzaG93UHJvamVjdHNOYW1lcygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNOYW1lcyA9IFtdO1xuICAgICAgICB0aGlzLl9hbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgcHJvamVjdHNOYW1lcy5wdXNoKHByb2plY3QubmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwcm9qZWN0c05hbWVzO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLl9hbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLl9hbGxQcm9qZWN0cy5zcGxpY2UodGhpcy5fYWxsUHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSlcbiAgICB9XG5cbiAgICBnZXQgc2hvd1Rhc2tzKCkge1xuICAgICAgICBjb25zdCBhbGxUYXNrcyA9IFtdO1xuICAgICAgICB0aGlzLl9hbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5zaG93UHJvamVjdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGFsbFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWxsVGFza3M7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMuX2FsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBvbmVUYXNrIG9mIHByb2plY3Quc2hvd1Byb2plY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAob25lVGFzayA9PT0gdGFzaykge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmRlbGV0ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9jcmVhdGUtdGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcbmltcG9ydCBHcm91cFByb2plY3RzIGZyb20gXCIuL2dyb3VwLXByb2plY3RzXCI7XG5pbXBvcnQgeyBsb2FkUGFnZSwgY3JlYXRlUHJvamVjdERpdiwgY3JlYXRlVGFza0RpdiB9IGZyb20gXCIuL2NyZWF0ZS1kaXNwbGF5XCI7XG5pbXBvcnQgeyBkZWxldGVDdXJyZW50VGFza3MsIGFkZE5ld1Rhc2ssIGNyZWF0ZU5ld1Rhc2ssIGNyZWF0ZVByb2plY3RPcHRpb24sIGdldFRhc2tQcm9qZWN0LCByZXNldE5ld1Rhc2tGb3JtLCBnZXRTdG9yYWdlUHJvamVjdCwgZ2V0RWRpdGluZ1Rhc2sgfSBmcm9tIFwiLi9ET00tZnVuY3Rpb25zXCI7XG5cblxuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIlByb2plY3QgMVwiKTtcbmNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoXCJQcm9qZWN0IDJcIik7XG5jb25zdCB0YXNrMSA9IG5ldyBUYXNrKFwiZ3ltXCIsIFwiaW4gdGhlIG1vcm5pbmdcIiwgXCIyMDIzLTExLTAyXCIsIFwiSGlnaFwiLCBwcm9qZWN0MS5pZCk7XG5jb25zdCB0YXNrMiA9IG5ldyBUYXNrKFwicGxheSBkaWNlIHRocm9uZVwiLCBcIndpdGggRHIgU3RyYW5nZVwiLCBcIjIwMjMtMTAtMjFcIiwgXCJNZWRpdW1cIiwgcHJvamVjdDIuaWQpO1xuY29uc29sZS5sb2codGFzazEpXG5cbmNvbnN0IGluYm94ID0gbmV3IEdyb3VwUHJvamVjdHMoKTtcblxuXG5wcm9qZWN0MS5hZGRUYXNrKHRhc2sxKVxucHJvamVjdDIuYWRkVGFzayh0YXNrMilcblxuaW5ib3guYWRkUHJvamVjdChwcm9qZWN0MSlcbmluYm94LmFkZFByb2plY3QocHJvamVjdDIpXG5cbmxvYWRQYWdlKGluYm94KTtcblxuLy8gSU5CT1ggQlVUVE9OXG5jb25zdCBpbmJveEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIik7XG5pbmJveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZUN1cnJlbnRUYXNrcygpO1xuICAgIGNvbnN0IGNoZWNrUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgY2hlY2tQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaW5ib3hCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBpbmJveC5zaG93VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFza3NEaXNwbGF5LmFwcGVuZChjcmVhdGVUYXNrRGl2KHRhc2spKTtcbiAgICB9KVxufSlcblxuLy8gUFJPSkVDVFxuY29uc3QgcHJvamVjdHNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1kaXNwbGF5XCIpO1xucHJvamVjdHNEaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3REaXYocHJvamVjdDEpKVxucHJvamVjdHNEaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3REaXYocHJvamVjdDIpKVxucHJvamVjdHNEaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgJiYgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LWljb25cIikpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICBwcm9qZWN0c0Rpc3BsYXkuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKGNoaWxkICE9PSBldmVudC50YXJnZXQgJiYgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGluYm94LnNob3dBbGxQcm9qZWN0cykge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQgPT09IHByb2plY3QuaWQgJiYgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3Quc2hvd1Byb2plY3QpXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUN1cnJlbnRUYXNrcygpO1xuICAgICAgICAgICAgcHJvamVjdC5zaG93UHJvamVjdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZVRhc2sgPSBjcmVhdGVUYXNrRGl2KHRhc2spO1xuICAgICAgICAgICAgICAgIHRhc2tzRGlzcGxheS5hcHBlbmRDaGlsZChjaGFuZ2VUYXNrKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0pICBcblxuLy8gREVMRVRFIFBST0pFQ1RcbnByb2plY3RzRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLWljb25cIikpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRQcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBpbmJveC5zaG93QWxsUHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSB0YXJnZXRlZFByb2plY3QuZGF0YXNldC5pZCkge1xuICAgICAgICAgICAgICAgIGluYm94LmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ZWRQcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluYm94LnNob3dBbGxQcm9qZWN0cylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmJveC5zaG93VGFza3MpXG4gICAgICAgICAgICAgICAgZGVsZXRlQ3VycmVudFRhc2tzKCk7XG4gICAgICAgICAgICAgICAgaW5ib3hCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBpbmJveC5zaG93VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3NEaXNwbGF5LmFwcGVuZChjcmVhdGVUYXNrRGl2KHRhc2spKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8gRURJVCBQUk9KRUNUXG5wcm9qZWN0c0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXQtaWNvblwiKSkge1xuICAgICAgICBjb25zdCB0YXJnZXRlZFByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGluYm94LnNob3dBbGxQcm9qZWN0cykge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHRhcmdldGVkUHJvamVjdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2plY3QtZm9ybVwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvamVjdC1uYW1lXCIpLnZhbHVlID0gcHJvamVjdC5uYW1lXG4gICAgICAgICAgICAgICAgZWRpdFByb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKVxuICAgICAgICAgICAgICAgIHRhcmdldGVkUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIilcbiAgICAgICAgICAgICAgICB0YXJnZXRlZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImVkaXRpbmctcHJvamVjdFwiKVxuICAgICAgICAgICAgICAgIHByb2plY3RzRGlzcGxheS5pbnNlcnRCZWZvcmUoZWRpdFByb2plY3RGb3JtLCB0YXJnZXRlZFByb2plY3QpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5jb25zdCBlZGl0UHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9qZWN0LXN1Ym1pdFwiKTtcbmVkaXRQcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlZGl0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvamVjdC1mb3JtXCIpO1xuICAgIGNvbnN0IGVkaXRpbmdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0aW5nLXByb2plY3RcIik7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBpbmJveC5zaG93QWxsUHJvamVjdHMpIHtcbiAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IGVkaXRpbmdQcm9qZWN0LmRhdGFzZXQuaWQpIHtcbiAgICAgICAgICAgIHByb2plY3QubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9qZWN0LW5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICBlZGl0aW5nUHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIilcbiAgICAgICAgICAgIGVkaXRpbmdQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKVxuICAgICAgICAgICAgZWRpdGluZ1Byb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImVkaXRpbmctcHJvamVjdFwiKVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25ldy10YXNrLXByb2plY3QgPiBvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNlZGl0LXRhc2stcHJvamVjdCA+IG9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8gTkVXIFBST0pFQ1QgQlVUVE9OXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdFwiKTtcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG59KVxuXG5mb3IgKGxldCBwcm9qZWN0IG9mIGluYm94LnNob3dBbGxQcm9qZWN0cykge1xuICAgIGNyZWF0ZVByb2plY3RPcHRpb24ocHJvamVjdClcbiAgICBjb25zdCBuZXdQcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBuZXdQcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3QuaWQpO1xuICAgIG5ld1Byb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stcHJvamVjdFwiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0T3B0aW9uKVxufVxuXG4vLyBTVUJNSVQgTkVXIFBST0pFQ1QgQlVUVE9OXG5jb25zdCBzdWJtaXROZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1zdWJtaXRcIik7XG5zdWJtaXROZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1uYW1lXCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7XG4gICAgaW5ib3guYWRkUHJvamVjdChuZXdQcm9qZWN0KVxuICAgIHByb2plY3RzRGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RGl2KG5ld1Byb2plY3QpKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1mb3JtXCIpLnJlc2V0KCk7XG5cbiAgICBjcmVhdGVQcm9qZWN0T3B0aW9uKG5ld1Byb2plY3QpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG5ld1Byb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgbmV3UHJvamVjdC5uYW1lKTtcbiAgICBuZXdQcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5uYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLXByb2plY3RcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdE9wdGlvbilcbn0pXG5cbi8vIFRBU0tcbmNvbnN0IHRhc2tzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtZGlzcGxheVwiKTtcbnRhc2tzRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInRhc2stbWFpblwiKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0YXNrLW1haW4tbGVmdFwiIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwidGFzay1tYWluLXJpZ2h0XCIpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICB9XG59KVxuXG4vLyBORVcgVEFTSyBCVVRUT05cbmNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWFkZFwiKTtcbm5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGROZXdUYXNrKCk7XG59KVxuXG4vLyBTVUJNSVQgTkVXIFRBU0sgQlVUVE9OXG5jb25zdCBzdWJtaXROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1zdWJtaXRcIik7XG5zdWJtaXROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVOZXdUYXNrKCk7XG4gICAgY29uc3QgbmV3VGFza0Rpc3BsYXkgPSBjcmVhdGVUYXNrRGl2KG5ld1Rhc2spO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGdldFRhc2tQcm9qZWN0KGluYm94LCBuZXdUYXNrKTtcbiAgICBzZWxlY3RlZFByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuZGF0YXNldC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0LmlkIHx8IFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtZGlzcGxheVwiKS5hcHBlbmRDaGlsZChuZXdUYXNrRGlzcGxheSk7XG4gICAgfVxuICAgIHJlc2V0TmV3VGFza0Zvcm0oKTtcbn0pXG5cbi8vIERFTEVURSBUQVNLXG50YXNrc0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1pY29uXCIpKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkVGFzayA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBpbmJveC5zaG93VGFza3MpIHtcbiAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSB0YXJnZXRlZFRhc2suZ2V0QXR0cmlidXRlKFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICBpbmJveC5kZWxldGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIHRhcmdldGVkVGFzay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgZGVsZXRlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8gRURJVCBUQVNLXG50YXNrc0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXQtaWNvblwiKSkge1xuICAgICAgICBjb25zdCB0YXJnZXRlZFRhc2tEaXYgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgaW5ib3guc2hvd1Rhc2tzKSB7XG4gICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gdGFyZ2V0ZWRUYXNrRGl2LmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRpYWxvZ1wiKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRlZFRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImVkaXRpbmctdGFza1wiKTtcbiAgICAgICAgICAgICAgICBlZGl0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLW5hbWVcIikudmFsdWUgPSB0YXNrLm5hbWU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stZGVzY3JpcHRpb25cIikudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRhdGVcIikudmFsdWUgPSB0YXNrLmRhdGU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stcHJpb3JpdHlcIikudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLXByb2plY3RcIikudmFsdWUgPSBnZXRTdG9yYWdlUHJvamVjdChpbmJveCwgdGFzaykuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0U3RvcmFnZShteU5ld1N0b3JhZ2UpIHtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGluYm94LnNob3dBbGxQcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gbXlOZXdTdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgZWRpdFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1zdWJtaXRcIik7XG5lZGl0VGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZWRpdGluZ1Rhc2sgPSBnZXRFZGl0aW5nVGFzayhpbmJveCk7XG4gICAgY29uc3Qgb3JpZ2luYWxQcm9qZWN0ID0gZ2V0U3RvcmFnZVByb2plY3QoaW5ib3gsIGVkaXRpbmdUYXNrKVxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXdQcm9qZWN0U3RvcmFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1wcm9qZWN0XCIpLnZhbHVlKTtcbiAgICBpZiAobmV3UHJvamVjdCAhPT0gb3JpZ2luYWxQcm9qZWN0KSB7XG4gICAgICAgIG9yaWdpbmFsUHJvamVjdC5kZWxldGVUYXNrKGVkaXRpbmdUYXNrKTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRUYXNrKGVkaXRpbmdUYXNrKTtcbiAgICAgICAgY29uc29sZS5sb2coZWRpdGluZ1Rhc2spXG4gICAgfVxuICAgIGVkaXRpbmdUYXNrLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1uYW1lXCIpLnZhbHVlO1xuICAgIGVkaXRpbmdUYXNrLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgZWRpdGluZ1Rhc2suZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRhdGVcIikudmFsdWU7XG4gICAgZWRpdGluZ1Rhc2sucHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1wcmlvcml0eVwiKS52YWx1ZTtcbiAgICBlZGl0aW5nVGFzay5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stcHJvamVjdFwiKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhlZGl0aW5nVGFzaylcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgfHwgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LmFjdGl2ZVwiKS5kYXRhc2V0LmlkID09PSBlZGl0aW5nVGFzay5wcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGVkaXRpbmdUYXNrRGl2ID0gY3JlYXRlVGFza0RpdihlZGl0aW5nVGFzayk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdGluZy10YXNrXCIpLnJlcGxhY2VXaXRoKGVkaXRpbmdUYXNrRGl2KTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC5hY3RpdmVcIikuZGF0YXNldC5pZCAhPT0gZWRpdGluZ1Rhc2sucHJvamVjdCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRpbmctdGFza1wiKS5yZW1vdmUoKVxuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1kaWFsb2dcIikuY2xvc2UoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9