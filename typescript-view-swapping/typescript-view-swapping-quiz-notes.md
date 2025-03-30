# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The event.target is the element on which the event was triggered.
- What is the effect of setting an element to `display: none`?
  The element will not be seen on the live page.
- What does the `element.matches()` method take as an argument and what does it return?
  It takes an element and an element selector and then returns a boolean value regarding whether the element and element selector match.
- How can you retrieve the value of an element's attribute?
  You can use element.getAttribute('attribute') to retrieve the attribute's value
- At what steps of the solution would it be helpful to log things to the console?
  It would be helpful at each step when you would use the matches method or dataset property. You could also log things to the console when you build functions related to these methods and properties.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  Your typescript code would need an event listener on each possible item that could trigger the event in question.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  Your typescript code would have to check each item in a nodelist to determine whether the content should be hidden or viewed.

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
