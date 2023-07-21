// switch statement
function calculateWeight(earthWeight, planet) {
  switch (planet) {
    case 'Mercury':
      return earthWeight * 0.378;
    case 'Venus':
      return earthWeight * 0.907;
    case 'Mars':
      return earthWeight * 0.377;
    case 'Jupiter':
      return earthWeight * 2.36;
    case 'Saturn':
      return earthWeight * 0.916;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
}

// arrow/expression:
const calculateWeight = (earthWeight, planet) => {
  if (planet === 'Mercury') {
    return earthWeight * 0.378;
  } else if (planet === 'Venus') {
    return earthWeight * 0.907;
  } else if (planet === 'Mars') {
    return earthWeight * 0.377;
  } else if (planet === 'Jupiter') {
    return earthWeight * 2.36;
  } else if (planet === 'Saturn') {
    return earthWeight * 0.916;
  } else {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
};

console.log(calculateWeight(100, 'Jupiter'))
console.log(calculateWeight(135, 'Mercury'))
console.log(calculateWeight(199, 'Venus'))
console.log(calculateWeight(222, 'Saturn'))
console.log(calculateWeight(100, 'Your mama'))
