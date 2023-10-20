console.log("index.js running OK;");
const myGame = new Game;
console.log(myGame);
const player1 = new Player;
console.log(player1);

const score = document.createElement("h2");
score.innerText = "00";
score.id = "score-display";
document.querySelector("#game-board").appendChild(score);
const updateScore = () => {

}

document.addEventListener("keydown", (e) => {
    player1.movePlayer(e);
    myGame.score++;
});