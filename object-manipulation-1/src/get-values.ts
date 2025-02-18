/* exported getValues */
function getValues(obj: object): any[] {
  const values: unknown[] = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
