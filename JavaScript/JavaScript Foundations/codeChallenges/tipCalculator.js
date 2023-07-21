// switch
const tipCalculator = (quality, total) => {
  switch (quality) {
      case 'bad':
          return total * .05;
      case 'ok':
          return total * .15;
      case 'good':
          return total * .20;
      case 'excellent':
          return total * .30;
      default:
          return total * .18;

  }
}

// if/else
function tipCalculator(quality, total) {
  if (quality === 'bad') {
    return total * 0.05;
  } else if (quality === 'ok') {
    return total * 0.15;
  } else if (quality === 'good') {
    return total * 0.20;
  } else if (quality === 'excellent') {
    return total * 0.30;
  } else {
    return total * 0.18;
  }
}


console.log(tipCalculator('good', 100))