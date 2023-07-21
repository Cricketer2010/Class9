var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(100,40,50,10)
}

function draw() 
{
  background(50);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+10
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-10
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y+20
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-20
  }
drawSprites()
}




