const fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

numbers.forEach((item) => {
  const [a, b] = item.trim().split(" ").map(Number);
  if (a && b) {
    console.log(a + b);
  }
});
