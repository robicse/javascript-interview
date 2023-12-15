/* https://www.youtube.com/watch?v=AUTO7ALJk2U&t=2804s */

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
