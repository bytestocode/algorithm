const fs = require("fs");

const inputArr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const resArr = inputArr.map((num) => +num % 42).sort();

let count = 10;

for (let i = 0; i < 10; i++) {
  count -= resArr[i] === resArr[i + 1] ? 1 : 0;
}

console.log(count);
