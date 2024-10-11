const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(String);

let result = "";

input.forEach((item) => {
  const upperCase = item.toUpperCase();
  const lowerCase = item.toLowerCase();

  if (item === upperCase) {
    result += lowerCase;
  } else {
    result += upperCase;
  }
});

console.log(result);
