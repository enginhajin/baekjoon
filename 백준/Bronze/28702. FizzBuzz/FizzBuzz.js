const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let value = 0;
input.forEach((item, idx) => {
  const num = Number(item);
  if (!isNaN(num)) {
    value = num + (input.length - idx);
  }
});

const getFizzbuzz = (val) => {
  if (val % 3 === 0 && val % 5 === 0) {
    return "FizzBuzz";
  } else if (val % 3 === 0) {
    return "Fizz";
  } else if (val % 5 === 0) {
    return "Buzz";
  } else {
    return val;
  }
};

console.log(getFizzbuzz(value));
