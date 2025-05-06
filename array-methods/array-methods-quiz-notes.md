# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?
    Array.forEach runs a callback function once for each element in the array.
  - What should the callback function do?
    The callback function should be able to apply to each element of the array without exception.
  - What is `Array.forEach` useful for?
    It is useful for recording the elements of the array or generating new values based on each of those elements.
- `Array.map`:
  - What does `Array.map` do?
    Array.map takes the elements of the array, runs them each through a callback function, and then produces a new array with the results.
  - What should the callback function return?
    The callback function should return a new array.
  - What is `Array.map` useful for?
    It is useful for creating a new array that stores the altered values without changing the original array.
- `Array.find`:
  - What does `Array.find` do?
    Array.find returns the value of the first element in the provided array that meets the testing function - or it returns undefined if not element matches the criteria.
  - What should the callback function return?
    The callback function should return the first element that meets the testing function's criteria.
  - What is `Array.find` useful for?
    It is useful for finding elements that meet a condition the rest of our code must account for.
- `Array.filter`:
  - What does `Array.filter` do?
    Array.filter takes the elements of an array that meets a callback function's criteria and returns a new array with just those elements.
  - What should the callback function return?
    The callback function should return a new array only containing elements from the first array that pass the callback function's test.
  - What is `Array.filter` useful for?
    It is useful for finding all elements in the original array that meet a condition the rest of our code must account for.

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
