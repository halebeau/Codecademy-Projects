const getSleepHours = (day) => {
  if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday"
  ) {
    return 8;
  } else if (day === "saturday") {
    return 10;
  } else if (day === "sunday") {
    return 11;
  } else {
    return "Please pick any day of the week";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 8; // Your ideal hours per night
  return idealHours * 7; // Total hours you prefer per week
};

console.log("Actual Sleep Hours:", getActualSleepHours());
console.log("Ideal Sleep Hours:", getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  /*conditions for algorithm*/
  if (actualSleepHours === idealSleepHours) {
    console.log("you get the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("you sleep to much!");
  } else {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  }
};

calculateSleepDebt();
