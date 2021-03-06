//Global Variables
var monkey,banana,stone,ground,invisibleGround,monkey_running,score
var bananaImage,obstacleImage,backImage
var bananaGroup,obstaclesGroup

function preload(){
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
  "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png",
  "Monkey_10.png")
  backImage=loadImage("jungle.jpg")
  bananaImage=loadImage("banana.png")
  obstacleImage=loadImage("stone.png")
}


function setup() {
  createCanvas(600,300);

  ground=createSprite(300,270,600,20)
  ground.addAnimation("jungle",backImage)
  ground.x=ground.width/2
  ground.velocityX=-2

  monkey=createSprite(50,280,20,20)
  monkey.addAnimation("monkeyImage",monkey_running)
  monkey.scale=0.2

  score=0;

   invisibleGround=createSprite(300,290,600,5)
  invisibleGround.visible=false

  bananaGroup=new Group()
  obstaclesGroup=new Group()
}


function draw(){
 background(255); 
 monkey.collide(invisibleGround)
console.log(monkey.y)
 if(keyDown("space") && monkey.y >= 226){
      monkey.velocityY = -12 ;
 }
 monkey.velocityY = monkey.velocityY + 0.8;    
      food()
      obstacles()
if(bananaGroup.isTouching(monkey)){
    score=score+2
    bananaGroup.destroyEach()
 }
if (ground.x < 0){
    ground.x = ground.width/2;
  }
if(obstaclesGroup.isTouching(monkey)){
    monkey.scale=0.2
  }
  if(score%10===0){
   
    switch(score){
    case 10: monkey.scale=0.12
     break;
    case 20: monkey.scale=0.14
    break;
    case 30: monkey.scale=0.16
    break;
    case 40: monkey.scale=0.18
    break;
    default:break;
      }
    }
 drawSprites();
    stroke("white")
    textSize(20)
    fill("white")
    text("Score:"+score,500,50)
}

function food(){
  if(World.frameCount%80===0){
  var banana=createSprite(400,random(170,270),10,10)
      banana.addImage(bananaImage)
      banana.scale=0.1
      banana.velocityX=-5
      banana.lifetime=100
      bananaGroup.add(banana)
  }
}
  function obstacles(){
  if(World.frameCount%300===0){
  var stone=createSprite(600,265,10,10)
      stone.addImage(obstacleImage)
      stone.scale=0.1
      stone.velocityX=-4
      stone.lifetime=100
      obstaclesGroup.add(stone)
  }
}