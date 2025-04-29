# typescript-timers-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a "callback" function?
  A callback function is any function that is passed as an argument to another function. The callback is executed after the parent function has completed.
- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?
  You can use the setTimeout function to delay the execution of a function. Allow your function to be the callback function inside the setTimeout function, along with additional parameters, and your function will delay.
- How can you set up a function to be called repeatedly without using a loop?
  You can create a setInterval function and use your function as the callback function within it.
- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?
  0 milliseconds
- What do `setTimeout()` and `setInterval()` return?
  They return the callback function used as their first parameter.

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
