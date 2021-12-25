const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let quadrantVal;

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];

  if (x > 0) {
    y > 0 ? (quadrantVal = 1) : (quadrantVal = 4);
  } else {
    y > 0 ? (quadrantVal = 2) : (quadrantVal = 3);
  }

  console.log(quadrantVal);

  process.exit();
});
