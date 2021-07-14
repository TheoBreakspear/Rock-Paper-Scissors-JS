getUserChoice = userInput => {
    cleanInput = userInput.toLowerCase();
    if (cleanInput === 'rock' || cleanInput === 'paper' || cleanInput ==='scissors') {
      return cleanInput;
    } else {
      console.log('Invalid input - please chose one of rock, paper, or scissors' )
    }
  }
  
  console.log(getUserChoice('scissors'))
  console.log(getUserChoice('foo')