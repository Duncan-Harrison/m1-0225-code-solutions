/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): unknown[] {
  const nulVal: unknown[] = [];
  const resVal: unknown[] = [];
  for (const v of values) {
    if (v !== null) {
      resVal.push(v);
    } else {
      nulVal.push(v);
    }
  }
  return resVal;
}
