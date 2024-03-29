// WPU Coding Challange day 15/366
// www.codewars.com/kata/576b93db1129fcf2200001e6
// Keywords : Fundamental

// Sum all the numbers of a given array ( cq. list ),
// except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge,
// even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array,
// or the given array is an empty list or a list with only 1 element, return 0.

/*
function sumArray(array) {
  if (array === null || array.length <= 2) return 0;
  array.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < array.length - 1; i++) {
    result += array[i];
  }
  return result;
}


function sumArray(array) {
  if (array === null) return 0;
  array.sort((a, b) => a - b);
  array.pop();
  array.shift();
  return array.reduce((acc, curr) => acc + curr, 0);
}


function sumArray(array) {
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr, 0);
}
*/

const sumArray = (array) =>
  array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr, 0)
    : 0;

console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
