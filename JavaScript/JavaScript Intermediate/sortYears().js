const sortYears = years => years.sort((a, b) => b - a);

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
const sortedYears = sortYears(years);

console.log(sortedYears);