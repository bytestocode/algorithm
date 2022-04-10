const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

for (let i = 1; i < N + 1; i++) {
  let sum = 0;
  let addValue = 0;
  for (const val of input[i]) {
    if (val === "O") {
      addValue += 1;
      sum += addValue;
    } else {
      addValue = 0;
    }
  }
  console.log(sum);
}
