const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n").map((item) => Number(item));

let withinRange = 0;
let outOfBreak = 0;

for (let i = 1; i < values[0] + 1; i++) {
  if (values[i] >= 10 && values[i] <= 20) {
    withinRange += 1;
  } else {
    outOfBreak += 1;
  }
}

console.log(`${withinRange} in`);
console.log(`${outOfBreak} out`);
