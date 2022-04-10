const fs = require("fs");
const year = fs.readFileSync("/dev/stdin");

const isLeapYear = function () {
  let bool;
  if (year % 4 === 0 && year % 100 !== 0) {
    bool = 1;
  } else if (year % 400 === 0) {
    bool = 1;
  } else {
    bool = 0;
  }

  return bool;
};

console.log(isLeapYear());
