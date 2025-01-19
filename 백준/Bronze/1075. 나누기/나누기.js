const fs = require("fs");
const [N, F] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const base = Math.floor(N / 100) * 100;

for (let i = 0; i <= 99; i++) {
  const paddedI = String(i).padStart(2, "0");
  const curr = base + i;
  if (curr % F === 0) {
    console.log(paddedI);
    break;
  }
}
