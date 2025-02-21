/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  const nulVal: unknown[] = [];
  const resVal: unknown[] = [];
  for (const v of values) {
    if (typeof v !== typeof '') {
      resVal.push(v);
    } else {
      nulVal.push(v);
    }
  }
  return resVal;
}
