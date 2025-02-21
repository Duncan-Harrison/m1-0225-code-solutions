/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const res: unknown[] = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk: unknown[] = [];
    for (let j = i; j < i + size && j < array.length; j++) {
      chunk.push(array[j]);
    }
    res.push(chunk);
  }
  return res;
}
