const fs = require("fs");
const INPUT_NUMBER = +fs.readFileSync("/dev/stdin").toString().trim();

function countRoomNum(num) {
  let maxNum = 1;
  for (let i = 0; ; i++) {
    maxNum += 6 * i;
    if (maxNum >= num) {
      return i + 1;
    }
  }
}

console.log(countRoomNum(INPUT_NUMBER));
