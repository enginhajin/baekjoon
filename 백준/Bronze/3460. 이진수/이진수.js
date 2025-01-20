const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map(Number);

const result = [];

data.forEach((item) => {
  const binary = item.toString(2);
  const positions = [];
  for (let i = 0; i <= binary.length; i++) {
    if (binary[binary.length - 1 - i] === "1") {
      positions.push(i);
    }
  }
  result.push(positions.join(" "));
});

console.log(result.join("\n"));
