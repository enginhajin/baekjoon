const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const results = input.map((item) => {
  let currentScore = 0;
  return item.split("").reduce((acc, curr) => {
    if (curr === "O") {
      currentScore += 1;
      acc += currentScore;
    } else {
      currentScore = 0;
    }
    return acc;
  }, 0);
});

console.log(results.join("\n"));
