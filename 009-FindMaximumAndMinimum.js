// WPU Coding Challange day 9/366
// www.codewars.com/kata/5b077ebdaf15be5c7f000077

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// Notes : You may consider that there will not be any empty arrays/vectors.
// Keywords : Fundamental

/*
var min = function (list) {
  let minm = 0;
  for (let i = 1; i < list.length; i++) {
    if (list[i] < list[i - 1]) {
      minm = i;
    }
  }
  return list[minm];
};

var max = function (list) {
  let maxm = 0;
  for (let i = 1; i < list.length; i++) {
    if (list[i] > list[i - 1]) {
      maxm = i;
    }
  }
  return list[maxm];
};

const min = (list) => list.sort((a, b) => a - b)[0];
const max = (list) => list.sort((a, b) => b - a)[0];
*/

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([5]));
