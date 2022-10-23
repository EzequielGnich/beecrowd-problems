const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n");

values.forEach((item) => {
  const [a, b] = item.split(" ").map((c) => Number(c));

  if (a !== b) {
    if (a > b) {
      console.log("Decrescente");
    }

    if (a < b) {
      console.log("Crescente");
    }
  }
});
