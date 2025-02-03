const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let item of data) {
  if (item === "END") break;
  console.log(item.split("").reverse().join(""));
}
