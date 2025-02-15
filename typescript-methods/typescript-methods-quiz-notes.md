# typescript-methods-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  We log things to the console to test our code in real time, thereby preventing larger, more expensive and time-consuming errors from happening.
- What is a method?
  A method is a function that is attached to an object as a property.
- How is a method different from any other function?
  Methods are attached to objects as properties, so they require an established object and dot notation to be called. Also, because they are properties of established objects, they do not have to be defined before you call them.
- How do you remove the last element from an array?
  You can use arr.pop() to remove the last element of an array.
- How do you round a number down to the nearest integer?
  If you are specifically rounding downward to the nearest integer, use Math.floor() as your method. Otherwise, Math.round() rounds a number to the nearest integer, increasing or decreasing the number as required.
- How do you generate a random number?
  You can use Math.random() to generate a random number between 0 and 1. You would need to build an additional function to change that random number to a different range (ex.: between 1 and 10).
- How do you delete an element from an array?
  You can delete an element from an array by using arr.pop() for the last element, arr.shift() for the first element, or arr.splice() without a third argument [item 1, item 2, etc.].
- How do you append an element to an array?
  You can use arr.push() to append an element.
- How do you break a string up into an array?
  You can use the str.split() method with a specified separator string [str.split(' ')].
- Do string methods change the original string? How would you check if you weren't sure?
  String methods do not change the original string because strings are immutable. You can check by assigning the original string to a different variable and then calling that variable with the log method of the console object.
- Is the return value of a function or method useful in every situation?
  The return value is often useful for functions and methods, but because methods are properties of established objects, the methods may not need the return value defined all the time.
- How do you get a collection of an objects keys?
  Object.keys()
- How do you get a collection of an objects values?
  Object.values()
- How do you get a collection of both an objects keys and values?
  object.entries(), which will provide the keys and values paired into individual arrays.

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
