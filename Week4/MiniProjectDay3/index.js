let okayClick;
let computerNumber = Math.floor(Math.random() * 11);
let userNumber = 0;

function playTheGame() {

    computerNumber = Math.floor(Math.random() * 11);
    console.log(computerNumber);

    okayClick = confirm("Would you like to play a game?");
    if (okayClick == true) {
         userNumber= Number(window.prompt("Choose a number between 0 and 10"));
         console.log(userNumber);
        if (isNaN(userNumber)) {
            alert("Sorry NOT a number, goodbye");
            console.log(userNumber);
        } else if (userNumber > 10) {
            alert("Sorry it's not a good number, goodbye");
             console.log(userNumber);
        } 
    } else {
        alert("No problem, goodbye!");
    }
}

playTheGame();
let round = 0;

function test(userNumber, computerNumber) {
    for (round = 0; round <= 3; round++) {
    if (userNumber > computerNumber) {
        parseInt(prompt("Your number is bigger then the computer's, guess again"));
        break; 
} else if (userNumber < computerNumber) {
    parseInt(prompt("Your number is smaller then the computer's, guess again")); 
    break;
} else if (userNumber == computerNumber) {
    alert("WINNER");
  break;
} else {
    alert("Out of chances")
    break;
}
}
}
test();
