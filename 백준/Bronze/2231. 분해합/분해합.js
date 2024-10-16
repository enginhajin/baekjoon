const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin"));

const result = new Set();
for (let i = 1; i < n; i++) {
  const digitSum = String(i)
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
  const sum = i + digitSum;
  if (sum === n) {
    result.add(i);
  }
}

console.log(result.size === 0 ? 0 : Math.min(...result));
