const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n");

for (let i = 1; i <= Number(values[0]); i++) {
  let result;
  const [a, b] = values[i].split(" ").map(Number);

  if (b === 0) {
    console.log("divisao impossivel");
  } else {
    result = a / b;
    console.log(result.toFixed(1));
  }
}
