const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin").toString());

const factorial = (num) =>
  num === 0
    ? 1
    : Array.from({ length: num }, (_, i) => i + 1).reduce(
        (acc, curr) => acc * curr,
        1
      );

console.log(factorial(num));
