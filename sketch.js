var ball,ball_moving;

var paddle,paddleImage;

function preload() {
/* preload your images here of the ball and the paddle */
ballImage=loadImage("ball.png");
paddleImage=loadImage("paddle.png");
  
}

function setup() {
  createCanvas(400, 400);
  /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball=createSprite(65,175,10,20);
  ball.addImage(ballImage);
  ball.scale=0.5;
  
  paddle=createSprite(380,200,10,70);
  paddle.addImage(paddleImage);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;
}

function explosion(){ball.velocityY=random(-8,8);}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle,explosion);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
 /* what should happen when you press the UP Arrow Key */
 if (keyDown(UP_ARROW)) {
   paddle.velocityX= 0;
   paddle.velocityY=-4;
  
  }
  
  
 /* what should happen when you press the UP Arrow Key */
 if (keyDown(DOWN_ARROW)) {
  paddle.velocityX=0;
  paddle.velocityY=4;
  
  }


  drawSprites();

}

function explosion(){ball.velocityY=random(-8,8);}



