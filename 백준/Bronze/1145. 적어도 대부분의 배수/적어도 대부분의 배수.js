const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = 1;

while (true) {
  let count = 0;

  data.forEach((item) => {
    if (result % item === 0) count++;
  });

  if (count >= 3) {
    console.log(result);
    break;
  }
  result++;
}
