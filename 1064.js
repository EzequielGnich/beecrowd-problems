const input = require("fs").readFileSync("stdin", "utf8");
const numbers = input.split("\n").map((item) => Number(item));

let positiveNumbers = [];
let negativeNumbers = [];

numbers.forEach((number) => {
  if (number <= 0) {
    negativeNumbers.push(number);
  } else {
    positiveNumbers.push(number);
  }
});

const average = positiveNumbers.reduce((acc, item) => {
  return acc + item;
});

console.log(`${positiveNumbers.length} valores positivos`);
console.log(average / positiveNumbers.length);
