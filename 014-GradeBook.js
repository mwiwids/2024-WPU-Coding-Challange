// WPU Coding Challange day 14/366
// www.codewars.com/kata/55cbd4ba903825f7970000f5
// Keywords : Fundamental

// Grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	    'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

/*
function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;

  return avg < 60
    ? "F"
    : avg < 70
    ? "D"
    : avg < 80
    ? "C"
    : avg < 90
    ? "B"
    : "A";
}
*/

// jumlah nilai dinamis
function getGrade(...s) {
  const avg = s.reduce((acc, curr) => acc + curr) / s.length;

  return avg < 60
    ? "F"
    : avg < 70
    ? "D"
    : avg < 80
    ? "C"
    : avg < 90
    ? "B"
    : "A";
}

console.log(getGrade(90, 90, 100));
