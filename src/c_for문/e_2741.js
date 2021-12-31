const fs = require("fs");
const N = fs.readFileSync("/dev/stdin");

let result = "";

for (let i = 0; i < N; i++) {
  result += `${i + 1}\n`;
}

console.log(result);
