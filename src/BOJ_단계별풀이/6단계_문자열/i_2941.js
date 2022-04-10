const fs = require("fs");
const Croatia = fs.readFileSync("/dev/stdin").toString().trim();

const regExp = /c=|c-|d-|s=|z=|dz=|lj|nj/g;

function countCroatia(string) {
  const croatiaArray = string.match(regExp);
  return croatiaArray !== null ? croatiaArray.length : 0;
}

const croatiaNum = countCroatia(Croatia);
const filteredCroatia = Croatia.replace(regExp, "");

const filteredArray = filteredCroatia.split("");
console.log(filteredArray.length + croatiaNum);
