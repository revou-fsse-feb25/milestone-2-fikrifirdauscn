let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;

function gameEnded() {
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute("readonly", "readonly");
}

function newGame() {
    window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100) + 1;
    console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

function startGameView() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function easyMode() {
    maxGuesses = 10;
    startGameView();
}

function mediumMode() {
    maxGuesses = 5;
    startGameView();
}

function hardMode() {
    maxGuesses = 3;
    startGameView();
}

function compareGuess() {
    const userGuess = Number(document.getElementById("inputBox").value); // Convert input to a number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("textOutput").innerHTML = "Please enter a valid number between 1 and 100.";
        document.getElementById("inputBox").value = "";
        return;
    }

    userGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = userGuesses;
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;

    if (attempts < maxGuesses) {
        switch (true) {
            case (userGuess > computerGuess):
                document.getElementById("textOutput").innerHTML = `Your guess is too high!`;
                document.getElementById("inputBox").value = "";
                break;
            case (userGuess < computerGuess):
                document.getElementById("textOutput").innerHTML = `Your guess is too low!`;
                document.getElementById("inputBox").value = "";
                break;
            case (userGuess === computerGuess):
                document.getElementById("textOutput").innerHTML = `Correct, you got it in ${attempts} attempts!`;
                gameEnded();
                break;
        }
    } else {
        switch (true) {
            case (userGuess !== computerGuess):
                document.getElementById("textOutput").innerHTML = `You lose, the number was ${computerGuess}`;
                gameEnded();
                break;
            case (userGuess === computerGuess):
                document.getElementById("textOutput").innerHTML = `Correct, you got it in ${attempts} attempts!`;
                gameEnded();
                break;
        }
    }
}
