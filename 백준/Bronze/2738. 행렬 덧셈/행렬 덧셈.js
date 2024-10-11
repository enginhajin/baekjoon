const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].trim().split(" ").map(Number);

const a = [];
const b = [];

for (let i = 1; i <= n; i++) {
  a.push(input[i].trim().split(" ").map(Number));
}

for (let i = n + 1; i <= n + n; i++) {
  b.push(input[i].trim().split(" ").map(Number));
}

const result = [];

for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < m; j++) {
    row.push(a[i][j] + b[i][j]);
  }
  result.push(row.join(" "));
}

console.log(result.join("\n"));