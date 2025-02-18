/* exported getPropertyValue */
function getPropertyValue(object: object, key: any): unknown {
  return object[key as keyof typeof object];
}
