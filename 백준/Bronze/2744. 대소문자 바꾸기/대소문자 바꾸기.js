const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const result = input
  .map((item) => {
    return item === item.toUpperCase()
      ? item.toLowerCase()
      : item.toUpperCase();
  })
  .join("");

console.log(result);
