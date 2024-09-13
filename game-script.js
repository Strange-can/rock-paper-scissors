let playerOptions = document.querySelector(".options");

    playerOptions.addEventListener("click", (play) => {
    let target = play.target;

    switch (target.id) {
        case "scissors":
            playerOptions = "scissors"
            break;
        case "paper":
             playerOptions = "paper"
            break;
        case "stone":
             playerOptions = "stone"
            break;
    }
   let playerChoice = document.querySelector(".playerChoice")
   playerChoice.textContent = `You chose: ${playerOptions}`
   let compChoice = document.querySelector(".compChoice")
   playRound()
    compChoice.textContent = `Computer chose: ${compPlay}`
});

function getHumanChoice() {
    let userInput = playerOptions;
    
    if (userInput === 'scissors' || userInput === 'paper' || userInput === 'stone') {
      return userInput;
    }
}
     let compPlay = null;
      // computer input function
       function computerInputGenerator() {
         let comInput = Math.random();
         if (comInput <= 0.33) {
            return compPlay = 'scissors';
         }
         else if (comInput <= 0.66) {
            return compPlay = 'paper';
         }
         else {
            return compPlay = 'stone';
         }
        }


      let humanScore = 0
      let computerScore = 0
      let victorMessage = document.querySelector(".victor-message")
      let score = document.querySelector(".score")
      //point determinant system and round victory message
      function playRound() {
         let h = getHumanChoice()
         let c = computerInputGenerator()
      if ( h === c) {
         message = ('A tie for this round! no points for either')
      }
      else if ( (h === 'scissors' && c === 'paper') ||
                (h === 'paper' && c === 'stone') ||
                (h === 'stone' && c === 'scissors') ) {
                  message = ('You win this round!!! +1 point')
                  ++humanScore
                }
      else {
         message = ('you lose this round :( 1 point to computer')
         ++computerScore
      }
      victorMessage.textContent = `${message}`
      score.textContent= `${humanScore}(your score) - ${computerScore}(computer\'s score)`

      let final = document.querySelector(".final-victor")
      let quote = document.querySelector(".quote")
      let me = document.querySelector(".myStuff")
      if ( humanScore === 5 && computerScore < 5) {
         final.textContent = 'You\'re the CHAMPION!!! (refresh to play again)'
         final.style.color = "green"
         quote.textContent = '\"One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man.\" - Elbert Hubbard'
         me.textContent = '"hi." - Lincoln the Legend'
      }
      else if ( computerScore === 5 && humanScore < 5) {
         final.textContent = 'Computer emerges victorious (refresh to play again)'
         final.style.color = "red"
         quote.textContent = '“AI will be able to do everything a human can – maybe even better.” – Andrew Ng'
         me.textContent = '"hi." - Lincoln the Legend'
      }
   }