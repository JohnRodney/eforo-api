import constants from './constants/constants';
import methods from './methods/methods';

export default class Eforo {
  constructor() {
    this.constants = constants;
    this.currentUri = this.constants.ENDPOINTS.GET_ITEMS;
    Object.keys(methods).forEach((key) => { this[key] = methods[key].bind(this); });
  }

  setup(apikey) {
    this.apiKey = apikey;
    this.options = {
      uri: `${this.constants.BASE_URI}${this.constants.ENDPOINTS.GET_ITEMS}`,
      headers: {
        'User-Agent': 'node-eforo',
        'X-Authorization': `TOKEN ${this.apiKey}`,
      },
      json: true,
    };
  }
}
