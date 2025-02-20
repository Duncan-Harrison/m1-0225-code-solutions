'use strict';
/* exported chunk */
function chunk(array, size) {
  const res = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = [];
    for (let j = i; j < i + size && j < array.length; j++) {
      chunk.push(array[j]);
    }
    res.push(chunk);
  }
  return res;
}
