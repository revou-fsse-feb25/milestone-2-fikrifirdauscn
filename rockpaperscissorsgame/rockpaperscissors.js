const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
    option.addEventListener("click", () => {
        computer.classList.add("shakeComputer");
        player.classList.add("shakePlayer");

        setTimeout(() => {
            computer.classList.remove("shakeComputer");
            player.classList.remove("shakePlayer");

            player.src = "Asset/" + option.textContent + "Player.png";  

            const choice = ["rock", "paper", "scissors"];
            let arrayNo = Math.floor(Math.random() * 3);
            let computerChoice = choice[arrayNo];
            computer.src = "Asset/" + computerChoice + "Computer.png";

            let cPoints = parseInt(computerPoints.textContent);  
            let pPoints = parseInt(playerPoints.textContent);  

            const playerChoice = option.textContent.toUpperCase(); 

            if (playerChoice === "ROCK") {
                if (computerChoice === "paper") {
                    computerPoints.textContent = cPoints + 1;
                } else if (computerChoice === "scissors") {
                    playerPoints.textContent = pPoints + 1;
                }
            } else if (playerChoice === "PAPER") {
                if (computerChoice === "scissors") {
                    computerPoints.textContent = cPoints + 1;
                } else if (computerChoice === "rock") {
                    playerPoints.textContent = pPoints + 1;
                }
            } else if (playerChoice === "SCISSORS") {
                if (computerChoice === "rock") {
                    computerPoints.textContent = cPoints + 1;
                } else if (computerChoice === "paper") {
                    playerPoints.textContent = pPoints + 1;
                }
            }
        }, 900);
    });
});