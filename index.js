/* https://www.youtube.com/watch?v=AUTO7ALJk2U&t=2804s */

/* hoisting */
// function hoisting
myFunction();
function myFunction() {
  console.log("Hello");
}
// Output: Hello

// variable hoisting
x = 10;
console.log(x);
// Output: 10
var x;
/* hoisting */

/* type coercion */
let string = "42";
let number = 42;
let boolean = true;
let nullValue = null;

// type coercion => automatic conversion
console.log("string + number", string + number);
console.log("number + boolean", number + boolean);
console.log("number == string", number == string);
console.log("boolean == 1", boolean == 1);
console.log("boolean + nullValue", boolean + nullValue);
/* type coercion */

/* operator precedence */
let a = 6;
let b = 3;
let c = 2;

// bracketOf-division-multiplication-addition-subtraction
let result = a + b * c + (a - b);
console.log("result", result);
// Output: [15]
/* operator precedence */

/* spread operator */
// coping an array
let arraySpread = [1, 2, 3];
let copyArraySpread = [...arraySpread];
console.log("copyArraySpread", copyArraySpread);
// Output: [1, 2, 3]

// merging an array
let arraySpread1 = [1, 2, 3];
let arraySpread2 = [4, 5];
let mergedArraySpread = [...arraySpread1, ...arraySpread2];
console.log("mergedArraySpread", mergedArraySpread);
// Output: [1, 2, 3, 4, 5]

// data passing an array
let numbers = [1, 2, 3, 4, 5];
sum(...numbers);
function sum(a, b, c, d, e) {
  console.log("data passing Spread", a + b + c + d + e);
}
// Output: [15]
/* spread operator */

/* rest operator */
display(1, 2, 3, 4, 5);
function display(first, second, ...restArguments) {
  console.log("first", first);
  console.log("second", second);

  console.log("remaining", ...restArguments);
}
// Output: [1, 2, 3]
/* rest operator */

/* indexOf */
let arrayIndexOf = [1, 2, 3, 4, 5];
let indexOf = arrayIndexOf.indexOf(3);
console.log("indexOf", indexOf);
// Output: [2]
/* indexOf */

/* find */
let arrayFind = [1, 2, 3, 4, 5];
let find = arrayFind.find((num) => num % 2 === 0);
console.log("find", find);
// Output: [2]
/* find */

/* filter */
let arrayFilter = [1, 2, 3, 4, 5];
let filter = arrayFilter.filter((num) => num % 2 === 0);
console.log("filter", filter);
// Output: [2, 4]
/* filter */

/* push */
let arrayPush = [1, 2];
arrayPush.push(3, 4);
console.log("arrayPush", arrayPush);
// Output: [1, 2, 3, 4]
/* push */

/* push */
let arrayConcat1 = [5, 6];
let arrayConcat2 = arrayConcat1.concat(7, 8);
console.log("arrayConcat1", arrayConcat1);
// Output: [5,6]
console.log("arrayConcat2", arrayConcat2);
// Output: [5,6,7,8]
/* push */

/* pop */
let arrayPop = [1, 2, 3, 4];
console.log("arrayPop", arrayPop);
// Output: [1, 2, 3, 4]
let popped = arrayPop.pop();
console.log("popped", popped);
// Output: [4]
console.log("arrayPop", arrayPop);
// Output: [1, 2, 3]
/* pop */

/* shift */
let arrayShift = [1, 2, 3, 4];
console.log("arrayShift", arrayShift);
// Output: [1, 2, 3, 4]
let shifted = arrayShift.shift();
console.log("shifted", shifted);
// Output: [1]
console.log("arrayShift", arrayShift);
// Output: [2, 3, 4]
/* shift */

/* slice */
let array = ["a", "b", "c", "d", "e"];
let e = array.slice(1, 4);
console.log("array", array);
// Output: ["a", "b", "c", "d", "e"]
console.log("e", e);
// Output: ["b", "c", "d"]
/* slice */

/* splice */
let letters = ["a", "b", "c"];

// Add 'x' and 'y' at index 1
letters.splice(1, 0, "x", "y");
console.log("letters", letters);
// Output: ['a', 'x', 'y', 'b', 'c']

// Removes 1 element starting from index 1
letters.splice(1, 1);
console.log("letters", letters);
// Output: ['a', 'y', 'b', 'c']

// Replaces the element at index 2 with 'q'
letters.splice(2, 1, "q");
console.log("letters", letters);
// Output: ['a', 'y', 'b', 'c']
/* splice */

/* map */
let arr1 = [1, 2, 3];
let mapArray = arr1.map((e) => e * 2);
console.log("mapArray", mapArray);
// Output: [2, 4, 6] // map return a new array
/* map */

/* forEach */
let arr2 = [1, 2, 3];
arr2.forEach((e) => {
  console.log(e * 2);
});
console.log("arr2", arr2);
// Output: [1, 2, 3] // forEach does not return any thing
/* forEach */

/* array-like object */
// Example array-like object
var arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };

// Using Array.form()
var array1 = Array.from(arrayLike);
console.log("array1", array1);

// Using Array.form()
// var array2 = [...arrayLike];
// console.log("array2", array2);

// Using Array.prototype.slice.call
var array3 = Array.prototype.slice.call(arrayLike);
console.log("array3", array3);
/* array-like object */

/* for ... of */
let arr = [1, 2, 3];
for (let val of arr) {
  console.log(val);
}
// Output: [1, 2, 3]
/* for ... of */

/* for ... in */
const person = {
  name: "Happy",
  role: "Developer",
};

for (let key in person) {
  console.log(person[key]);
}
// Output: Happy Developer
/* for ... in */

/* forEach method */
let arr3 = [1, 2, 3];
arr3.forEach(function (item) {
  console.log(item);
});
// output: 1 2 3

const person2 = {
  name: "Happy",
  role: "Developer",
};

Object.values(person2).forEach((value) => {
  console.log(value);
});
// Output: Happy Developer
/* forEach method */
