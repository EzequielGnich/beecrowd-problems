const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n").map((item) => Number(item));

let counter = 0;
values.forEach((item) => {
  if (item > 0) {
    counter++;
  }
});

console.log(`${counter} valores positivos`);
