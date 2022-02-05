const fs = require("fs");
const WORD = fs.readFileSync("/dev/stdin").toString().trim();

function charToNum(char) {
  switch (char) {
    case "A":
    case "B":
    case "C":
      return 2;
    case "D":
    case "E":
    case "F":
      return 3;
    case "G":
    case "H":
    case "I":
      return 4;
    case "J":
    case "K":
    case "L":
      return 5;
    case "M":
    case "N":
    case "O":
      return 6;
    case "P":
    case "Q":
    case "R":
    case "S":
      return 7;
    case "T":
    case "U":
    case "V":
      return 8;
    case "W":
    case "X":
    case "Y":
    case "Z":
      return 9;
  }
}

const charArray = WORD.split("");
const timeArray = charArray.map((char) => charToNum(char) + 1);
const resultTime = timeArray.reduce((pre, cur) => pre + cur, 0);

console.log(resultTime);
