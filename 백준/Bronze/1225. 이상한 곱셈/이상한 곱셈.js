const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = data[0].split("").map(Number);
const B = data[1].split("").map(Number);

let result = 0;

A.forEach((numA) => {
  B.forEach((numB) => {
    result += numA * numB;
  });
});

console.log(result);