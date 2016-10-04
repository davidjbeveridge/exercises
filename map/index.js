module.exports = function map (arr, fn, context) {
  var index = 0;
  var len = arr.length;
  var result = [];
  for(index = 0; index < len; index++) {
    result.push(fn.call(context, arr[index], index, arr));
  }
  return result;
};
