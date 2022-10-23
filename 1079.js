const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n");

for (let index = 1; index < Number(values[0]) + 1; index++) {
  let result;
  const [x, y, z] = values[index].split(" ").map((item) => Number(item));

  result = (x * 2 + y * 3 + z * 5) / (2 + 3 + 5);
  console.log(result.toFixed(1));
}
