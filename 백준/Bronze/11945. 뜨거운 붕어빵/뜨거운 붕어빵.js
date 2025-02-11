const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const result = data.map((item) => {
  return item.split("").reverse().join("");
});

console.log(result.join("\n"));
