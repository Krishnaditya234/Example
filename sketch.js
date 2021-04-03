var ironman;
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg1.jpg");
  ironmanImg = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1200, 600);

  bg = createSprite(1200,600);
  bg.addImage(backgroundImg);
  bg.scale =2;

  ironman = createSprite(200,500,5,50);
  ironman.addImage(ironmanImg);
  ironman.scale =0.3;
}


function draw() {


  if(keyDown("up") ) {
    ironman.velocityY = -12;
  }
  if(keyDown("left") ) {
    ironman.velocityX = -6;
  }
  if(keyDown("right") ) {
    ironman.velocityX = 6;
  }
    ironman.velocityY = ironman.velocityY + 0.3;


    drawSprites();
   
}

