function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getUserChoice() {
    let choice = prompt("Enter Rock, Paper or Scissors", "");
    return choice;
}

console.log(getComputerChoice());
console.log("User chose: " + getUserChoice());