function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getUserChoice() {
    // let again = true;
    while (true) {
        let choice = prompt("Enter Rock, Paper or Scissors", "").toLowerCase();
        switch (choice) {
            case "rock": case "paper": case "scissors":
                return choice;
            default:
                console.log("Invalid choice");
        }
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "TIE";
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "PLOSE";
    }

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "PWIN";
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "PWIN";
    }

    if (playerSelection == "paper" && computerSelection == "scissors") {
        return "PLOSE";
    }

    if (playerSelection == "scissors" && computerSelection == "rock") {
        return "PLOSE";
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "PWIN";
    }
}

function game() {
    let score = 0;
    let computerSelection;
    let playerSelection;

    for (i = 0; i < 5; i++) {
        console.log("Round: " + (i + 1));

        computerSelection = getComputerChoice();
        playerSelection = getUserChoice();

        console.log("Computer chose: " + computerSelection + ", you chose: " + playerSelection);

        let result = playRound(playerSelection, computerSelection);
        switch (result) {
            case "TIE":
                console.log("Tie");
                break;
            case "PWIN": score += 1;
                console.log("You won this round");
                break;
            case "PLOSE": score -= 1;
                console.log("You lose this round");
                break;
        }
    }
    
    if (score == 0) {
        alert("Game tie");
    } else if (score > 0) {
        alert("Player win");
    } else {
        "You lose"
    }
}

// start the game
game();