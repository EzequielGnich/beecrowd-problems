const input = require("fs").readFileSync("stdin", "utf8");
const numbers = input.split("\n").map((item) => Number(item));

let contPar = 0;
let contImpar = 0;
let contPositivos = 0;
let contNegativos = 0;
let x;

for (let i = 0; i < 5; i++) {
  x = numbers[i];
  if (x % 2 == 0) contPar++;
  else contImpar++;
  if (x > 0) contPositivos++;
  else if (x < 0) contNegativos++;
}

console.log(`${contPar} valor(es) par(es)`);
console.log(`${contImpar} valor(es) impar(es)`);
console.log(`${contPositivos} valor(es) positivo(s)`);
console.log(`${contNegativos} valor(es) negativo(s)`);
