# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To confirm our javascript / typescript code is working correctly.
- What is a "model"?
  A model is a data structure.
- Which "document" is being referred to in the phrase Document Object Model?
  The document is the html file that feeds into the webpage.
- What is the word "object" referring to in the phrase Document Object Model?
  The object is each element used inside the html file.
- What is a DOM Tree?
  The DOM Tree is a sorted structure showing how all elements are related to each other in the document.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector() and document.getElementById()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.getElementsbyClassName()
- Why might you want to assign the return value of a DOM query to a variable?
  Assigning the return value allows the information to be recalled at a later time quickly. Otherwise, querying the DOM would take forever.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  Javascript and the DOM querying we do with Javascript needs to have all HTML content already parsed by the browser before it can effectively query and interact with the HTML.
- What does `document.querySelector()` take as its argument and what does it return?
  It takes the very first element that meets the specified CSS selector and returns that element.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes all elements that meet the specified CSS selector and returns a node list of all those elements.

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
