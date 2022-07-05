function getScore(score) {
  let finalScore;

  if (score >= 90) {
    finalScore = "A";
  } else if (score >= 80) {
     finalScore = "B";
  } else if (score >= 70) {
     finalScore = "C";
  } else if (score >= 60) {
    finalScore = "D";
  } else if (score >= 0) {
    finalScore = "F";
  }
  else {
    finalScore = "Invalid score";
  }

  return finalScore;
}

console.log(getScore(101))
console.log(getScore(0))
console.log(getScore(-1))
console.log(getScore(45));
console.log(getScore(92));
console.log(getScore(75));
console.log(getScore(83));
console.log(getScore(61));