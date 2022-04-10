const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString());

let result = "";

for (let i = N; i > 0; i--) {
  result += `${i}\n`;
}

console.log(result);
