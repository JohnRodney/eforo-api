export default function isErrorOptions(options, requiredKeys, allowedKeys, methodName) {
  if (!options) { return { err: `please pass a valid options object to ${methodName} method.` }; }

  let err = false;
  const isNoRequiredKeys = requiredKeys.length === 0 ? false : requiredKeys
    .filter(requiredKey => options[requiredKey]).length === 0;
  const hasUnallowed = Object.keys(options)
    .filter(key => allowedKeys.indexOf(key) === -1).length > 0;

  if (isNoRequiredKeys) {
    err = { err: `at least one key of type ${requiredKeys.join(', ')} is required in options to ${methodName}` };
  } else if (hasUnallowed) {
    err = { err: `only ${allowedKeys.join(', ')} are allowed as options in ${methodName}` };
  }

  return err;
}
