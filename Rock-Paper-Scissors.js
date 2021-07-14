
//event listners to trigger game play with given move on button click - this was a cargo cult from stack exchange and should be cleaned up
document.getElementById('rock').addEventListener("click", function(){playGame('rock')});
document.getElementById('paper').addEventListener("click", function(){playGame('rock')});
document.getElementById('scissors').addEventListener("click",function(){playGame('rock')});

//plays game with given move
function playGame(userChoice) {
   computerChoice = getComputerChoice();
   outcome = getWinner(userChoice, computerChoice);
   declareWinner(userChoice, computerChoice, outcome);
}

//returns random choice of rock, paper or scissors by computer
const getComputerChoice = () => {
   const randomNum = Math.random();
   const randomInt = Math.floor(3*randomNum);
   if (randomInt === 0) {
      return 'rock';
   } else if (randomInt === 1){
      return 'paper';
   } else if (randomInt === 2){
      return 'scissors';
   }
}

//gets winner given choice by user and choice by computer
const getWinner = (userChoice, computerChoice) => {
   switch (userChoice){
      case 'rock':
         switch (computerChoice) {
            case 'rock':
               return 'Tie';
               break;
            case 'paper':
               return 'Computer';
               break;
            case 'scissors':
               return 'User';
               break;
         }
         break;

      case 'paper':
         switch (computerChoice) {
            case 'rock':
               return 'User';
               break;
            case 'paper':
               return 'Tie';
               break;
            case 'scissors':
               return 'Computer';
               break;
         }
         break;
         
      case 'scissors':
         switch (computerChoice) {
            case 'rock':
               return 'Computer';
               break;
            case 'paper':
               return 'User';
               break;
             case 'scissors':
               return 'Tie';
               break;
         }
         break;   
   }
   
}

//prints a message declaring who has won the game
const declareWinner = (userChoice, computerChoice, outcome) => {
   if (outcome === 'Tie'){
      const message = `You chose ${userChoice} and Computer chose ${computerChoice} \n -Game is a tie`;
   } else if (outcome === 'User') {
      const message = `You chose ${userChoice} and Computer chose ${computerChoice} \n -User wins!`;
   } else if (outcome === 'Computer'){
      const message = `You chose ${userChoice} and Computer chose ${computerChoice} \n -Computer wins... better luck next time!`;
   }
}