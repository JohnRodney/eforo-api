import rp from 'request-promise';
import isErrorOptions from '../utilities/validate-options';

export default function getItems(options) {
  const { GET_ITEMS } = this.constants.ENDPOINTS;
  const { STATUS, EXTERNAL_ID, INTERNAL_ID, PAGE } = this.constants.PARAMS.GET_ITEMS;
  const requiredKeys = [EXTERNAL_ID, INTERNAL_ID, STATUS];
  const allowedKeys = [STATUS, EXTERNAL_ID, INTERNAL_ID, PAGE];
  const error = isErrorOptions(options, requiredKeys, allowedKeys);

  if (error) { return Promise.reject(error); }

  this.setEndpoint(GET_ITEMS);
  this.setUrlParams(options);

  return new Promise((resolve, reject) => {
    rp(this.options)
      .then((results) => {
        resolve(results);
      }).catch(err => reject(err));
  });
}
