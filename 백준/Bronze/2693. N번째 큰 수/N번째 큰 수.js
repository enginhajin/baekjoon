const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map((item) => item.split(" ").map(Number));

const result = [];

data.forEach((item) => {
  item.sort((a, b) => b - a);
  result.push(item[2]);
});

console.log(result.join("\n"));
