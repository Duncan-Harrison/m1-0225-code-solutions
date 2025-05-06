# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && tests if two statement are both true, while || tests if at least one of the statements are true. You can use these to create code that only runs if the logical AND or logical OR statement produces a true result.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short-circuit evaluation looks at && and || to see if the left-hand expression is falsy or true before evaluating the right-hand expression. If falsy, the right-hand expression of && will not run at all. If true, the right-hand expression of || will not run.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  ?? checks if at least one of the operators is true but still functions if the other operator has a falsy value in its expression like null, 0, or undefined. This is similar to ||, but the logical OR will not run if the values within the expression are falsy.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ?: checks if either of a pair of simple statements is true. It functions like a simplified if/else statement, but it only works if there are two conditions. More conditions would still require an if/else syntax.
- What is the `?.` (optional chaining) operator? When would you use it?
  ?. allows you to safely access properties on objects that might not exist, preventing runtime errors due to null or undefined values. You use this to return an undefined value from an operation rather than produce an error.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  ... closes or merges objects and arrays. You use it to combine multiple objects or arrays into a single item or to pass an array of objects into a function.
- What data types can be spread into an array? Into an object?
  All primitives can be spread into objects, and only iterable values can be spread into arrays.
- How does spread syntax differ from rest syntax?
  Spread syntax expands the array into its elements, while rest syntax condenses multiple elements into one element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
