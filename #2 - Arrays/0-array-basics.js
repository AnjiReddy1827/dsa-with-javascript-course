// Arrays in Javascript

// Decalaration
let person = {
  name: "Piyush",
  age: 25,
};

let arr = ["apple", "banana", "cherry", person];

console.log(arr.length); // know the length of an array

// # Add and Remove Elements

// Add to End of the Array
arr.push("orange");

// Remove From End of the Array
arr.pop();
arr.pop();

// Add to Top of the Array
arr.unshift("orange");

// Remove From Top of the Array
arr.shift();

// # Looping Arrays

// For Loop
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// While Loop
let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);

  i++;
}

// # Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in javascript
numbers.map((item, index, array) => {
  return item + 5;
});

// filter in javascript
numbers.filter((item, index, array) => {
  return item > 3;
});

// reduce in javascript
numbers.reduce((prev, item) => {
  return prev + item;
}, 2);

// some in javascript
numbers.some((item, index, array) => {
  return item > 3;
});

// every in javascript
numbers.every((item, index, array) => {
  return item < 10;
});

// find in javascript
numbers.find((item, index, array) => {
  return item > 3;
});

// findIndex
const index = [1, 2, 3].findIndex((item) => item === 2);
// console.log(index);

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; // Spread Operator

// Rest Operator
function sum(...numbers) {
  return numbers;
}

console.log(sum(nums, nums2, 5, "hello"));

// # More Array Methods

// concat
nums.concat(nums2, arr);

// Slice
arr.slice(-2);

// Splice
arr.splice(1, 2, "orange");

// Fill
const dummy = [2, 5, 1, 6];
dummy.fill(2, 2);

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]

const flattenedArray = flatEx.flat(2);
// console.log(flattenedArray);

// reverse
nums.reverse();
// console.log(nums);

// sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => b - a);
console.log(unsorted);
//
1. includes() Method
Checks if an array contains a certain value.

const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true
2. indexOf() and lastIndexOf()
Returns the index of the first/last occurrence of a value.

const values = [1, 2, 3, 2];
console.log(values.indexOf(2)); // 1
console.log(values.lastIndexOf(2)); // 3
3. forEach()
Loops through each item (similar to map but doesn't return a new array).


numbers.forEach((item, index) => {
  console.log(`Index: ${index}, Value: ${item}`);
});
4. Array.isArray()
Check if a value is an array.

console.log(Array.isArray(arr)); // true
5. copyWithin()
Copies part of the array to another location within the same array.

const example = [1, 2, 3, 4, 5];
example.copyWithin(0, 3); // copies from index 3 to start
console.log(example); // [4, 5, 3, 4, 5]
6. from() and of() Static Methods
Create arrays from array-like or iterable objects.

const str = "hello";
console.log(Array.from(str)); // ['h','e','l','l','o']

console.log(Array.of(1, 2, 3)); // [1, 2, 3]
7. Chaining Methods Example
Using filter, map, and reduce together:

const result = numbers
  .filter((num) => num > 2)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);
console.log(result);

8. findLast() and findLastIndex() (ES2023+)
Finds the last element (or index) in the array that satisfies the given condition.

const data = [1, 3, 5, 8, 10];

const lastEven = data.findLast(num => num % 2 === 0); // 10
const lastEvenIndex = data.findLastIndex(num => num % 2 === 0); // 4

console.log(lastEven, lastEvenIndex);
9. toSorted(), toReversed(), toSpliced() (Immutable versions)
These methods return a new array without modifying the original.

const original = [3, 1, 2];
const sorted = original.toSorted(); // [1, 2, 3]
console.log(original); // [3, 1, 2]

const reversed = original.toReversed(); // [2, 1, 3]
