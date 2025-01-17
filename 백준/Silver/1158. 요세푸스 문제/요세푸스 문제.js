const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = Array.from({ length: N }, (_, i) => i + 1);
const result = [];

while (queue.length > 0) {
  for (let i = 1; i < K; i++) {
    queue.push(queue.shift());
  }
  result.push(queue.shift());
}

console.log(`<${result.join(", ")}>`);
