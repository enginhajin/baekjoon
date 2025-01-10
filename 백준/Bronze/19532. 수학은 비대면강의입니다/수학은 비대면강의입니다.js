const fs = require("fs");
const [a, b, c, d, e, f] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let resultX = 0;
let resultY = 0;

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      resultX = x;
      resultY = y;
      break;
    }
  }
}

console.log(resultX, resultY);
