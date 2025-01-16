const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

data.forEach((item) => {
  const reversedItem = item
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
  console.log(reversedItem);
});
