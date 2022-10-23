// I=1 J=60
// I=4 J=55
// I=7 J=50
// ...
// I=? J=0

let j = 60;
let i = 1;

while (j >= 0) {
  console.log(`I=${i} J=${j}`);
  j = j - 5;
  i = i + 3;
}
