/* exported toObject */
function toObject(keyValuePair: [string, number]): object {
  const obj: object = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
