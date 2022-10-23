const input = require("fs").readFileSync("stdin", "utf8");

for (let i = 1; i <= Number(input); i++) {
  if (i % 2 != 0) console.log(i);
}
