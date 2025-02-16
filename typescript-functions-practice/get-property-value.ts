/* exported getPropertyValue */
interface Person {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getPropertyValue(object: Person, key: any): unknown {
  return object[key as keyof typeof object];
}
