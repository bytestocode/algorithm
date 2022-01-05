const fs = require("fs");

const N = parseInt(fs.readFileSync("/dev/stdin").toString());
let result = N;
let count = 0;

do {
  let sum = (Math.floor(result / 10) + (result % 10)) % 10;
  result = (result % 10) * 10 + sum;
  count++;
} while (result !== N);

console.log(count);
