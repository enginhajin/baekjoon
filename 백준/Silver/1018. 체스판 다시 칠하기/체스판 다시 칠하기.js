const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [row, col] = input[0].split(" ").map(Number);
const board = input.slice(1).map((item) => item.split(""));

const answer = [];
const patterns = ["WBWBWBWB", "BWBWBWBW"];

// 8x8로 자른 보드의 왼쪽 상단 모서리 위치
for (let i = 0; i <= row - 8; i++) {
  for (let j = 0; j <= col - 8; j++) {
    //2가지 패턴 확인 (W로 시작, B로 시작)
    for (let z = 0; z < 2; z++) {
      let count = 0;
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const curr = board[i + x][j + y];
          if (curr !== patterns[(x + z) % 2][y]) {
            count++;
          }
        }
      }
      answer.push(count);
    }
  }
}

console.log(Math.min(...answer));
