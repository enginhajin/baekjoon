const fs = require("fs");
const [M, N] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result = [];

for (let i = M; i <= N; i++) {
  if (Math.sqrt(i) % 1 === 0) {
    result.push(i);
  }
}

if (result.length > 0) {
  console.log(result.reduce((acc, curr) => (acc += curr)));
  console.log(Math.min(...result));
} else {
  console.log(-1);
}
