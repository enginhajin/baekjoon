const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((item) => item.split(" "));

input.sort((a, b) => Number(a[0]) - Number(b[0]));

console.log(input.map((item) => item.join(" ")).join("\n"));
