// Creates an array that lists out all of the options 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var usedGuesses = 0;
var guessesLeft = 10;
let guessArry = [];
console.log(guessArry);
// Create variables that hold references to the places in the HTML where we want to display things.
var createList = document.getElementById('listguesses-text');
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var usedGuessesText = document.getElementById("usedguesses-text");
var guessesLeftText = document.getElementById("guessesleft-text");


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    // Only run the following code block if the user presses "r" or "p" or "s".
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
        guessArry.push(userGuess);
        createList.innerHTML = guessArry.join(',');
        if (userGuess === computerGuess) {
            wins++; usedGuesses++; guessesLeft--;
        }
        else {
            losses++; usedGuesses++; guessesLeft--;
        }
        directionsText.textContent = "";
        userChoiceText.textContent = "You chose:" + "" + userGuess;
        computerChoiceText.textContent = "I was thinking of:" + "" + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        usedGuessesText.textContent = "used guesses: " + "" + usedGuesses;
        guessesLeftText.textContent = "guesses left: " + "" + guessesLeft;
    }

    if ((losses === 10) || (usedGuesses === 10)) {
        alert("You are not a good mind reader");
    }
    if (wins === 1) {
        alert("How did you know what I was thinking?!")
    }
};

