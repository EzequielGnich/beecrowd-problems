const input = require("fs").readFileSync("stdin", "utf8");
const [a, b] = input.split("\n").map((item) => Number(item));

let sum = 0;
const higher = Math.max(a, b);
const lower = Math.min(a, b);

for (let i = lower + 1; i < higher; i++) {
  if (i % 2 != 0) sum += i;
}

console.log(sum);
