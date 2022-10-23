const input = require("fs").readFileSync("stdin", "utf8");

const salary = Number(input);

let tax = 0;

if (salary >= 0.0 && salary <= 2000) {
  tax = "Isento";
} else if (salary >= 2000.01 && salary <= 3000) {
  tax = `R$ ${((salary - 2000) * 0.08).toFixed(2)}`;
} else if (salary >= 3000.01 && salary <= 4500) {
  tax = `R$ ${((salary - 3000) * 0.18 + 80).toFixed(2)}`;
} else if (salary > 4500) {
  tax = `R$ ${((salary - 4500) * 0.28 + 350).toFixed(2)}`;
}

console.log(tax);
