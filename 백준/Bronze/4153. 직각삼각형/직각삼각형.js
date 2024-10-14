const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const result = input.map((item) => {
  const [a, b, c] = item
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (a === 0) return;
  return a * a + b * b === c * c ? "right" : "wrong";
});

console.log(result.join("\n"));
