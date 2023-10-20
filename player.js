console.log("player.js running OK;");
class Player {
    constructor() {
        this.posX = 100;
        this.posY = 100;
        this.speed = 50;
        this.gameBoardElement = document.querySelector("#game-board");
        this.playerElement = document.createElement("div");
        console.log("constructor", this.playerElement);
        this.playerElement.classList.add("player");
        document.querySelector("body").appendChild(this.playerElement);
        this.playerElement.style.left = `${this.posX}px`;
        this.playerElement.style.top = `${this.posY}px`;
    };
    
    updateCSSpos (x, y) => {
        return ;
    }

    movePlayer(event) {
        const boardWidth = document.querySelector(#game-board).clientWidth;
        const boardHeight = document.querySelector(#game-board).clientHeight;
        // console.log(event, event.key)
        if (event.key === "ArrowRight") {
           // console.log("arrowRightPressed", this.playerElement.style.left);
            this.posX += this.speed;
            if (posX >= boardWidth - this.playerElement.clientWidth)
                this.playerElement.style.
        }
        else if (event.key === "ArrowLeft") {
            this.posX -= this.speed;
        }
        else if (event.key === "ArrowUp") {
            this.posY -= this.speed;
        }
        else if (event.key === "ArrowDown") {
            this.posY += this.speed;
        }
        this.playerElement.style.left = `${this.posX}px`;
        this.playerElement.style.top = `${this.posY}px`;
    };
}