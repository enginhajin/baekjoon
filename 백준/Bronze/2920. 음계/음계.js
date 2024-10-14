const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const inputJoin = input.join("");
const asc = input.sort((a, b) => a - b).join("");
const desc = input.sort((a, b) => b - a).join("");

if (asc === inputJoin) {
  console.log("ascending");
} else if (desc === inputJoin) {
  console.log("descending");
} else {
  console.log("mixed");
}
