'use strict';
/* exported take */
function take(array, count) {
  const res = [];
  let endRange;
  if (count < array.length) {
    endRange = count;
  } else {
    endRange = array.length;
  }
  for (let i = 0; i < endRange; i++) {
    res.push(array[i]);
  }
  return res;
}
// could also use math.min() and math.max()
// ignore the endRange solution
// for (let i = 0; i < Math.min(count, array.length); i++) {
//    res.push(array[i]);
//  }
