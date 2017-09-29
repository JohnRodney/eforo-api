import rp from 'request-promise';
import constants from './constants/constants';

export default class Eforo {
  setup(apikey) {
    this.apiKey = apikey;
    this.constants = constants;
    this.currentUri = this.constants.ENDPOINTS.GET_ITEMS;
    this.options = {
      uri: `${this.constants.BASE_URI}${this.constants.ENDPOINTS.GET_ITEMS}`,
      headers: {
        'User-Agent': 'node-eforo',
        'X-Authorization': `TOKEN ${this.apiKey}`,
      },
      json: true,
    };
  }

  setEndpoint(endpoint) {
    this.options.uri = this.options.uri.replace(this.currentUri, endpoint);
    this.currentUri = endpoint;
  }

  setUrlParams(params) {
    this.options.qs = params;
  }

  getItems(options) {
    const { GET_ITEMS } = this.constants.ENDPOINTS;
    const { STATUS, EXTERNAL_ID, INTERNAL_ID, PAGE } = this.constants.PARAMS.GET_ITEMS;
    const requiredKeys = [EXTERNAL_ID, INTERNAL_ID, STATUS];
    const allowedKeys = [STATUS, EXTERNAL_ID, INTERNAL_ID, PAGE];

    if (!options) {
      return Promise.reject({ err: 'please pass a valid options object to getItems method' });
    }

    const requiredKeysCount = requiredKeys
      .filter(requiredKey => options[requiredKey]).length;

    if (requiredKeysCount === 0) {
      return Promise.reject({ err: `at least one key of type ${requiredKeys.join(', ')} is required in options to getItems` });
    }

    const hasUnallowed = Object.keys(options)
      .filter(key => allowedKeys.indexOf(key) === -1).length > 0;

    if (hasUnallowed) {
      return Promise.reject({ err: `only ${allowedKeys.join(', ')} are allowed as options in getItems` });
    }

    this.setEndpoint(GET_ITEMS);
    this.setUrlParams(options);

    return new Promise((resolve, reject) => {
      rp(this.options)
        .then((results) => {
          resolve(results);
        }).catch(err => reject(err));
    });
  }
}
