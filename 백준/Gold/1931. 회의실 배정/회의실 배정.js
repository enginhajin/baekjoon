const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map((item) => item.split(" ").map(Number));

data.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let count = 0;
let endTime = 0;

data.forEach(([start, end]) => {
  if (endTime <= start) {
    count += 1;
    endTime = end;
  }
});

console.log(count);
