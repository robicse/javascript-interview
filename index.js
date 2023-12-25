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

/* Named Function */
function add(a, b) {
  return a + b;
}
console.log("Named Function", add(5, 3));
// Output: 8
/* Named Function */

/* Anonymous Function */
console.log(
  (function add(a, b) {
    return a + b;
  })(8, 3)
);
// Output: 11
/* Anonymous Function */

/* Function expression */
// Anonymous Function expression
var add = function (a, b) {
  return a + b;
};
console.log("Anonymous Function expression", add(5, 3));
// Output: 8
/* Function expression */

/* Arrow Function */
// Anonymous Function expression
const add2 = (a, b) => a + b;
console.log("Arrow Function", add2(5, 3));
// Output: 8
/* Arrow Function*/

/* Callback Function */

// function
// 1st example
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Peter", callMe);

// 2nd example
function displayCallback(x, y, Callback) {
  // console.log("sum from function", x + y);
  var result = Callback(x, y);
  console.log("result from callback function", result);
}

// callback function
function addCallMe(x, y) {
  // console.log("I am callback function", x + y);
  return x + y;
}

// callback function
function multiplyCallMe(x, y) {
  // console.log("I am callback function", x + y);
  return x * y;
}

// passing function as an argument
displayCallback(5, 3, addCallMe);
displayCallback(5, 3, multiplyCallMe);
/* Callback Function */

/* Higher Order Function */
// 1st example
// take one or more functions as arguments
function hof(func) {
  func();
}

hof(sayHello);

function sayHello() {
  console.log("function call from HOF", "Hello");
}

// 2nd example
// Return a function as a result
function createAdder(number) {
  return function (value) {
    return value + number;
  };
}

const addFive = createAdder(5);

console.log(addFive(2));
/* Higher Order Function */

/* parameters and arguments */
// a and b are parameters
function add(a, b) {
  console.log(a + b);
}

// 3 and 4 are arguments
add(3, 4);
/* parameters and arguments */

/* pass arguments */
function add3(a, b) {
  console.log(a + b);
}

// positional arguments
add3(3, 4);

// named arguments
var person3 = {
  name: "Happy",
  role: "Developer",
};

function greet3(person) {
  console.log(person.name + " " + person.role);
}

greet3(person3);

// arguments object
sum3(1, 2, 3);
function sum3() {
  console.log(arguments[0]);
  // Output: 1
  console.log(arguments[1]);
  // Output: 2
  console.log(arguments[2]);
  // Output: 3
  console.log(arguments.length);
  // Output: 3
}
/* pass arguments */

/* pure and impure function */
// pure function
function add4(a, b) {
  return a + b;
}

console.log(add(3, 5));
// Output: 8

console.log(add(3, 5));
// Output: 8

// impure function
let total = 0;
function addTotalValue(value) {
  total += value;
  return total;
}

console.log(addTotalValue(5));
// Output: 5

console.log(addTotalValue(5));
// Output: 10
/* pure and impure function */

/* call, apply and bind method */
// defining a function that uses the "this" context and an argument
function sayHello5(message) {
  console.log(`${message}, ${this.name}!`);
}
const person5 = { name: "Happy" };

// 1. call - using the "call" method to invoke the function
// with a specific context and argument
sayHello5.call(person, "Hello");
// Output: "Hello, Happy"

// 2. apply - Using the "apply" method to invoke the function
// with a specific context and an array of arguments
sayHello5.apply(person5, ["Hi"]);

//3. bind - using the "bind" method to create a new function
// with a specific context (not invoking it immediately)
const greetPerson = sayHello5.bind(person);
greetPerson("Greetings");
/* call, apply and bind method */

/* template literals and string interpolation */
// Backticks (`)
// Template literals with string interpolation
var myName = "Happy";
var str3 = `Hello ${myName}`;
console.log(str3);
// output: Hello Happy

// Backticks (`)
// Template literals with multiple strings
var multilineStr = `
This is a 
multiline string.
`;

// Add multiple string
let str1 = "Hello";
let str2 = "World";
let result6 = str1 + " " + str2;
console.log(result6);
// Output: Hello World

// Using concat() method
let result7 = str1.concat(" ", str2);
console.log(result7);
// Output: Hello World

