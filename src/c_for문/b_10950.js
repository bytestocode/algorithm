const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const T = parseInt(input[0]);

for (let i = 0; i < T; ++i) {
  let ab = input[i + 1].toString().split(" ");
  console.log(parseInt(ab[0]) + parseInt(ab[1]));
}
