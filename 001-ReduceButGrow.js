// WPU Coding Challange day 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

// Given a non-empty array of integers, return the result of multiplying the values together in order.
// Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Keywords : Array, Reduce, Fundamental

/*
function grow(x) {
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}


// Higher order function Reduce
function grow(x) {
  return (result = x.reduce((accumulator, current_value) => {
    return accumulator * current_value;
  }));
}
*/

// Function Expression
const grow = (x) => x.reduce((accu, curr) => accu * curr);

console.log(grow([1, 2, 3, 4]));
