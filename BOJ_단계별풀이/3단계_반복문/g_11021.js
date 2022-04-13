const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const T = parseInt(input[0]);
let result = "";

for (let i = 0; i < T; ++i) {
  let ab = input[i + 1].split(" ");
  result += `Case #${i + 1}: ${parseInt(ab[0]) + parseInt(ab[1])}\n`;
}

console.log(result);
