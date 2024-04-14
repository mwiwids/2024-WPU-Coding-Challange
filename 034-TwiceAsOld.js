// WPU Coding Challange day 34/366
// www.codewars.www.codewars.com/kata/5b853229cfde412a470000d0
// Keywords : Fundamental, Mathematic

// Your function takes two arguments:

// 1. current father's age (years)
// 2. current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son
// (or in how many years he will be twice as old).
// The answer is always greater or equal to 0,
// no matter if it was in the past or it is in the future.

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   for (let i = 0; i < sonYearsOld; i++) {
//     if (dadYearsOld - i === 2 * (sonYearsOld - i)) return i;
//   }
//   let i = 0;
//   while (dadYearsOld + i !== 2 * (sonYearsOld + i)) {
//     i++;
//   }
//   return i;
// }

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   let i = 0;
//   while (dadYearsOld + i !== 2 * (sonYearsOld + i)) {
//     if (sonYearsOld > i && dadYearsOld - i === 2 * (sonYearsOld - i)) return i;
//     else i++;
//   }
//   return i;
// }

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - sonYearsOld * 2);
// }

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
