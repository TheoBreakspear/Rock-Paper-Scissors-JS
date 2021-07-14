//gets choice of rock, paper or scissors from user, prints error if input is invalid
const getUserChoice = userInput => {
   cleanInput = userInput.toLowerCase();
   if (cleanInput === 'rock' || cleanInput === 'paper' || cleanInput ==='scissors') {
      return cleanInput;
   } else {
      console.log('Invalid input - please chose one of rock, paper, or scissors' );
   }
}

//returns random choice of rock, paper or scissors by computer
const getComputerChoice = () => {
   const randomNum = Math.random()
   const randomInt = Math.floor(3*randomNum)
   switch (randomInt){
      case 0:
         return 'rock';
         break;
      case 1:
         return 'paper';
         break;
      case 2:
         return 'scissors';
         break;
   }
}

//gets winner given choice by user and choice by computer
const getWinner = (userChoice, computerChoice) => {
   switch (userChoice){

      case 'rock':
         switch (computerChoice){
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
            switch (computerChoice){
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
            switch (computerChoice){
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
const declareWinner = outcome => {
   if (outcome === 'Tie'){
      console.log('Game is a tie');
   } else if (outcome === 'User') {
      console.log('User wins!');
   } else if (outcome === 'Computer'){
      console.log('Computer wins - better luck next time!');
   }
}