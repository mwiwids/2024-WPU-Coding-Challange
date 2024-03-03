// WPU Coding Challange day 16/366
// www.codewars.com/kata/563e320cee5dddcf77000158
// Keywords : Array, Alghortitm

// It's the academic year's end, fateful moment of your school report.
// The averages must be calculated. All the students come to you and entreat you
// to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

/*
function getAverage(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return Math.floor(total / marks.length);
}
*/

const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);

console.log(getAverage([1, 2, 3, 4]));
