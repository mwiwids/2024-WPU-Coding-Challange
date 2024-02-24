// WPU Coding Challange day 4/366
// www.codewars.com/kata/53dc23c68a0c93699800041d/

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example :
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

/*
function smash(words) {
  if (words.length == 0) {
    return "";
  } else {
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
      const element = words[i];
      result += " " + element;
    }
    return result;
  }
}

function smash(words) {
  return words.join(" ");
}
*/

const smash = (x) => x.join(" ");

console.log(smash([]));
console.log(smash(["hello"]));
console.log(smash(["hello", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
