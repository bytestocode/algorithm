const fs = require("fs");

const N = parseInt(fs.readFileSync("/dev/stdin").toString());

for (let i = 1; i <= 9; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
