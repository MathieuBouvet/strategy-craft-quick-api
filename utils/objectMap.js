module.exports = function objectMap(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value], index) => [
      key,
      fn(value, key, index),
    ])
  );
};
