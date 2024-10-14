const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

input.forEach((item) => {
  const [num, str] = item
    .split(" ")
    .map((val, idx) => (idx === 0 ? Number(val) : val));

  const result = str
    .split("")
    .reduce((acc, curr) => acc + curr.repeat(num), "");

  console.log(result);
});