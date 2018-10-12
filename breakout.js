"use strict";

let player, ball, bricks, score, scoreElem,
    wallTop, wallBottom, wallLeft, wallRight,
    MAX_SPEED = 10;

function setup() {
    createCanvas(500, 600);

    // init
    player = createSprite(30, height-40, 100, 10);
    player.immovable = true;
    player.shapeColor = color(255, 255, 255);

    ball = createSprite(width/2, height/2, 11, 11);
    ball.maxSpeed = MAX_SPEED;
    ball.setSpeed(-MAX_SPEED, 90);

    score = 0;
    scoreElem = document.getElementById('score');

    // walls
    wallTop = createSprite(width/2, -15, width, 30);
    wallTop.immovable = true;
    wallBottom = createSprite(width/2, height+30/2, width, 30);
    wallBottom.immovable = true;
    wallLeft = createSprite(-15, height/2, 30, height);
    wallLeft.immovable = true;
    wallRight = createSprite(width+15, height/2, 30, height);
    wallRight.immovable = true;
    
    createBricks();
}

function createBricks() {
    const OFFSET = 4;
    
    if (bricks) bricks.removeSprites();
    bricks = new Group();

    for (let i=0;i<8;i++) {
        for (let j=0;j<6;j++) {
            const sprite = createSprite((i * (OFFSET + 50)) + 50, (j * (OFFSET + 20) + 30), 50, 20);
            sprite.shapeColor = color(255, 255, 255);
            sprite.immovable = true;
            bricks.add(sprite);
        }
    }
}

function draw() {
    background(0);

    player.position.x = constrain(mouseX, player.width/2, width-player.width/2);

    ball.bounce(wallTop);
    ball.bounce(wallBottom, onBallHitBottom);
    ball.bounce(wallLeft);
    ball.bounce(wallRight);

    ball.bounce(bricks, onBallHitBrick);

    let swing;

    if(ball.bounce(player)) {
        swing = (ball.position.x-player.position.x)/3;
        ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
    }

    drawSprites();
}

function onBallHitBrick(ball, brick) {
    updateScore(10);
    brick.remove();   
}

function onBallHitBottom(ball, wall) {
    player.position.x = 30
    player.position.y = height-40;
    ball.position.x = width/2;
    ball.position.y = height/2;

    createBricks();
    updateScore(-score);
}

function updateScore(toAdd) {
    score += toAdd;
    scoreElem.innerText = score;
}