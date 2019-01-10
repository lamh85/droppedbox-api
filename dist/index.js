"use strict";

var _exportTest = require("./app/exportTest.js");

var _exportTest2 = _interopRequireDefault(_exportTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

console.log("I am from index.js");
console.log(_exportTest2.default);

console.log("I am from index also");
console.log(process.env.PRINT_ME);

// let element = document.querySelector("#container")
// element.innerHTML = "hello from index.js. hooray! something"