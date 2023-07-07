// function declaration:
function reportingForDuty(rank, lastName) {
  return `${rank} ${lastName} reporting for duty!`
}

// arrow/expression:
const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`
}

// slimmer:
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`;


console.log(reportingForDuty('Private', 'Fido'))