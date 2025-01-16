const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

data.forEach((item) => {
  const brackets = item.split("");
  const stack = [];
  let isValid = true;

  for (const bracket of brackets) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (stack.length) {
        stack.pop();
      } else {
        isValid = false;
        break;
      }
    }
  }

  isValid && !stack.length ? console.log("YES") : console.log("NO");
});
