const input = require("fs").readFileSync("stdin", "utf8");

const N = 10000;

for (let i = 1; i <= N; i++) {
  if (i % input === 2) console.log(i);
}
