/**
 * Simulates a network call by delaying for one second and returning a message.
 * If `doResolve` is truthy, it will resolve the Promise, otherwise it will reject.
 * Uses `setTimeout` to mimic a slow network connection.
 */
// eslint-disable-next-line @typescript-eslint/typedef
export function read(url: string, doResolve = true): Promise<string> {
  return new Promise((resolve, reject) => {
    return setTimeout(
      () =>
        doResolve
          ? resolve(`read ${url}`)
          : reject(new Error(`rejected ${url}`)),
      1000
    );
  });
}
