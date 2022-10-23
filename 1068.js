const input = require("fs").readFileSync("stdin", "utf8");

let n = Number(input);
let i = 0;

while (i < 6) {
  if (n % 2 != 0) {
    console.log(n);
    i++;
  }
  n++;
}
