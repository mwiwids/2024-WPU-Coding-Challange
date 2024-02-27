// WPU Coding Challange day 11/366
// www.codewars.com/kata/5672a98bdbdd995fad00000f
// Keywords : Fundamental

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

/*
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  else if (
    (p1 === "rock" && p2 === "paper") ||
    (p1 === "paper" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "rock")
  )
    return "Player 2 won!";
  else return "Player 1 won!";
};

//Ternary
const rps = (p1, p2) =>
  p1 === p2
    ? "Draw!"
    : (p1 === "rock" && p2 === "paper") ||
      (p1 === "paper" && p2 === "scissors") ||
      (p1 === "scissors" && p2 === "rock")
    ? "Player 2 won!"
    : "Player 1 won!";
*/

const rps = (p1, p2) => {
  const rules = { rock: "paper", paper: "scissors", scissors: "rock" };
  return p1 === p2 ? "Draw!" : `Player ${rules[p1] === p2 ? 2 : 1} won!`;
};

console.log(rps("scissors", "paper"));
console.log(rps("scissors", "rock"));
console.log(rps("paper", "paper"));

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "paper"));
console.log(rps("paper", "rock"));

console.log(rps("scissors", "rock"));
console.log(rps("paper", "scissors"));
console.log(rps("rock", "paper"));

console.log(rps("rock", "rock"));
console.log(rps("scissors", "scissors"));
console.log(rps("paper", "paper"));
