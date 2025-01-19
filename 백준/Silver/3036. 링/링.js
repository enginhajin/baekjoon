const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = data[1].split(" ").map(Number);

const getGCD = (a, b) => {
  while (a % b !== 0) {
    [a, b] = [b, a % b];
  }
  return b;
};

const R1 = nums[0];

nums.slice(1).forEach((Ri) => {
  const gcd = getGCD(R1, Ri);
  console.log(`${R1 / gcd}/${Ri / gcd}`);
});
