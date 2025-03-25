# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The event.target is the element that fired the event being measured.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Event bubbling makes it possible. This feature of code allows events to ripple up from descendent element to parent element, all the way to the HTML root element.
- What DOM element property tells you what type of element it is?
  tagName
- What does the `element.closest()` method take as its argument and what does it return?
  element.closest() takes a CSS element selector for the element and its parent as the argument. It returns the closest ancestor element that meets the parameters or the original element object itself.
- How can you remove an element from the DOM?
  You can use element.remove() to remove the element object that the remove method was called upon.
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  You can add the event listener to the parent node of all elements you want to make clickable.

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
