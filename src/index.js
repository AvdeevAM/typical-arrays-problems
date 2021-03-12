exports.min = function min (arr) {
  if (arr == undefined){
          return 0;
      }
      if (arr.length == 0){
      return 0;
      }
    var result = arr[0];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < result) {
          result = arr[i];
      }
    }
    return result;
}

exports.max = function max (arr) {
   if (arr == undefined){
            return 0;
        }
        if (arr.length == 0){
        return 0;
        }
      var result = arr[0];
      for (var i = 0; i < arr.length; i++){
          if (arr[i] > result){
              result = arr[i];
          }
      }
      return result;
}

exports.avg = function avg (arr) {
   if (arr == undefined){
            return 0;
        }
        if (arr.length == 0){
        return 0;
        }
  var result = 0;
  var count = 0;
  for (var i = 0; i < arr.length; i++){
          result = result + arr[i];
          count++;
      }
  return result / count;
}
