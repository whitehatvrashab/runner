var doremon,doremonImage1;
var bg,bgImage;
var ground;
var obstacle,obstacleGroup;
var life=3;

function preload(){
  bgImage=loadImage("bg.jpg");
  doremonImage1=loadAnimation("doremon1.png","doremon2.png","doremon3.png","doremon4.png");
  obstacleImage1=loadImage("obstacle1.png");
  obstacleImage2=loadImage("obstacle2.png");
  obstacleImage3=loadImage("obstacle3.png");
  obstacleImage4=loadImage("obstacle4.png");
}

function setup(){
  createCanvas(1200,600);
  
  
  bg=createSprite(200,60,1200,600);
  bg.addImage(bgImage);
  bg.scale=4;
  bg.velocityX=-6;
  
  doremon=createSprite(100,400,20,20);
  doremon.addAnimation("sprite",doremonImage1);
  doremon.scale=1;
  //doremon.setCollider("rectangle",0,0,50,doremon.height);
  //doremon.debug=true;

  ground=createSprite(400,600,900,20);

  ground.visible=false;
  
  obstacleGroup= new Group();
}

function draw(){
  background("white");
  if(bg.x<0){
    bg.x=bg.width/3;
  }

  if(keyDown("space") && doremon.y>=504){
    doremon.velocityY=-20;
    //console.log(doremon.y);
  }
  doremon.velocityY=doremon.velocityY+0.8
//console.log(doremon.y);

  doremon.collide(ground);
  
  if(World.frameCount%200===0){
    spawnObstacles();
  }

  if(obstacleGroup.isTouching(doremon)){
    console.log("isTouching");
    for(var i=0; i<obstacleGroup.length; i++){
       if(obstacleGroup[i].isTouching(doremon)){
         life=life-1;
         obstacleGroup[i].destroy();
         console.log(life);
       }
    }
  }

  drawSprites();
}

function spawnObstacles(){
 
 obstacle=createSprite(800,570);
 obstacle.setCollider("rectangle",0,0,50,obstacle.height);
 obstacle.debug=true;
 obstacle.velocityX=-6;
 obstacle.scale=1.5


 var rand = Math.round(random(1,4));
 switch(rand) {
   case 1: obstacle.addImage(obstacleImage1);
           break;
   case 2: obstacle.addImage(obstacleImage2);
           break;
   case 3: obstacle.addImage(obstacleImage3);
           break;
   case 4: obstacle.addImage(obstacleImage4);
           break;
   default: break}
   obstacleGroup.add(obstacle);

   obstacle.lifetime=130;






}