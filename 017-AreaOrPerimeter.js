// WPU Coding Challange day 17/366
// www.codewars.com/kata/5ab6538b379d20ad880000ab
// Keywords : Fundamental, Mathematic, Geometry

// You are given the length and width of a 4-sided polygon.
// The polygon can either be a rectangle or a square.
// If it is a square, return its area.
// If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

// Note: for the purposes of this kata you will assume that
// it is a square if its length and width are equal,
// otherwise it is a rectangle.

/*
const areaOrPerimeter = function (l, w) {
  let result = 0;
  if (l === w) {
    result = l * w;
  } else {
    result = 2 * (l + w);
  }
  return result;
};
*/

const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));
