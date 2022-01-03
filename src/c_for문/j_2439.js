const fs = require("fs");

const N = parseInt(fs.readFileSync("/dev/stdin").toString());

for (let i = 0; i < N; i++) {
  let result = "";
  for (let j = 0; j < N - 1 - i; j++) {
    result += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    result += "*";
  }
  console.log(result);
}
