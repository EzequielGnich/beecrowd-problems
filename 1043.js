var input = require("fs").readFileSync("stdin", "utf8");
const [a, b, c] = input.split(" ").map((c) => Number(c));

const valueA = a + b > c;
const valueB = a + c > b;
const valueC = b + c > a;

console.log(valueA, valueB, valueC);

if (valueA && valueB && valueC) {
  console.log(`Perimetro = ${(a + b + c).toFixed(1)}`);
} else {
  const result = ((a + b) / 2) * c;
  console.log(`Area = ${result.toFixed(1)}`);
}
