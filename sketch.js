var backgroundImg, background;
var catcher, catcherImg, catcherWalking, catcherFalling, catcherJumping, catcherRunning;
var runner, runnerImg;
var wall1, wallImg1;
var wall2, wallImg2;
var building1, buildingImg1;
var building2, buildingImg2;
var building3, buildingImg3;



function preload(){
  backgroundImg = loadImage("Images/Background.jpg");
  catcherImg = loadImage("Images/run.png");
  wallImg1 = loadImage("Images/Obstacle.PNG");
  wallImg2 = loadImage("Images/tire obstacle.png");
  }

function setup() {
createCanvas(1000,1000);
 background = createSprite(200, 0, 800, 800);
 background.addImage(backgroundImg);
 background.scale = 3;
 background.velocityX=-2;

 catcher = createSprite(180, 400, 20, 20);
 catcher.addImage(catcherImg);

 wall1 = createSprite(300, 400, 20, 20);
 wall1.addImage(wallImg1);
}


function draw() {
  //background(0);
  if (background.x<0){
    background.x = background.width/2;
  }

  spawnObstacles();

  drawSprites();
}

