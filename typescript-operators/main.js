'use strict';
/* eslint-disable no-unused-vars */
const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5 = {
  name: 'Carl',
  details: {
    age: 82,
  },
};
const announce1 = 'v1 is truthy';
console.log('v1: ', v1 && announce1);
console.log('v2: ', v2 && 'v2 is truthy');
let config1 = '';
let config2 = '';
v1 || (config1 = 'default-value');
v2 || (config2 = 'default-value');
console.log('config1: ', config1, ', config2:', config2);
let cfg1 = '';
let cfg2 = '';
let cfg3 = '';
if (v1 === null) {
  cfg1 = '';
}
if (v2 === null) {
  cfg2 = '';
}
if (v3 === null) {
  cfg3 = '';
}
v1 ?? (cfg1 = 'default-value');
v2 ?? (cfg2 = 'default-value');
v3 ?? (cfg3 = 'default-value');
console.log('cfg1: ', cfg1, ', cfg2: ', cfg2, ', cfg3: ', cfg3);
let tern1 = false;
let tern2 = false;
v1 ? (tern1 = true) : (tern1 = false);
v2 ? (tern2 = true) : (tern2 = false);
console.log('tern1: ', tern1, ', tern2: ', tern2);
const oc1 = v1?.value;
const oc2 = v5?.details?.address?.city;
console.log('oc1: ', oc1, ', oc2: ', oc2);
const sObj = { ...v1, foo: 'bar' };
console.log('sObj: ', sObj);
const sArr = [100, ...v4];
console.log('sArr: ', sArr);
