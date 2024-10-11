const fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";

numbers.forEach((item) => {
  const [a, b] = item.split(" ").map(Number);
  if (a && b) {
    result += `${a + b}\n`;
  }
});

console.log(result.trim());
