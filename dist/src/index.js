'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _constants = require('./constants/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Eforo = function () {
  function Eforo() {
    _classCallCheck(this, Eforo);
  }

  _createClass(Eforo, [{
    key: 'setup',
    value: function setup(apikey) {
      this.apiKey = apikey;
      this.constants = _constants2.default;
      this.currentUri = this.constants.ENDPOINTS.GET_ITEMS;
      this.options = {
        uri: '' + this.constants.BASE_URI + this.constants.ENDPOINTS.GET_ITEMS,
        headers: {
          'User-Agent': 'node-eforo',
          'X-Authorization': 'TOKEN ' + this.apiKey
        },
        json: true
      };
    }
  }, {
    key: 'setEndpoint',
    value: function setEndpoint(endpoint) {
      this.options.uri = this.options.uri.replace(this.currentUri, endpoint);
      this.currentUri = endpoint;
    }
  }, {
    key: 'setUrlParams',
    value: function setUrlParams(params) {
      this.options.qs = params;
    }
  }, {
    key: 'getItems',
    value: function getItems(options) {
      var _this = this;

      var GET_ITEMS = this.constants.ENDPOINTS.GET_ITEMS;
      var _constants$PARAMS$GET = this.constants.PARAMS.GET_ITEMS,
          STATUS = _constants$PARAMS$GET.STATUS,
          EXTERNAL_ID = _constants$PARAMS$GET.EXTERNAL_ID,
          INTERNAL_ID = _constants$PARAMS$GET.INTERNAL_ID,
          PAGE = _constants$PARAMS$GET.PAGE;

      var requiredKeys = [EXTERNAL_ID, INTERNAL_ID, STATUS];
      var allowedKeys = [STATUS, EXTERNAL_ID, INTERNAL_ID, PAGE];

      if (!options) {
        return Promise.reject({ err: 'please pass a valid options object to getItems method' });
      }

      var requiredKeysCount = requiredKeys.filter(function (requiredKey) {
        return options[requiredKey];
      }).length;

      if (requiredKeysCount === 0) {
        return Promise.reject({ err: 'at least one key of type ' + requiredKeys.join(', ') + ' is required in options to getItems' });
      }

      var hasUnallowed = Object.keys(options).filter(function (key) {
        return allowedKeys.indexOf(key) === -1;
      }).length > 0;

      if (hasUnallowed) {
        return Promise.reject({ err: 'only ' + allowedKeys.join(', ') + ' are allowed as options in getItems' });
      }

      this.setEndpoint(GET_ITEMS);
      this.setUrlParams(options);

      return new Promise(function (resolve, reject) {
        (0, _requestPromise2.default)(_this.options).then(function (results) {
          resolve(results);
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }]);

  return Eforo;
}();

exports.default = Eforo;