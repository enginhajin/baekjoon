const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin").toString().trim());

for (let i = 1; i <= 9; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
