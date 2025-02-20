/* exported numVowels */
function numVowels(str: string): number {
  const Array: string[] = str.split('');
  let vowel: number = 0;
  for (const s of Array) {
    if (s === 'a' || s === 'A') {
      vowel += 1;
    } else if (s === 'e' || s === 'E') {
      vowel += 1;
    } else if (s === 'i' || s === 'I') {
      vowel += 1;
    } else if (s === 'o' || s === 'O') {
      vowel += 1;
    } else if (s === 'u' || s === 'U') {
      vowel += 1;
    } else {
      vowel += 0;
    }
  }
  return vowel;
}
