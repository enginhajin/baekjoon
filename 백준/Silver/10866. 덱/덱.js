const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const deque = [];
const result = [];

data.forEach((item) => {
  const [cmd, val] = item.split(" ");
  switch (cmd) {
    case "push_front":
      deque.unshift(val);
      break;
    case "push_back":
      deque.push(val);
      break;
    case "pop_front":
      result.push(deque.length ? deque.shift() : -1);
      break;
    case "pop_back":
      result.push(deque.length ? deque.pop() : -1);
      break;
    case "size":
      result.push(deque.length);
      break;
    case "empty":
      result.push(deque.length ? 0 : 1);
      break;
    case "front":
      result.push(deque.length ? deque[0] : -1);
      break;
    case "back":
      result.push(deque.length ? deque[deque.length - 1] : -1);
      break;
  }
});

console.log(result.join("\n"));
