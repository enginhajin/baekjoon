const fs = require("fs");
const cases = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const coins = [25, 10, 5, 1];

cases.forEach((item) => {
  const result = [];
  coins.forEach((coin) => {
    result.push(Math.floor(item / coin));
    item %= coin;
  });
  console.log(result.join(" "));
});
