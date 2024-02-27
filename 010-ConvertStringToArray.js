// WPU Coding Challange day 10/366
// www.codewars.com/kata/5672a98bdbdd995fad00000f
// Keywords : Array, String, Fundamental

// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

/*
function stringToArray(string) {
  return string.split(" ");
}
*/

const stringToArray = (string) => string.split(" ");

console.log(stringToArray(""));
console.log(stringToArray("I love arrays they are my favorite"));
