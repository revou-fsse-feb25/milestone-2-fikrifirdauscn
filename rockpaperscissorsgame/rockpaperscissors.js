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

            switch (playerChoice) {
                case "ROCK":
                    switch (computerChoice) {
                        case "paper":
                            computerPoints.textContent = `${cPoints + 1}`;
                            break;
                        case "scissors":
                            playerPoints.textContent = `${pPoints + 1}`;
                            break;
                    }
                    break;

                case "PAPER":
                    switch (computerChoice) {
                        case "scissors":
                            computerPoints.textContent = `${cPoints + 1}`;
                            break;
                        case "rock":
                            playerPoints.textContent = `${pPoints + 1}`;
                            break;
                    }
                    break;

                case "SCISSORS":
                    switch (computerChoice) {
                        case "rock":
                            computerPoints.textContent = `${cPoints + 1}`;
                            break;
                        case "paper":
                            playerPoints.textContent = `${pPoints + 1}`;
                            break;
                    }
                    break;
            }
        }, 900);
    });
});
