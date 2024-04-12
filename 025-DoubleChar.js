// WPU Coding Challange day 25/366
// www.codewars.com/kata/56b1f01c247c01db92000076
// Keywords : Fundamental, String

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

/*
function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}

function doubleChar(str) {
  return str
    .split("")
    .map((el) => el + el)
    .join("");
}
*/

const doubleChar = (str) =>
  str
    .split("")
    .map((el) => el + el)
    .join("");

console.log(doubleChar("String"));
console.log(doubleChar("abcd"));
console.log(doubleChar("Hello World"));
console.log(doubleChar("1234!_ "));
