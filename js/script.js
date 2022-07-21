let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

let direction = "right";


function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
     for(i=0; i < snake.lenght; i++){
        context.fillStyle = "green";
        context.fillRect(snake[1].x, snake[i].y, box, box);
     }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeX -= box;
    if(direction == "down") snakeX += box;

    snake
}

let jogo = setInterval(iniciarJogo, 100);