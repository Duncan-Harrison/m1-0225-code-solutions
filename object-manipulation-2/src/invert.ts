/* exported invert */
function invert(source: Record<string, any>): Record<string, string> {
  const newObj: Record<string, string> = {};
  for (const key in source) {
    const values: string[] = [source[key], key];
    newObj[values[0]] = values[1];
  }
  return newObj;
}
