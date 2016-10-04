module.exports = function memoize (fn) {
  var memo = {};
  return function () {
    var key = [].join.call(arguments, ',');
    return (memo[key] = memo[key] || fn.apply(this, arguments));
  };
}
