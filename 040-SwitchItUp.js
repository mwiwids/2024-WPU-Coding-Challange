// WPU Coding Challange day 40/366
// www.codewars.com/kata/5808dcb8f0ed42ae34000031
// Keywords : Fundamental

// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

/*
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}

function switchItUp(number) {
  return {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  }[number];
}


const switchItUp = (number) =>
  ({
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  }[number]);
*/

switchItUp = (number) =>
  [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ][number];

console.log(switchItUp(0));
