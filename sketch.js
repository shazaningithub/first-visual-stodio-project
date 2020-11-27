var fixedRect,movingRect

function setup() {

  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=-2;
  movingRect=createSprite(600,200,50,50);
  movingRect.shapeColor="blue";
  movingRect.velocityY=2;
}

function draw() {
  background(220);  
//  movingRect.y=mouseY;
//  movingRect.x=mouseX;
//  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
//   &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
//   &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
//   &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2) {
//    movingRect.shapeColor="red";
//    fixedRect.shapeColor="red";
//  }else {
//    movingRect.shapeColor="blue";
//    fixedRect.shapeColor="green";
//  }
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2) {
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
  }
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2) {
      movingRect.velocityY=movingRect.velocityY*(-1);
      fixedRect.velocityY=fixedRect.velocityY*(-1);
    }
  drawSprites();
}