const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = data[1].split(" ").map(Number);

const factors = {};

const getFactors = (n) => {
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors[i] = (factors[i] || 0) + 1;
      if (i !== n / i) factors[n / i] = (factors[n / i] || 0) + 1;
    }
  }
};

nums.forEach((num) => getFactors(num));

for (const n in factors) {
  if (factors[n] === nums.length) console.log(n);
}
