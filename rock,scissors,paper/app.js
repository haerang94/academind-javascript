// const startGameBtn = document.getElementById("start-game-btn");

// const ROCK = "ROCK";
// const SCISSORS = "SCISSORS";
// const PAPER = "PAPER";
// const DEFAULT_USER_CHOICE = ROCK;
// const RESULT_DRAW = "DRAW";
// const RESULT_PLAYER_WINS = "PLAYER_WINS";
// const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

// let gameIsRunning = false;

// const getPlayerChoice = function() {
//   const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, "").toUpperCase();
//   if (selection !== ROCK && selection !== SCISSORS && selection !== PAPER) {
//     alert("Invalid choice! We chose Rock for you!");
//     return DEFAULT_USER_CHOICE;
//   }
//   return selection;
// };

// const getComputerChoice = function() {
//   const randomValue = Math.random();
//   if (randomValue < 0.34) {
//     return ROCK;
//   } else if (randomValue < 0.67) {
//     return PAPER;
//   } else return SCISSORS;
// };

// const getWinner = function(cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else return RESULT_COMPUTER_WINS;
// };

// const start = function() {
//   if (gameIsRunning) {
//     //이미 게임 진행중이면 다시 클릭해도 아무것도 동작 안하도록 함
//     return;
//   }
//   gameIsRunning = true;
//   console.log("Starting game...");
//   const PlayerChoice = getPlayerChoice();
//   const computerChoice = getComputerChoice();
//   const winner = getWinner(computerChoice, PlayerChoice);
//   let message = `You picked ${PlayerChoice}, computer picked ${computerChoice}, therefore you`;
//   if (winner === RESULT_DRAW) {
//     message = message + "had a draw.";
//   } else if (winner === RESULT_PLAYER_WINS) {
//     message = message + " won.";
//   } else {
//     message = message + " lost.";
//   }
//   alert(message);
//   gameIsRunning = false;
// };

// startGameBtn.addEventListener("click", start);

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const subtractUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    //don't use that
    sum -= num;
  }
  resultHandler(sum);
};

const showResult = result => {
  alert("The result after adding all numbers is: " + result);
};

sumUp(showResult, 1, 2, "nan", 3, 4, 5);
subtractUp(showResult, 1, 2, 3, 4, 5);
