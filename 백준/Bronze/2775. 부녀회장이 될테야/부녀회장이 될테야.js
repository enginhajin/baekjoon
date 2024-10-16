const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();

for (let i = 0; i < T; i++) {
  const k = input.shift();
  const n = input.shift();

  const apartment = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  apartment[0].forEach((_, index) => (apartment[0][index] = index));

  for (let j = 1; j <= k; j++) {
    for (let g = 1; g <= n; g++) {
      apartment[j][g] = apartment[j - 1][g] + apartment[j][g - 1];
    }
  }

  console.log(apartment[k][n]);
}
