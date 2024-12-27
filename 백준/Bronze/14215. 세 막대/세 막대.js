const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const max = Math.max(...data);
const sumOthers = data.reduce((acc, curr) => acc + curr, 0) - max;

if (max >= sumOthers) {
  console.log(sumOthers * 2 - 1);
} else {
  console.log(sumOthers + max);
}
