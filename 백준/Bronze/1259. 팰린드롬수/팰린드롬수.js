const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(0, -1);

const result = input.map((item) => {
  const str = String(item);
  const reversed = str.split("").reverse().join("");
  return str === reversed ? "yes" : "no";
});

console.log(result.join("\n"));
