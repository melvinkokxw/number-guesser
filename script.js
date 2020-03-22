let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10); //generates random integer between 0-9

const compareGuesses = (humanGuess, computerGuess, actualTarget) => {
  if(Math.abs(humanGuess-actualTarget)<=Math.abs(computerGuess-actualTarget)) {
    return true;
  } else {
    return false;
  }
};
