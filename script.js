
let computerScore = 0;
let playerScore = 0;
let amount = 5;

//get a random number
function computerPlay() {
    let x = Math.floor(Math.random() * 3);
    let computerSelection = "";
    switch (x) {
        case 0:
            computerSelection = "Rock";
            break;
        case 1:
            computerSelection = "Paper";
            break;
        case 2:
            computerSelection = "Scissors";
            break;            
    }
    return computerSelection;
}

//make one round
function round(playerSelection) {
    let computerSelection = computerPlay();
    playerSR.textContent = playerSelection;
    computerSR.textContent = computerSelection;
    if (playerSelection === computerSelection) {
        result.textContent = `Tie! ${playerSelection} is equal to ${computerSelection}`;
        return 0;
    }
    else if (
        playerSelection === "Rock" && computerSelection === "Paper" || 
        playerSelection === "Paper" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Rock"
    ) {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        return 1;
    }
    else if (
        playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" || 
        playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return 2;
    }
    
}

//make input to normal
function normal (input) {
    if (input != "") {
        let ex = "";
        for (let i = 0; i < input.length; i++) {
            ex += input.charAt(i).toLowerCase();
        }
        let answer = ex.charAt(0).toUpperCase() + ex.slice(1);
        return answer;
    }
    return 0;
}

//counting score every round
function scoreCounter (winner, amount) {
    switch (winner) {
        case 0:
            break;
        case 1:
            computerScore++;
            break;
        case 2:
            playerScore++;
            break;
    }
    playerS.textContent = playerScore;
    computerS.textContent = computerScore;
    if (computerScore === amount || playerScore === amount) {
        print_winner (computerScore, playerScore);
        disableBtn()
    }
}

//DOM
const playerS = document.querySelector("#playerS");
const computerS = document.querySelector("#computerS");
const winS = document.querySelector("#winS");
const result = document.querySelector("#result");
const playerSR = document.querySelector("#playerSR");
const computerSR = document.querySelector("#computerSR");



//print function
function print_winner(computerScore, playerScore) {
    if (computerScore > playerScore) {
        winS.textContent = `Finally you LOSE!`;
    }
    else if (computerScore < playerScore) {
        winS.textContent = `Finally you WIN!`;
    }
}


const start = document.querySelector('#start');
start.addEventListener('click', function (e) {
    restart();
});


function restart() {
    computerScore = 0;
    playerScore = 0;
    winS.textContent = "";
    playerS.textContent = "0";
    computerS.textContent = "0";
    enableBtn();
    result.textContent = "Make your choice";
    playerSR.textContent = "-";
    computerSR.textContent = "-";
    
}

function disableBtn() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

function enableBtn() {
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
}



    //assign button's value to playerSelection 
    const btnRock = document.querySelector('#rock');
    btnRock.addEventListener('click', function (e) {
        scoreCounter(round("Rock"), amount);
        console.log(computerScore);
        console.log(playerScore);   
    });

    const btnPaper = document.querySelector('#paper');
    btnPaper.addEventListener('click', function (e) {
        scoreCounter(round("Paper"), amount);
        console.log(computerScore);
        console.log(playerScore);  
    });

    const btnScissors = document.querySelector('#scissors');
    btnScissors.addEventListener('click', function (e) {
        scoreCounter(round("Scissors"), amount);
        console.log(computerScore);
        console.log(playerScore);  
    });

