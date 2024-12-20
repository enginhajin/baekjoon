const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const coodsX = input.map((item) => Number(item.split(" ")[0]));
const coodsY = input.map((item) => Number(item.split(" ")[1]));

const fourthX = coodsX.reduce((acc, curr) => acc ^ curr, 0);
const fourthY = coodsY.reduce((acc, curr) => acc ^ curr, 0);

console.log(fourthX, fourthY);
