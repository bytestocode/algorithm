const fs = require("fs");
const string = fs.readFileSync("/dev/stdin").toString().trim();
const vocaArray = string.split(" ");

const result = vocaArray[0] === "" ? 0 : vocaArray.length;

console.log(result);
