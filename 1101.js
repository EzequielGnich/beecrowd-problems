const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n");

values.forEach((item) => {
  let total = 0;
  let numbersList = [];
  const [x, y] = item.split(" ").map((item) => Number(item));

  const higher = Math.max(x, y);
  const lower = Math.min(x, y);

  if (higher > 0 && lower > 0) {
    for (let index = lower; index <= higher; index++) {
      total = total += index;
      numbersList.push(index);
    }

    console.log(`${numbersList.join(" ")} Sum=${total}`);
  }
});
