// WPU Coding Challange day 39/366
// www.codewars.com/kata/58261acb22be6e2ed800003a
// Keywords : Fundamental, Mathematic, Geometry

// Bob needs a fast way to calculate the volume of a cuboid
// with three values: the length, width and height of the cuboid.
// Write a function to help Bob with this calculation.

/*
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

function getVolumeOfCuboid(length, width, height) {
  return length * width * height;
}
*/

const getVolumeOfCuboid = (length, width, height) => length * width * height;

console.log(getVolumeOfCuboid(1, 2, 2));
