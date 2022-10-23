var input = require("fs").readFileSync("stdin", "utf8");
var [st, sm, et, em] = input.split(" ").map((item) => parseInt(item));

ft = et - st;
if (ft < 0) {
  ft = 24 + (et - st);
}
fm = em - sm;
if (fm < 0) {
  fm = 60 + (em - sm);
  ft = ft - 1;

  if (ft < 0) {
    console.log(ft);
    ft = 0;
  }
}
if (et == st && em == sm) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  console.log(`O JOGO DUROU ${ft} HORA(S) E ${fm} MINUTO(S)`);
}
