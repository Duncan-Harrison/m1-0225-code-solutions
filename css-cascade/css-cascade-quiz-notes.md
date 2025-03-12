# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".
  Source order, inheritance,
- What does the term "source order" mean with respect to CSS?
  Whichever styling was written / applied last (from top to bottom of the CSS file) takes precedence over competing styling rules.
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  The inheritance property automatically gives the styling of a parent element to all its children unless those children are given different styling.
- List the three selector types in order of increasing specificity.
  There are more than 3 selectors: Universal selectors, Element and psuedo-element selectors, class / pseudo-class / attribute selectors, and ID selectors. There are even more if we count HTML inline styles.
- Why is using `!important` considered bad practice?
  !important disrupts the natural flow of cascading styles and it can easily cause confusion if used more than once.

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
