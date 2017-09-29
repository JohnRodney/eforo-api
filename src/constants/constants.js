const ENDPOINTS = {
  GET_ITEMS: 'get_items',
};

const PARAMS = {
  GET_ITEMS: {
    EXTERNAL_ID: 'external_id',
    INTERNAL_ID: 'internal_id',
    STATUS: 'status',
    PAGE: 'page',
  },
};

const STATUS = {
  IN_QUEUE: 'IN_QUEUE',
  LISTED: 'LISTED',
  SOLD: 'SOLD',
  SHIPPED: 'SHIPPED',
  DISCARDED: 'DISCARDED',
};

export default {
  BASE_URI: 'https://onlineposting.e-foro.com/items_api/',
  ENDPOINTS,
  PARAMS,
  STATUS,
};
