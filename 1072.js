const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n").map((item) => Number(item));

for (let i = 1; i <= values[0]; i++) {
  if (values[i] > 0 && values[i] % 2 === 0) console.log("EVEN POSITIVE");
  if (values[i] > 0 && values[i] % 2 !== 0) console.log("ODD POSITIVE");
  if (values[i] < 0 && values[i] % 2 === 0) console.log("EVEN NEGATIVE");
  if (values[i] < 0 && values[i] % 2 !== 0) console.log("ODD NEGATIVE");
  if (values[i] === 0) console.log("NULL");
}
