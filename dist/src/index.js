'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants/constants');

var _constants2 = _interopRequireDefault(_constants);

var _methods = require('./methods/methods');

var _methods2 = _interopRequireDefault(_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Eforo = function () {
  function Eforo() {
    var _this = this;

    _classCallCheck(this, Eforo);

    this.constants = _constants2.default;
    this.currentUri = this.constants.ENDPOINTS.GET_ITEMS;
    Object.keys(_methods2.default).forEach(function (key) {
      _this[key] = _methods2.default[key].bind(_this);
    });
  }

  _createClass(Eforo, [{
    key: 'setup',
    value: function setup(apikey) {
      this.apiKey = apikey;
      this.options = {
        uri: '' + this.constants.BASE_URI + this.constants.ENDPOINTS.GET_ITEMS,
        headers: {
          'User-Agent': 'node-eforo',
          'X-Authorization': 'TOKEN ' + this.apiKey
        },
        json: true
      };
    }
  }]);

  return Eforo;
}();

exports.default = Eforo;