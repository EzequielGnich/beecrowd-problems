const input = require("fs").readFileSync("stdin", "utf8");
const numbers = input.split("\n").map((item) => Number(item));

let contPar = 0;
let x;

for (let i = 0; i < 5; i++) {
  x = numbers[i];
  if (x % 2 == 0) contPar++;
}

console.log(`${contPar} valores pares`);
