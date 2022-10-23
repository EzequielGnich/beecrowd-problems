const input = require("fs").readFileSync("stdin", "utf8");

for (let i = 1; i <= Number(input); i++) {
  if (i % 2 == 0) {
    const result = i ** 2;
    console.log(`${i}^2 = ${result}`);
  }
}
