const input = require("fs").readFileSync("stdin", "utf8");
const [startDay, startHour, endDay, endHour] = input.split("\n");

const secondsWithinMinute = 60;
const secondsWithinHour = 60 * 60;
const secondsWithinDay = 24 * 60 * 60;

const [, d1] = startDay.split(" ");
const [, d2] = endDay.split(" ");

const [h1, m1, s1] = startHour.split(" : ").map((n) => Number(n));
const [h2, m2, s2] = endHour.split(" : ").map((n) => Number(n));

const timeInSecondsFirstDay =
  s1 +
  m1 * secondsWithinMinute +
  h1 * secondsWithinHour +
  Number(d1) * secondsWithinDay;

const timeInSecondsSecondDay =
  s2 +
  m2 * secondsWithinMinute +
  h2 * secondsWithinHour +
  Number(d2) * secondsWithinDay;

const diff = timeInSecondsSecondDay - timeInSecondsFirstDay;

const days = Math.floor(diff / secondsWithinDay);
const hours = Math.floor((diff % secondsWithinDay) / secondsWithinHour);

const minutes = Math.floor(
  ((diff % secondsWithinDay) % secondsWithinHour) / secondsWithinMinute
);

const seconds = Math.floor(
  ((diff % secondsWithinDay) % secondsWithinHour) % secondsWithinMinute
);

console.log(`${days} dia(s)`);
console.log(`${hours} hora(s)`);
console.log(`${minutes} minuto(s)`);
console.log(`${seconds} segundo(s)`);
