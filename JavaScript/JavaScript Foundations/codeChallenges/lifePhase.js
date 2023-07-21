// Using if/else statements:
const lifePhase = (age) => {
  if (age >= 0 && age <= 3) {
    return 'baby'
  } else if (age >= 4 && age <= 12) {
    return 'child'
  } else if (age >= 13 && age <= 19) {
    return 'teen'
  } else if (age >= 20 && age <= 64) {
    return 'adult'
  } else if (age >= 65 && age <= 140) {
    return 'senior citizen'
  } else {
    return 'This is not a valid age'
  }
}

// Using a switch statement:
function lifePhase(age) {
  switch (true) {
    case age >= 0 && age <= 3:
      return 'baby';
    case age >= 4 && age <= 12:
      return 'child';
    case age >= 13 && age <= 19:
      return 'teen';
    case age >= 20 && age <= 64:
      return 'adult';
    case age >= 65 && age <= 140:
      return 'senior citizen';
    default:
      return 'This is not a valid age';
  }
}

// Using an object to map age ranges to life phases:
function lifePhase(age) {
  const phaseMap = {
    '0-3': 'baby',
    '4-12': 'child',
    '13-19': 'teen',
    '20-64': 'adult',
    '65-140': 'senior citizen'
  };

  const phase = Object.keys(phaseMap).find(key => {
    const [min, max] = key.split('-');
    return age >= parseInt(min) && age <= parseInt(max);
  });

  return phase ? phaseMap[phase] : 'This is not a valid age';
}
