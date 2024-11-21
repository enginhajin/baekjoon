const fs = require("fs");
const cases = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

cases.forEach((item, idx) => {
  const [A, B] = item.toString().trim().split(" ").map(Number);
  console.log(`Case #${idx + 1}: ${A + B}`);
});
