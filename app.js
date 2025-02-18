let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const userScoreCount = document.querySelector('#userScore');
const compScoreCount = document.querySelector('#compScore');
const msgBtn = document.querySelector('#msgBtn');
const msgBtnContainer = document.querySelector('.msgContainer');
const resetBtn = document.getElementById('resetGame');

//reset game
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    msgBtn.innerText = 'Play  your move!';
    msgBtnContainer.style.background = '#060745';
    userScoreCount.innerText = 0;
    compScoreCount.innerText = 0;
}
resetBtn.addEventListener('click', resetGame);

//user choice
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        console.log('choice was clicked');
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

//computer choice
const genCompChoice = () => {
    let compChoices = ['rock', 'paper', 'scissors'];
    let compChociesIdx = Math.floor(Math.random() * 3);
    return compChoices[compChociesIdx];
}

// draw game
const drawGame = () => {
    console.log('Game was draw');
    msgBtn.innerText = 'Game was draw. Play again';
    msgBtnContainer.style.background = '#060745';
}

//show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin === true) {
        userScore++;
        msgBtn.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
        msgBtnContainer.style.background = 'green';
        userScoreCount.innerText = userScore;
    } else{
        compScore++;
        msgBtn.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msgBtnContainer.style.background = 'red';
        compScoreCount.innerText = compScore;
    }
}
//playgame function
const playGame = (userChoice) => {
    console.log(userChoice);
    //get computer choice
    let compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice === compChoice) {
         drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === 'rock') {
            // paper/ scissors
            userWin = compChoice === 'paper' ? false : true;
        } else if( userChoice === 'paper') {
            // rock / scissors
            userWin = compChoice === 'rock' ? true : false;
        } else if( userChoice === 'scissors') {
            //rock/ paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

