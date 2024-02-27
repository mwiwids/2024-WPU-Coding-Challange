// WPU Coding Challange day 12/366
// www.codewars.com/kata/5a2be17aee1aaefe2a000151
// Keywords : Array, Debugging, Fundamental

// I'm new to coding and now I want to get the sum of two arrays...
// Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

/*
function arrayPlusArray(arr1, arr2) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    result += arr2[i];
  }
  return result;
}

function arrayPlusArray(arr1, arr2) {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      result += arguments[i][j];
    }
  }
  return result;
}

const arrayPlusArray = (arr1, arr2) =>
  arr1.reduce((accu, curr) => accu + curr) +
  arr2.reduce((accu, curr) => accu + curr);
*/

const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((acc, curr) => acc + curr);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
