// WPU Coding Challange day 29/366
// www.codewars.com/kata/5769b3802ae6f8e4890009d2
// Keywords : Fundamental, Array, List

// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

/*
function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

function removeEveryOther(arr) {
  return arr.filter((_, i) => i % 2 === 0);
}
*/

const removeEveryOther = (arr) => arr.filter((_, i) => i % 2 === 0);

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
console.log(removeEveryOther([1, 2, 3, 4, 5]));
