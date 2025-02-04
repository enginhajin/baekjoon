const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const array = Array.from({ length: N }, (_, i) => i + 1);
const result = [];

while (array.length > 0) {
  for (let i = 1; i < K; i++) {
    array.push(array.shift());
  }
  result.push(array.shift());
}

console.log(`<${result.join(", ")}>`);