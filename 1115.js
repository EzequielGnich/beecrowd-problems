const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n");

for (let i = 0; i < values.length; i++) {
  const [a, b] = values[i].split(" ").map((c) => Number(c));

  if (a !== 0 && b !== 0) {
    if (a > 0 && b > 0) console.log("primeiro");
    if (a < 0 && b > 0) console.log("segundo");
    if (a < 0 && b < 0) console.log("terceiro");
    if (a > 0 && b < 0) console.log("quarto");
  }
}
