var input = require("fs").readFileSync("stdin", "utf8");
var [A, B] = input.split(" ").map((item) => parseInt(item));

const time = B - A;
if (time <= 0) {
  console.log(`O JOGO DUROU ${24 + time} HORA(S)`);
} else {
  console.log(`O JOGO DUROU ${time} HORA(S)`);
}
