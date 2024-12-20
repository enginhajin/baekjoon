const fs = require("fs");
let [x, y, w, h] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.min(x, h - y, w - x, y));
