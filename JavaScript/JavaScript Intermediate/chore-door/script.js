// Access HTML elements
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const isClicked = (door) => door.src === closedDoorPath;

const isBot = (door) => door.src === botDoorPath;

const gameOver = (status) => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false; // Set the game to not currently playing
};

const playDoor = door => {
  numClosedDoors--;

  if (numClosedDoors === 0) {
    gameOver("win");
  }
};

const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * numCLosedDoors);

  if (chorDoor === 0) {
    openDoor1 = botDoorPath;
  } else if (chorDoor === 1) {
    openDoor2 = beachDoorPath;
  } else {
    openDoor3 = spaceDoorPath;
  }
};

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
};

// Start a game round

const startRound = () => {
  if (!currentlyPlaying) {
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Good luck!';
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    randomChoreDoorGenerator();
  }
};

