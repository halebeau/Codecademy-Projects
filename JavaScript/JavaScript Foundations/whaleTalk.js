const input = "Someone once told me, you can do it";
const array = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i], input[i]); // Double the letter 'e' and add it twice
  } else if (input[i] === "u") {
    resultArray.push(input[i], input[i]); // Double the letter 'u' and add it twice
  } else {
    for (let j = 0; j < array.length; j++) {
      if (input[i] === array[j]) {
        resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray);
const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
