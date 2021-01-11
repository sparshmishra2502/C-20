var fr
var mr

function setup() {
  createCanvas(800,400);
  fr = createSprite(600, 200, 50, 50);
  fr.shapeColor = "green"
  fr.debug = true;
  fr.velocityX = -4;

  mr = createSprite(200, 200, 50, 50);
  mr.shapeColor = "green"
  mr.debug = true;
  mr.velocityX = 4;
 
}

function draw() {
  background(0);
  
 // mr.x = World.mouseX;
 // mr.y = World.mouseY;

  if(mr.x - fr.x < mr.width/2 + fr.width/2 && 
    fr.x - mr.x < mr.width/2 + fr.width/2 && mr.y - fr.y < mr.height/2 + fr.height/2 && fr.y - mr.y < mr.height/2 + fr.height/2  ){
    fr.shapeColor = "red"
    mr.shapeColor = "red"
  }
  else{ fr.shapeColor = "green";
        mr.shapeColor = "green";
      }

  if(mr.x - fr.x < mr.width/2 + fr.width/2 && 
    fr.x - mr.x < mr.width/2 + fr.width/2 ){
      fr.velocityX = fr.velocityX * (-1)
      mr.velocityX = mr.velocityX * (-1)
    }   
  drawSprites();
}