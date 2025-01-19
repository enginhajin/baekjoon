const fs = require("fs");
const [M, N] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const start = Math.ceil(Math.sqrt(M));
const end = Math.floor(Math.sqrt(N));
const result = [];

for (let i = start; i <= end; i++) {
  result.push(i * i);
}

if (result.length > 0) {
  console.log(result.reduce((acc, curr) => (acc += curr)));
  console.log(Math.min(...result));
} else {
  console.log(-1);
}
