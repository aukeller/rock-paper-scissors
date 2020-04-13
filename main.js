const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const results = document.createElement('div');
results.classList.add('results');
results.textContent = '';
container.appendChild(results);

const scoreBoard = document.createElement('div');
scoreBoard.classList.add('scoreBoard');

const playerScoreDisplay = document.createElement('h3');
playerScoreDisplay.classList.add('playerScoreDisplay');
playerScore = 0;
playerScoreDisplay.textContent = 'Your Score: 0';
scoreBoard.appendChild(playerScoreDisplay);

const cpuScoreDisplay = document.createElement('h3');
cpuScoreDisplay.classList.add('cpuScoreDisplay');
cpuScore = 0;
cpuScoreDisplay.textContent = 'CPU Score: 0';
scoreBoard.appendChild(cpuScoreDisplay);

container.appendChild(scoreBoard);

function computerPlay() {      
    let randomNumber = Math.floor(Math.random() * 3);         
    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            results.textContent = 'It\'s a tie! Both rock!';
            cpuScoreDisplay.textContent = 'CPU: ' + cpuScore;
            playerScoreDisplay.textContent = 'Your Score: ' + playerScore;
        } else if (computerSelection == 'paper') {
            results.textContent = 'You lose! Paper beats rock';
            cpuScore ++;
            cpuScoreDisplay.textContent = 'CPU: ' + cpuScore;
            playerScoreDisplay.textContent = 'Your Score ' + playerScore;
        } else {
            results.textContent = 'You win! Rock beats Scissors!';
            playerScore ++;
            cpuScoreDisplay.textContent = 'CPU: ' + cpuScore;
            playerScoreDisplay.textContent = 'Your Score: ' + playerScore;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            results.textContent = 'You lose! Rock beats Scissors!';
            cpuScore ++;
            cpuScoreDisplay.textContent = 'CPU: ' + cpuScore;
            playerScoreDisplay.textContent = 'Your Score: ' + playerScore;

        } else if (computerSelection == 'paper') {
            results.textContent = 'You win! Scissors beats paper!';
            playerScore ++;
            cpuScoreDisplay.textContent = 'CPU: ' + cpuScore;
            playerScoreDisplay.textContent = 'Your Score ' + playerScore;
        } else {
            results.textContent = 'It\'s a tie, both scissors!';
            cpuScoreDisplay.textContent = 'CPU: ' + cpuScore;
            playerScoreDisplay.textContent = 'Your Score: ' + playerScore;

        }
    } else {
        if (computerSelection == 'rock') {
            results.textContent = 'You win! Paper beats Rock!';
            playerScore ++;
            cpuScoreDisplay.textContent = 'CPU: ' + cpuScore;
            playerScoreDisplay.textContent = 'Your Score: ' + playerScore;

        } else if (computerSelection == 'paper') {
            results.textContent = 'It\'s a tie! Both paper!';
            cpuScoreDisplay.textContent = 'CPU: ' + cpuScore;
            playerScoreDisplay.textContent = 'Your Score: ' + playerScore;

        } else {
            results.textContent = 'You lose! Scissors beats paper!';
            cpuScore ++;
            cpuScoreDisplay.textContent = 'CPU: ' + cpuScore;
            playerScoreDisplay.textContent = 'Your Score: ' + playerScore;
        } 
    }
}

playerSelection = '';
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
                playerSelection = button.id;
                });
        });    
function game() {     
    playRound(playerSelection, computerPlay()); 
    if ((playerScore == 5) || (cpuScore == 5)) {
        if (playerScore > cpuScore) {
        results.textContent = 'Yay, you won against the CPU!';
        } else if (playerScore < cpuScore) {
        results.textContent = 'You lost :{';
        } else {
        results.textContent = 'It\'s a tie!';
        }
        playerScore = 0;
        cpuScore = 0;
    }    
}
window.addEventListener('click', game);

