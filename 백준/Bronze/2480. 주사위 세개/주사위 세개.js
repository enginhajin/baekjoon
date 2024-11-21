const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = 0;

if (a === b && b === c) {
  result = 10000 + a * 1000;
} else if (a === b || a === c || b === c) {
  const num = a === b || a === c ? a : b;
  result = 1000 + num * 100;
} else {
  result = Math.max(a, b, c) * 100;
}

console.log(result);
