// WPU Coding Challange day 18/366
// www.codewars.com/kata/5772da22b89313a4d50012f7
// Keywords : Fundamental, String

// Create a function that gives a personalized greeting. This function takes two parameters: 'name' and 'owner'.

// Use conditionals to return the proper message:
// case 	            return
// name equals owner 	'Hello boss'
// otherwise 	        'Hello guest'

/*
function greet(name, owner) {
  if (name == owner) return "Hello boss";
  else return "Hello guest";
}
*/

const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

// const greet = (name, owner) => "Hello " + (name === owner ? "boss" : "guest");

console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));
