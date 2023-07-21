// if/else:
const canIVote = (age) => {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

// Simplifying the if-else statement:
function canIVote(age) {
  return age >= 18 ? true : false;
}

// arrow function and a ternary operator:
const canIVote = (age) => (age >= 18) ? true : false

// Directly returning the comparison result:
const canIVote = (age) => age >= 18;
