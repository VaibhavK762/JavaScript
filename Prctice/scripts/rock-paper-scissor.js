const score =JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        losses:0,
        ties:0
      }

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = 
        `Wins: ${score.wins}, 
        Losses: ${score.losses}, 
        Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber=Math.random();
        let computerMove='';
        if (randomNumber < 0.33) {
          computerMove='Rock';
        } else if (randomNumber < 0.66) {
          computerMove='Paper';
        } else {
          computerMove='Scissors';
        }
        return computerMove;
      }

      function playGame(userMove){
        const computerMove = pickComputerMove();

        let result='';
        if (computerMove === userMove){
          result='Tie';
          score.ties++;
        } else if (computerMove === 'Paper' && userMove === 'Rock' ||
                   computerMove === 'Scissors' && userMove === 'Paper' ||
                   computerMove === 'Rock' && userMove === 'Scissors') {
          result='You lose';
          score.losses++;
        } else if (computerMove === 'Scissors' && userMove === 'Rock' ||
                   computerMove === 'Rock' && userMove === 'Paper' ||
                   computerMove === 'Paper' && userMove === 'Scissors') {
          result='You win';
          score.wins++;
        }

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = 
        `you
        <img src="images/${userMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        computer`;
        
        localStorage.setItem('score', JSON.stringify(score)); // save score to local storage
        updateScoreElement(); // update the score display
      }