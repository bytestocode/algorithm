const fs = require("fs");
const testScore = fs.readFileSync("/dev/stdin");

const printGrade = function (testScore) {
  let grade;
  if (testScore >= 90) {
    grade = "A";
  } else if (testScore >= 80) {
    grade = "B";
  } else if (testScore >= 70) {
    grade = "C";
  } else if (testScore >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(grade);
};

printGrade(testScore);
