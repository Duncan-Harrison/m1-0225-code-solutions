# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  Yes
- How do you add an element as a child to another element?
  document.element.appendChild()
- What do you pass as the arguments to the `element.setAttribute()` method?
  The arguments are the type of the attribute and the value assigned to that attribute
- What steps do you need to take in order to insert a new element into the page?
  You must create the DOM element with document.createElement(), set the attributes and properties for the new element, and then use appendChild() to apply the new element to its parent node.
- What is the `textContent` property of an element object for?
  The textContent property represents the actual text (string) held within the element.
- Name two ways to set the `class` attribute of a DOM element.
  You can set the class attribute by using the className method of that element or by using the setAttribute method and making the class the type of attribute built.
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  You can dynamically update a website based on the data available and you can update web pages automatically by submitting the new data to a prebuilt function.

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
