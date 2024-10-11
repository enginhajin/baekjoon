const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const result = input
  .split("\n")
  .slice(1)
  .map((item) => item[0] + item[item.length - 1])
  .join("\n");

console.log(result);
