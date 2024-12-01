const fs = require("fs");
const [N, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const base = Number(B);

const result = N.split("").reduce((sum, curr, idx) => {
  const value = curr >= "A" ? curr.charCodeAt(0) - 55 : Number(curr);
  const power = N.length - idx - 1;
  return sum + value * base ** power;
}, 0);

console.log(result);
