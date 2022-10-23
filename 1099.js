const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n");

for (let index = 1; index <= Number(values[0]); index++) {
  let sum = 0;

  const [a, b] = values[index].split(" ").map((item) => Number(item));
  const higher = Math.max(a, b);
  const lower = Math.min(a, b);

  for (let i = lower + 1; i < higher; i++) {
    if (i % 2 != 0) sum += i;
  }

  console.log(sum);
}
