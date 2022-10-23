const input = require("fs").readFileSync("stdin", "utf8");

const N = 10;

for (let i = 1; i <= N; i++) {
  const result = i * Number(input);
  console.log(i + " x " + input + " = " + result);
}
