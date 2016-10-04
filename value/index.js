module.exports = function value(v) {
  if ('function' !== typeof v) {
    return v;
  }
  return value(v());
};
