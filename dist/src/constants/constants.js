'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ENDPOINTS = {
  GET_ITEMS: 'get_items'
};

var EBAY_LISTINGS = {
  EBAY_LISTING_ID: 'ebay_listing_id',
  EBAY_LISTING_URL: 'ebay_listing_url',
  IN_STORE_LOCATION: 'in_store_location',
  EBAY_ACCOUNT: 'ebay_account',
  EXTERNAL_ID: 'external_id',
  INVENTORY_ID: 'inventory_id',
  START_DATE: 'start_date',
  END_DATE: 'end_date',
  POSTED_DATE: 'posted_date',
  ENDED_DATE: 'ended_date',
  LISTING_STATUS: 'listing_status',
  LISTING_TYPE: 'listing_type',
  CURRENT_PRICE: 'current_price',
  CURRENT_BIDS: 'current_bids',
  QUANTITY_TOTAL: 'quantity_total',
  QUANTITY_SOLD: 'quantity_sold',
  LISTED_USER: 'listed_user',
  USERNAME: 'username',
  FULL_NAME: 'full_name',
  EMAIL: 'email',
  ACCESS_LEVEL: 'access_level',
  STATUS: 'status'
};

var PARAMS = {
  GET_ITEMS: {
    EXTERNAL_ID: 'external_id',
    INTERNAL_ID: 'internal_id',
    STATUS: 'status',
    PAGE: 'page'
  },
  EBAY_LISTINGS: EBAY_LISTINGS
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