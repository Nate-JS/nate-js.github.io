"use strict";

let canvas, context, snake;

const BLOCK_SIZE = 25,
  SNAKE_COLOR = "blue";

function init() {
  canvas = document.querySelector("canvas");
  context = canvas.getContext("2d");

  canvas.style.width = "100%";
  canvas.style.height = "100%";

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  snake = {
    body: [{ x: canvas.width / 2, y: canvas.height / 2 }],
    length: 1,

    draw() {
      this.body.forEach((block) => {
        context.fillStyle = SNAKE_COLOR;
        context.strokeStyle = SNAKE_COLOR;
        context.fillRect(block.x, block.y, BLOCK_SIZE, BLOCK_SIZE);
      });
    },
  };
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.draw();

  requestAnimationFrame(update);
}

init();
update();
