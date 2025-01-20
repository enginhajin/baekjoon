const limit = 10000;

const d = (n) => {
  return n + [...String(n)].reduce((acc, curr) => acc + Number(curr), 0);
};

const nums = new Set();

for (let i = 1; i <= limit; i++) {
  const num = d(i);
  if (num <= limit) nums.add(num);
}

const result = [];

for (let i = 1; i <= limit; i++) {
  if (!nums.has(i)) result.push(i);
}

console.log(result.join("\n"));
