"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var userApiKey = null;

var Eforo = function Eforo(apiKey) {
  _classCallCheck(this, Eforo);

  this.userApiKey = apiKey;
};

console.log(new Eforo("fuck u"));