let computerGuess
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
    startGameView()

}

function mediumMode() {
    maxGuesses = 5;
    startGameView()

}

function hardMode() {
    maxGuesses = 3;
    startGameView()

}

function compareGuess() {
    const userGuess = Number(document.getElementById("inputBox").value)
    userGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = userGuesses;
    attempts ++;
    document.getElementById("attempts").innetHTML = attempts;
   if (attempts < maxGuesses) {
     if (userGuess > computerGuess) {
    document.getElementById("textOutput").innerHTML = "Your guess is too high!";
    document.getElementById("inputBox").value = "";
    } else if (userGuess < computerGuess) {
        document.getElementById("textOutput").innerHTML = "Your guess is too low!";
        document.getElementById("inputBox").value = "";
    } else  {
        document.getElementById("textOutput").innerHTML = "Correct, you got it in" + attempts + " attempts";
        gameEnded();
    }
} else {
    if (userGuess > computerGuess) {
        document.getelementById("textOutput").innerHTML = "You lose, the number was " + computerGuess;
            gameEnded();
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "You lose, the number was " + computerGuess;
            gameEnded();
        } else  {
            document.getElementById("textOutput").innerHTML = "Correct, you got it in " + attempts + " attempts";
            gameEnded();
        }
    }
}



