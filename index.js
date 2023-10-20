console.log("index.js running OK;");
const myGame = new Game;
console.log(myGame);
const player1 = new Player;
console.log(player1);

document.addEventListener("keydown", (e) => player1.movePlayer(e));