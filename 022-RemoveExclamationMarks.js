// WPU Coding Challange day 22/366
// www.codewars.com/kata/57a0885cbb9944e24c00008e
// Keywords : Fundamental, String

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

/*
function removeExclamationMarks(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") result += s[i];
  }
  return result;
}

function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}
*/

const removeExclamationMarks = (s) => s.replaceAll("!", "");

console.log(removeExclamationMarks("Hello World!"));
