// WPU Coding Challange day 19/366
// www.codewars.com/kata/57eaeb9578748ff92a000009
// Keywords : Fundamental, String, Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

/*
function sumMix(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result += +x[i];
  }
  return result;
}

function sumMix(x) {
  return x.reduce((acc, curr) => acc + +curr, 0);
}
*/

const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);

console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
