'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ENDPOINTS = {
  GET_ITEMS: 'get_items'
};

var PARAMS = {
  GET_ITEMS: {
    EXTERNAL_ID: 'external_id',
    INTERNAL_ID: 'internal_id',
    STATUS: 'status',
    PAGE: 'page'
  }
};

var STATUS = {
  IN_QUEUE: 'IN_QUEUE',
  LISTED: 'LISTED',
  SOLD: 'SOLD',
  SHIPPED: 'SHIPPED',
  DISCARDED: 'DISCARDED'
};

exports.default = {
  BASE_URI: 'https://onlineposting.e-foro.com/items_api/',
  ENDPOINTS: ENDPOINTS,
  PARAMS: PARAMS,
  STATUS: STATUS
};