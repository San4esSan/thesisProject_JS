/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethesisProject_JS"]("main",{

/***/ "./src/modules/toggleModal.js":
/*!************************************!*\
  !*** ./src/modules/toggleModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleModal = function toggleModal() {\n  // const btnModal = document.querySelectorAll('.callback-btn'),\n  // modal = document.querySelector('.modal-callback'),\n  // modalOverlay = document.querySelector('.modal-overlay'),\n  // modalClose = document.querySelector('.modal-close');\n  // btnModal.forEach(item => {\n  //   item.addEventListener('click', (event) => {\n  //     event.preventDefault();\n  //     modal.style.display = 'block';\n  //     modalOverlay.style.display = 'block';\n  //     document.body.style.overflow = 'hidden';\n  //   });\n  // });\n  // modalClose.addEventListener('click', () => {\n  //   modal.style.display = 'none';\n  //   modalOverlay.style.display = 'none';\n  //   document.body.style.overflow = '';\n  // });\n  // modalOverlay.addEventListener('click', () => {\n  //   modal.style.display = 'none';\n  //   modalOverlay.style.display = 'none';\n  //   document.body.style.overflow = '';\n  // });\n  function bindModal(trigger, modal, close) {\n    trigger.addEventListener('click', function (e) {\n      if (e.target) {\n        e.preventDefault();\n      }\n\n      modal.style.display = 'block';\n      document.body.style.overflow = 'hidden';\n    });\n    close.addEventListener('click', function () {\n      modal.style.display = 'none';\n      document.body.style.overflow = '';\n    });\n  }\n\n  var btnModal = document.querySelectorAll('.callback-btn'),\n      modal = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalClose = document.querySelector('.modal-close');\n  bindModal(btnModal, modal, modalClose);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModal);\n\n//# sourceURL=webpack://thesisProject_JS/./src/modules/toggleModal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a391c6c62e65e7f621c3")
/******/ })();
/******/ 
/******/ }
);