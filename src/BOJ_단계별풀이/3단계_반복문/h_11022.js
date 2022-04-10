const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const T = parseInt(input[0]);
let result = "";

for (let i = 0; i < T; ++i) {
  let abArr = input[i + 1].split(" ");
  let a = parseInt(abArr[0]);
  let b = parseInt(abArr[1]);
  result += `Case #${i + 1}: ${a} + ${b} = ${a + b}\n`;
}

console.log(result);
