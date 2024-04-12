// WPU Coding Challange day 26/366
// www.codewars.com/kata/58649884a1659ed6cb000072
// Keywords : Fundamental

// You're writing code to control your town's traffic lights.
// You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument
// representing the current state of the light
// and returns a string representing the state the light should change to.

// For example:
// when the input is green, output should be yellow.

/*
function updateLight(current) {
  if (current === "green") return "yellow";
  else if (current === "yellow") return "red";
  else return "green";
}

function updateLight(current) {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : "green";
}
*/

const updateLight = (current) =>
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

/*
const rules = { green: "yellow", yellow: "red", red: "green" };
function updateLight(current) {
  return rules[current];
}

const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
  }
}
*/

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
