var rect1 , rect2; 



function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "yellow";
  rect2 = createSprite(340, 354, 30, 50);
  rect2.shapeColor = "yellow";
}

function draw() {
  background(0);  
  rect1.x = mouseX ;
  rect1.y = mouseY;
  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && 
    rect2.x - rect1.x < rect1.width/2 + rect2.width/2 && 
    rect1.y - rect2.y < rect1.height/2 + rect2.height/2 && 
    rect2.y - rect1.y < rect1.height/2 + rect2.height/2 ){
   rect1.shapeColor = "blue";
   rect2.shapeColor = "blue";
  } 

  else {
    rect1.shapeColor = "yellow";
    rect2.shapeColor = "yellow";
  }
  drawSprites();
}