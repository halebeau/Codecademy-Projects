// switch:
const toEmoticon = meaning => {
  switch (meaning) {
      case 'shrug':
          return '|_{"}_|'
      case 'smiley face':
          return ':)';
      case 'frowny face':
          return ':(';
      case 'winky face':
          return ';)';
      case 'heart':
          return '<3';
      default:
          return '|_(* ~ *)_|';
  }
}

// if/else:
function toEmoticon(meaning) {
  if (meaning === 'shrug') {
    return '|_{"}_|';
  } else if (meaning === 'smiley face') {
    return ':)';
  } else if (meaning === 'frowny face') {
    return ':(';
  } else if (meaning === 'winky face') {
    return ';)';
  } else if (meaning === 'heart') {
    return '<3';
  } else {
    return '|_(* ~ *)_|';
  }
}

console.log(toEmoticon("whatever"));
