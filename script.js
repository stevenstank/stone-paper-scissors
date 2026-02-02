const prompt = require('prompt-sync')();
let playerChoice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase().trim()
const choice = ["rock", "paper", "scissors"]
if (choice.includes(playerChoice)) {
    console.log("You chose", playerChoice)

}
else {
    console.log("Invalid Choice")
    return
}
const computerChoice = choice[Math.floor(Math.random() * 3)]
console.log("Computer chose", computerChoice)
if (computerChoice == playerChoice) {
    console.log("Its a tie!")
}
else if (computerChoice == "rock" && playerChoice == "scissors") {
    console.log("Computer Wins!")

}
else if (computerChoice == "paper" && playerChoice == "rock") {
    console.log("Computer Wins!")

}
else if (computerChoice == "scissors" && playerChoice=="paper")
{
    console.log("Computer Wins!")

}
else{
    console.log("You Win!")
}






