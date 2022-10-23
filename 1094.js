const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n");

let total = 0;
let totalRabbit = 0;
let totalMouse = 0;
let totalFrog = 0;

for (let i = 1; i <= Number(values[0]); i++) {
  const [quantity, type] = values[i].split(" ");
  total = total + Number(quantity);

  switch (type) {
    case "C":
      totalRabbit = totalRabbit + Number(quantity);
      break;
    case "R":
      totalMouse = totalMouse + Number(quantity);
      break;
    default:
      totalFrog = totalFrog + Number(quantity);
      break;
  }
}

function calcAverage(guineaPig, total) {
  return ((guineaPig / total) * 100).toFixed(2);
}

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${totalRabbit}`);
console.log(`Total de ratos: ${totalMouse}`);
console.log(`Total de sapos: ${totalFrog}`);
console.log(`Percentual de coelhos: ${calcAverage(totalRabbit, total)} %`);
console.log(`Percentual de ratos: ${calcAverage(totalMouse, total)} %`);
console.log(`Percentual de sapos: ${calcAverage(totalFrog, total)} %`);
