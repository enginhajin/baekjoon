const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const queue = [];
const result = [];

data.forEach((item) => {
  const [cmd, str] = item.split(" ");
  switch (cmd) {
    case "push":
      queue.push(str);
      break;
    case "pop":
      result.push(queue.length ? queue.shift() : -1);
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      result.push(queue.length ? 0 : 1);
      break;
    case "front":
      result.push(queue.length ? queue[0] : -1);
      break;
    case "back":
      result.push(queue.length ? queue[queue.length - 1] : -1);
      break;
  }
});

console.log(result.join("\n"));
