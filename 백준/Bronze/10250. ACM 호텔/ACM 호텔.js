const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

input.forEach((item) => {
  const [h, w, n] = item.split(" ").map(Number);
  const roomIndex = Math.floor((n - 1) / h) + 1;
  const roomFloor = ((n - 1) % h) + 1;
  const result = `${roomFloor}${String(roomIndex).padStart(2, "0")}`;
  console.log(result);
});
