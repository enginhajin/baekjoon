const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

data.forEach((item) => {
  const [A, B, C] = item.split(" ").map(Number);
  const max = Math.max(A, B, C);
  const sumOthers = A + B + C - max;

  if (sumOthers <= max) {
    console.log("Invalid");
    return;
  }
  if (A === B && A === C && B === C) {
    console.log("Equilateral");
  } else if (A === B || A === C || B === C) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
});
