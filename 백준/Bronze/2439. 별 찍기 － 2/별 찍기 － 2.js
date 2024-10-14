const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin"));

const space = " ";
const star = "*";

for (let i = 1; i <= num; i++) {
  console.log(space.repeat(num - i) + star.repeat(i));
}
