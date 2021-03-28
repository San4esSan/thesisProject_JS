/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethesisProject_JS"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMassage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var form = document.querySelector('.form-callback');\n  var inputs = document.querySelectorAll('input');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem;';\n  statusMessage.style.color = 'red';\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(form);\n\n    var clearInputs = function clearInputs() {\n      inputs.forEach(function (item) {\n        if (inputs.classList === 'BUTTON') {\n          item.value = '';\n        }\n      });\n    };\n\n    postData(formData).then(function (response) {\n      event.preventDefault();\n\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n      setTimeout(function () {\n        return document.querySelector('.popup').style.display = 'none';\n      }, 3000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMassage;\n      console.log(error);\n    })[\"finally\"](function () {\n      clearInputs();\n      setTimeout(function () {\n        return statusMessage.remove();\n      }, 3000);\n    });\n  });\n\n  var postData = function postData(formData) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'aplication/json'\n      },\n      // body: JSON.stringify(body)\n      body: formData\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://thesisProject_JS/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("abd12f3fb27fba4ea1d2")
/******/ })();
/******/ 
/******/ }
);