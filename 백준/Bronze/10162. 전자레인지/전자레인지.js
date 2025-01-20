const fs = require("fs");
let T = Number(fs.readFileSync("/dev/stdin").toString().trim());

const btns = [300, 60, 10];
const result = [];

for (const btn of btns) {
  result.push(Math.floor(T / btn));
  T %= btn;
}

console.log(T === 0 ? result.join(" ") : -1);
