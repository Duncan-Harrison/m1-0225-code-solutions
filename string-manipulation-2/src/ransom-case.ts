/* exported ransomCase */
function ransomCase(str: string): string {
  let res: string = '';
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      res += str[i];
    } else {
      res += str[i].toUpperCase();
    }
  }
  return res;
}
// remove res
// use str.toLowerCase().split('') to create an array
// for (let i=1; i < strArray.length; i +=2) so that we run though a simple loop that uppercases every other letter
// use return strArray.join('') to change our array back into a string with the proper changes saved
