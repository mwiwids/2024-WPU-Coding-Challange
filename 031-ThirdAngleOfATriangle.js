// WPU Coding Challange day 31/366
// www.codewars.com/kata/5a023c426975981341000014
// Keywords : Fundamental

// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

// function otherAngle(a, b) {
//   return 180 - a - b;
// }

const otherAngle = (a, b) => 180 - a - b;

console.log(otherAngle(90, 45));
