function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function studentMsg(totalScores, studentScore) {
    let avg = getAverage(totalScores);
    let grade = getGrade(studentScore);
    let pass = " You failed the course.";

    if(hasPassingGrade(studentScore)){
      pass = " You passed the course."
    }
  
    return "Class average: " + avg + ". " +  "Your grade: " + grade + "." + pass;
  
  }
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));