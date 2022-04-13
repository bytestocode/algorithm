const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => Number(el));
}).on("close", () => {
  const HOUR = input[0];
  const MINUTE = input[1];

  const time = HOUR * 60 + MINUTE - 45;

  let hourToWakeup;
  let minuteToWakeup;

  if (time < 0) {
    hourToWakeup = 23;
    minuteToWakeup = 60 + time;
  } else {
    hourToWakeup = Math.floor(time / 60);
    minuteToWakeup = time % 60;
  }

  console.log(`${hourToWakeup} ${minuteToWakeup}`);

  process.exit();
});
