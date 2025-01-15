const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("");

data.sort((a, b) => b - a);

console.log(data.join(""));
