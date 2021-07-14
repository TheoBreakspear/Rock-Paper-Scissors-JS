getUserChoice = userInput => {
    cleanInput = userInput.toLowerCase();
    if (cleanInput === 'rock' || 'paper' || 'scissors') {
      return cleanInput;
    } else {
      console.log('Invalid input - please chose one of rock, paper, or scissors' )
    }
  }
  
  console.log(getUserChoice('scissors'))