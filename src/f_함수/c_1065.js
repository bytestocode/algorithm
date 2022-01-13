const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

function isAnswer(num) {
  const numStr = `${num}`;
  return num < 100 || +numStr[0] - +numStr[1] === +numStr[1] - +numStr[2];
}

let count = 0;

for (let i = 1; i < N + 1; i++) {
  if (isAnswer(i)) {
    count += 1;
  }
}

console.log(count);
