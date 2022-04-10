const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = +input[0];
const inputArr = input[1].split(" ");

let min = +inputArr[0];
let max = +inputArr[0];

for (let i = 1; i < N; i++) {
  min = min < +inputArr[i] ? min : +inputArr[i];
  max = max > +inputArr[i] ? max : +inputArr[i];
}

console.log(min, max);
