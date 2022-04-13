const fs = require("fs");

const N = parseInt(fs.readFileSync("/dev/stdin").toString());

for (let i = 0; i < N; i++) {
  let result = "";
  for (let j = 0; j < i + 1; j++) {
    result += "*";
  }
  console.log(result);
}
