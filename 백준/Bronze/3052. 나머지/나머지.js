const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const uniqueRemainders = new Set(input.map((num) => num % 42));

console.log(uniqueRemainders.size);
