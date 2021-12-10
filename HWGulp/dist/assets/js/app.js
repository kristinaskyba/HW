/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("function initMap() {\r\n    var options = {\r\n        zoom: 5,\r\n        center: {\r\n            lat: 50.450001,\r\n            lng: 30.523333\r\n        } //Coordinates of New York\r\n    }\r\n    var map = new google.maps.Map(document.getElementById('map'), options);\r\n    var marker = new google.maps.Marker({\r\n        position: {\r\n            lat: 50.450001,\r\n            lng: 30.523333\r\n        }, // Brooklyn Coordinates\r\n        map: map, //Map that we need to add\r\n        icon: 'https://img.icons8.com/fluent/48/000000/marker-storm.png',\r\n        // adding custom icons (Here I used a Flash logo marker)\r\n        draggarble: true // If set to true you can drag the marker\r\n    });\r\n\r\n    var information = new google.maps.InfoWindow({\r\n        content: '<h4>The marker is at Brooklyn</h4>'\r\n    });\r\n\r\n    marker.addListener('click', function () {\r\n        information.open(map, marker);\r\n    });\r\n\r\n}\r\n\n\n//# sourceURL=webpack://tinagulp/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://tinagulp/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;