const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(0, -1);

input.forEach((item) => {
  const divisors = [];
  let sum = 0;

  for (let i = 1; i <= Math.sqrt(item); i++) {
    if (item % i === 0) {
      divisors.push(i);
      sum += i;
      if (i !== item / i && item / i !== item) {
        divisors.push(item / i);
        sum += item / i;
      }
    }
  }
  divisors.sort((a, b) => a - b);

  if (sum === item) {
    console.log(`${item} = ${divisors.join(" + ")}`);
  } else {
    console.log(`${item} is NOT perfect.`);
  }
});
