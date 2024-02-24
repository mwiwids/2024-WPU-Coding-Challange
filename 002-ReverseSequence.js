// WPU Coding Challange day 2/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078/

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// Keywords : Array, Map, Fundamental

/*
const reverseSeq = (n) => {
  const a = [];
  for (let i = n; i > 0; i--) {
    a.push(i);
  }
  return a;
};
*/

const reverseSeq = (n) =>
  Array(n)
    .fill()
    .map((_, i) => n - i);

console.log(reverseSeq(5));
