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
function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    }
    else if (
        playerSelection === "Rock" && computerSelection === "Paper" || 
        playerSelection === "Paper" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Rock"
    ) {
        return 1;
    }
    else if (
        playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" || 
        playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
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

//make a game
function game (amount) {
    if (amount >= 1 && amount <= 10) {
        let computerScore = 0;
        let playerScore = 0;

        for (let i = 0; i < amount; i++) {

            playerSelection = normal(prompt(`Round ${i+1}\nYours beat: `));
            let computerSelection = computerPlay();
            let winner = round(playerSelection, computerSelection);
            
            if (winner === 0) {
                console.log(`Round ${i+1} \nI have ${computerSelection} \nTie! ${playerSelection} is equal to ${computerSelection}`);
            }
            else if (winner === 1) {
                console.log(`Round ${i+1} \nI have ${computerSelection} \nYou lose! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
            }
            else if (winner === 2) {
                console.log(`Round ${i+1} \nI have ${computerSelection} \nYou win! ${playerSelection} beats ${computerSelection}`);
                playerScore++;
            }
            
        }

        if (computerScore === playerScore) {
            game (1);
        }
        else {
            return {
                computerScore: computerScore,
                playerScore: playerScore
            }
        }
    }
    
    else {
        console.log ("Amount of rounds should be from 1 to 10");
        return 0;
    }
}

//print function
function print_winner(computerScore, playerScore) {
    if (computerScore > playerScore) {
        console.log(`Computer has: ${computerScore} \nYou have: ${playerScore} \nFinally you LOSE!`)
    }
    else if (computerScore < playerScore) {
        console.log(`Computer has: ${computerScore} \nYou have: ${playerScore} \nFinally you WIN!`)
    }
}

let amount = prompt("How many rounds do you want to play? ");
let result = game (amount);
print_winner (result.computerScore, result.playerScore);

