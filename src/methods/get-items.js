import rp from 'request-promise';

function isErrorOptions(options, requiredKeys, allowedKeys) {
  if (!options) { return { err: 'please pass a valid options object to getItems method' }; }

  let err = false;
  const isNoRequiredKeys = requiredKeys
    .filter(requiredKey => options[requiredKey]).length === 0;
  const hasUnallowed = Object.keys(options)
    .filter(key => allowedKeys.indexOf(key) === -1).length > 0;

  if (isNoRequiredKeys) {
    err = { err: `at least one key of type ${requiredKeys.join(', ')} is required in options to getItems` };
  } else if (hasUnallowed) {
    err = { err: `only ${allowedKeys.join(', ')} are allowed as options in getItems` };
  }

  return err;
}

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
