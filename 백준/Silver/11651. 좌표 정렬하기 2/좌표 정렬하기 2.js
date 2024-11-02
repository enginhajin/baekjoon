const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map((item) => item.split(" ").map(Number));

input.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

console.log(input.map((item) => item.join(" ")).join("\n"));
