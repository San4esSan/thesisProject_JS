/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethesisProject_JS"]("main",{

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var itemSlide = document.querySelectorAll('.item');\n  var slideIndex = 1;\n\n  var showSlides = function showSlides(n) {\n    if (n > itemSlide.length) {\n      slideIndex = 1;\n    }\n\n    if (n < 1) {\n      slideIndex = itemSlide.length;\n    }\n\n    itemSlide.forEach(function (item) {\n      item.classList.add('animated');\n      item.style.display = 'none';\n    });\n    itemSlide[slideIndex - 1].style.display = 'block';\n  };\n\n  showSlides(slideIndex);\n\n  function plusSlides(n) {\n    showSlides(slideIndex += n);\n  } // setInterval(function() {\n  //   plusSlides(1);\n  //   itemSlide[slideIndex - 1].classList.remove('fadeIn');\n  //   itemSlide[slideIndex - 1].classList.add('fadeIn');\n  // }, 3000);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://thesisProject_JS/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3e79ca761df248563d95")
/******/ })();
/******/ 
/******/ }
);