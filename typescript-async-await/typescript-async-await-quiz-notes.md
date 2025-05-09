# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  The async and await keywords are used to run asynchronous code after the work of the rest of the code is complete.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async and Await allow the code to be read sequentially despite being asynchronous code.
- When do you use `async`?
  You use async to define an asynchronous function.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use await before a function within the async function so that the dependent function runs once the promise is settled.
- How do you handle errors with `await`?
  You use the try...catch block to handle errors with await.
- What do `try`, `catch` and `throw` do? When do you use them?
  Try announces the start of the try...catch block. You use it to create the space for the promise to be resolved or rejected. Throw allows you to add additional errors for factors outside the promise that may prevent the async function from running. You use it to cover all your bases. Catch resolves the code if the promise is rejected. You use it to run the error result of the rejection.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If you forget 'await', you will not receive the notification message that the promise was resolved or rejected. You may not even know if the promise was rejected without manually checking for its rejection.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
