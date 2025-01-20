const fs = require("fs");
const [start, end] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const array = [];
let num = 1;

while (array.length <= 1000) {
  for (let i = 0; i < num; i++) {
    array.push(num);
  }
  num++;
}

const result = array.slice(start - 1, end).reduce((acc, curr) => (acc += curr));

console.log(result);
