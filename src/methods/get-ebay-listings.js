import isErrorOptions from '../utilities/validate-options';

export default function getEbayListings(options) {
  const { EBAY_LISTINGS } = this.constants.PARAMS;
  const allowedKeys = Object.keys(EBAY_LISTINGS).map(key => EBAY_LISTINGS[key]);
  const err = isErrorOptions(options, [], allowedKeys, 'getEbayListings');

  if (err) {
    return Promise.reject(err);
  }

  return Promise.resolve({});
}
