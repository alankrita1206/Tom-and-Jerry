var garden , gardenImage ; 
var tom , tomImage1 , tomImage2 , tomImage3, tomImage4 ;
var jerry,jerryImage1,jerryImage2,jerryImage3, jerryImage4;


function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png") ; 
    tomImage1=loadAnimation("images/cat1.png");
    tomImage2=loadAnimation("images/cat2.png" , "images/cat3.png" );
    tomImage4=loadAnimation("images/cat4.png");
    jerryImage1 = loadAnimation("images/mouse1.png");
    jerryImage2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    jerryImage4 = loadAnimation("images/mouse4.png");
    
    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,650);
    tom.addAnimation("slipping", tomImage1);
    tom.scale = 0.2 ;

    jerry = createSprite(200,650);
    jerry.addAnimation("standing" , jerryImage1);
    jerry.scale = 0.2 ; 



}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width/2 - jerry.width/2)){
      tom.velocityX = 0;
      tom.addAnimation("stop", tomImage4);
      tom.x = 300;
      tom.scale= 0.2;
      tom.changeAnimation("stop");

      jerry.addAnimation("jerryStop", jerryImage4);
      jerry.scale=0.2;
      jerry.changeAnimation("jerryStop");


    }
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5; 
      tom.addAnimation("tomRunning", tomImage2);
      tom.changeAnimation("tomRunning");
      
      jerry.addAnimation("jerryTeasing", jerryImage2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerryTeasing");
  }
}