// Extract a portion of a string
let subString = result6.substring(6, 11);
console.log(subString);
// Output: World

// Retrieve the length of a string
console.log(result6.length);
// Output: 11

// Convert a string to uppercase or lowercase
console.log(result6.toUpperCase());
// Output: HELLO WORLD

console.log(result6.toLowerCase());
// Output: hello world

// Split a string into an array of substrings
// based on a delimiter
let arr6 = result6.split(" ");
console.log(arr6);
// Output: ["Hello", "World"]

// Replace occurrences of a substring within a string
console.log(result6.replace("World", "Javascript"));
// Output: Hello Javascript

// Remove leading and trailing whitespace
let str = " Hello World ";
let trimmedStr = str.trim();
console.log(trimmedStr);

/* template literals and string interpolation */

/* types of errors */
/* syntax error */
// console.log("Hello, World"
// Output: missing closing parenthesis
/* syntax error */

/* reference error */
//console.log(myVariable)
// myVariable is not defined
/* reference error */

/* Type Error*/
// const number6 = 42
// console.log(number6.toUpperCase());
// number.toUpperCase is not a function
/* Type Error*/

/* Range Error */
// const arr7 = [1,2,3];
// console.log(arr7[10])
// index 10 is out of bounds
/* Range Error */

/* types of errors */

/* Object */
// 1. string/number/boolean/null/undefined
// 2. array
// 3. function
// 4. object
let person6 = {
  name:"Happy",
  hobbies: ["Teaching", "coding"],
  greet: function(){
    console.log("name:" + this.name)
  }
}

console.log(person6.name)
// Output: Happy

console.log(person6.hobbies[1])
// Output: "coding"

person6.greet();
// Output: "Name: Happy"
/* Object */

/* Ways to create and initialize an object */
// Object literal
var person7 = {
  name: "Happy",
  age: 38,
  role: "Trainer"
};
console.log(person7)

// Object constructor
var person8 = new Object();
person8.name = "Happy";
person8.age = 38;
person8.role = "Trainer";
console.log(person8)

// Object.create() method
var person9 = {
  name: "",
  age: 0,
  role: ""
};
var men = Object.create(person9);
men.name = "Happy";
men.age = 38;
men.role = "Trainer";
console.log(men)
/* Ways to create and initialize an object */

/* add or modify or delete properties of an object */
// blank object
var person10 = {};
// Adding properties
person10.name = "Happy";
person10.age = 35;
person10.country = "India";
// modifying properties
person10.age = 30;
// deleting properties
delete person10.age;
console.log(person10);
/* add or modify or delete properties of an object */

/* iterate over the properties of an object */
var person11 = {
  name: "Joan",
  age: 30
}
// 1. using for...in loop
for(let prop in person11){
  console.log(prop + ": " + person11[prop]);
}
// Output: name: Joan age: 30
// 2. using object.keys() and forEach()
Object.keys(person11).forEach((prop) => {
  console.log(prop + ": " + person11[prop])
})
// Output: name: Joan age: 30
// 3. using object.keys() and forEach()
Object.values(person11).forEach((value) => {
  console.log(value);
})
// Output: name: Joan age: 30
/* iterate over the properties of an object */

/* Set Object */
// Creating a set to store unique numbers
const uniqueNumbers = new Set();
uniqueNumbers.add(5);
uniqueNumbers.add(10);
uniqueNumbers.add(5);
console.log(uniqueNumbers);
// Output: 5, 10
//check size
console.log(uniqueNumbers.size);
// Output: 2
//check element existence
console.log(uniqueNumbers.has(10));
// Output: true
uniqueNumbers.delete(10);
console.log(uniqueNumbers.size);
// Output: 1
// set can be used to remove
// duplicate values from arrays
let myArr = [1,4,3,4];
let mySet = new Set(myArr);

let uniqueArray = [...mySet];
console.log(uniqueArray);
// Output: [1,4,3]
/* Set Object */

/* map */
const personDetails = new Map();
personDetails.set("name", "Alice");
personDetails.set("age",30);

console.log(personDetails.get("name"));
// Output: "Alice"

console.log(personDetails.has("age"));
// Output: true

personDetails.delete("age");
console.log(personDetails.size)
// Output: 1

/* map */