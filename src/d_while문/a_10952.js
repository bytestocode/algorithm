const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let i = 0;
let result = "";

while (input[i].split(" ")[0] > 0) {
  let A = parseInt(input[i].split(" ")[0]);
  let B = parseInt(input[i].split(" ")[1]);
  result += `${A + B}\n`;
  i++;
}

console.log(result);
