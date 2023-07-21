// function declaration:
function finalGrade(midterm, final, homework) {
  const average = (midterm + final + homework) / 3;

  if (midterm < 0 || midterm > 100 || final < 0 || final > 100 || homework < 0 || homework > 100) {
    return 'You have entered an invalid grade.';
  }

  if (average >= 0 && average <= 59) {
    return 'F';
  } else if (average >= 60 && average <= 69) {
    return 'D';
  } else if (average >= 70 && average <= 79) {
    return 'C';
  } else if (average >= 80 && average <= 89) {
    return 'B';
  } else if (average >= 90 && average <= 100) {
    return 'A';
  }
}

// arrow function:
const finalGrade = (midterm, final, homework) => {
  const average = (midterm, final, homework) /3

  if (midterm < 0 || midterm > 100 || final < 0 || final > 100 || homework < 0 || homework > 100) {
    return 'You have entered an invalid grade.';
  }

  if (average >= 0 && average <= 59) {
    return 'F';
  } else if (average >= 60 && average <= 69) {
    return 'D';
  } else if (average >= 70 && average <= 79) {
    return 'C';
  } else if (average >= 80 && average <= 89) {
    return 'B';
  } else if (average >= 90 && average <= 100) {
    return 'A';
  }
}

// switch statement:
function finalGrade(grade1, grade2, grade3) {
  const average = (grade1 + grade2 + grade3) / 3;

  if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
    return 'You have entered an invalid grade.';
  }

  let letterGrade;

  switch (true) {
    case average >= 0 && average <= 59:
      letterGrade = 'F';
      break;
    case average >= 60 && average <= 69:
      letterGrade = 'D';
      break;
    case average >= 70 && average <= 79:
      letterGrade = 'C';
      break;
    case average >= 80 && average <= 89:
      letterGrade = 'B';
      break;
    case average >= 90 && average <= 100:
      letterGrade = 'A';
      break;
    default:
      letterGrade = 'Unknown';
      break;
  }

  return letterGrade;
}


console.log(finalGrade(99, 92, 95))