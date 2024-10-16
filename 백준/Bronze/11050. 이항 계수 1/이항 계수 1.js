const fs = require("fs");
const [n, k] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let parent = 1;
let child = 1;

for (let i = 0; i < k; i++) {
  parent *= n - i;
  child *= i + 1;
}

console.log(parent / child);
