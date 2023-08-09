const shoutGreetings = () => {
  let shoutGreetings = greetings.map(word => word.toUpperCase() + '!')
  return shoutGreetings

}


const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
