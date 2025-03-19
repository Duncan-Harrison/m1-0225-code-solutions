# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  We log things into the console to test our JS/TS code and ensure it is working as intended.
- What is the purpose of events and event handling?
  Event handling enables a callback function to run when something happens, whereas the event is an object containing information about the specified thing has happened.
- Are all possible parameters required to use a JavaScript method or function?
  No, because these methods and functions sometimes return null results.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  element.addEventListener()
- What is a callback function?
  A callback function is a function passed into another function to be called at a later time.
- What object is passed into an event listener callback when the event fires?
  The event object is passed into an event listener.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The event.target is the element that fired the event. You could check with console.log('event.target', event.target) and get even more information from the event object, often with console.log('event', event)
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The first line of code actually works as intended because is saves the function to be called later. The second line of code, by calling the function immediately with the extra parentheses, prevents the actual "addEventListener" method from being called.

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
