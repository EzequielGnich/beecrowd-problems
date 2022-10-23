const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n").map((c) => Number(c));

let higher = values[0];
let position;

for (let i = 0; i < values.length; i++) {
  if (higher < values[i]) {
    higher = values[i];
    position = i + 1;
  }
}

console.log(higher);
console.log(position);
