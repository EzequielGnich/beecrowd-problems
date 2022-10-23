var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

function resolve(values) {
  const [a, b] = values.map((c) => Number(c));

  if (b % a === 0 || a % b === 0) {
    console.log("Sao Multiplos");
  } else {
    console.log("Nao sao Multiplos");
  }
}

resolve(lines);
