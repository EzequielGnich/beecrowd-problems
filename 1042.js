var input = require("fs").readFileSync("stdin", "utf8");

function orderedNumbers(n) {
  const values = n.split(" ");
  values
    .sort((a, b) => a - b)
    .forEach((c) => {
      console.log(Number(c));
    });

  const valuesB = n.split(" ");
  console.log("");
  valuesB.forEach((d) => {
    console.log(Number(d));
  });
}

orderedNumbers(input);
