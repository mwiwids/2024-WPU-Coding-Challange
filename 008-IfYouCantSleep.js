// WPU Coding Challange day 8/366
// www.codewars.com/kata/5b077ebdaf15be5c7f000077

// Given a non-negative integer, 3 for example, return a string with
// a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid,
// i.e. no negative integers.

// Keywords : String, Fundamental

/*
var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i + " sheep...";
  }
  return result;
};

// String Literal
var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};

var countSheep = function (num) {
  return Array(num)
    .fill()
    .map((_, i) => (i+1) + " sheep...")
    .join("");
};

const countSheep = (num) =>
  Array(num)
    .fill()
    .map((_, i) => i + 1 + " sheep...")
    .join("");
*/

const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
