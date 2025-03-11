# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  Static Position (stuck within the initial containing block)
- How does setting `position: relative` on an element affect document flow?
  The document will maintain a spot for the relative element, regardless if the other rules have shifted it out of place.
- How does setting `position: relative` on an element affect where it appears on the page?
  The relative element can be shifted out of its spot in the document and overlap the other elements.
- How does setting `position: absolute` on an element affect document flow?
  Absolute positioning eliminates the spot in the document that was previously occupied by the element.
- How does setting `position: absolute` on an element affect where it appears on the page?
  The element is shifted to overlap the other content, unless you use the z-axis property to move it below the other elements instead.
- How do you constrain an absolutely positioned element to a containing block?
  You assign relative positioning to an ancestor block of the absolutey positioned element.
- What are the four box offset properties?
  Top, Right, Bottom, Left

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
