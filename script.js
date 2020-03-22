let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10); //generates random integer between 0-9

//compare the differences between the human's guess and computer's guess to determine the winner
const compareGuesses = (humanGuess, computerGuess, actualTarget) => Math.abs(humanGuess-actualTarget)<=Math.abs(computerGuess-actualTarget);

//update the score according to the winner of the round
const updateScore = winner => {
  if (winner==='human') {
    humanScore++;
  } else {
    computerScore++;
  }
};

//advances round when called
const advanceRound = () => {
  currentRoundNumber++;
};
