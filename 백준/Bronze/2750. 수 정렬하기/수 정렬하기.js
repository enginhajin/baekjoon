const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

console.log(data.sort((a, b) => a - b).join("\n"));
