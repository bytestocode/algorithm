const fs = require("fs");

const inputArr = fs.readFileSync("/dev/stdin").toString().split("\n");
let max = +inputArr[0];
let position = 1;

inputArr.map((num, i) => {
  if (max < +num) {
    max = +num;
    position = i + 1;
  }
});

console.log(`${max}\n${position}`);
