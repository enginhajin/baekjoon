const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = "";

for (let i = 1; i <= num; i++) {
  console.log((result += "*"));
}
