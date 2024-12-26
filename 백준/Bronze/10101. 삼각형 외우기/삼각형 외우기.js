const fs = require("fs");
const [A, B, C] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (A + B + C !== 180) {
  console.log("Error");
} else if (A === 60 && B === 60 && C === 60) {
  console.log("Equilateral");
} else if (A === B || A === C || B === C) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}
