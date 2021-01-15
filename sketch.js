
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;*/

var bird, upbarrier, downbarrier,bk,bkimage,birdimage,bird2image, pipe1, pipe2,ground;
var group1, group2, gameover, gamesprite, score,swoosh,hit,end;

var play = 1;
var end = 0;
var gameState = play;

function preload()
{
bkimage = loadImage("bk.png");
birdimage = loadAnimation("realbird3.png");
bird2image = loadAnimation("real2bird.png");
gameover = loadImage("textGameOver.png");
pipe1 = loadImage("pipe4.png");
pipe2 = loadImage("pipe3.png");
ground = loadImage("ground.png",600,700);
swoosh = loadSound("file/sfx_swooshing.mp3");
hit = loadSound("file/sfx_hit.mp3");
end = loadSound("file/sfx_die.mp3");
}

function setup() {
	createCanvas(600, 700);



	//bk = createSprite(300,350);
	//bk.addImage(bkimage);

	bird = createSprite(100,350,50,10,10);
	bird.addAnimation("bird",birdimage);
	bird.scale = 0.1;

	gamesprite = createSprite(350,350);
	gamesprite.addImage(gameover);
	gamesprite.visible = false;


	group1 = new Group ();
	group2 = new Group ();

	bird.debug = true;
	bird.setCollider("circle",0,0,40);



score  = 0;

	








	


	/*engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);*/
  
}  


function draw() {
  background(bkimage);


  if(gameState===play){


	if(keyDown("space")){
		bird.velocityY = -15;
		bird.changeAnimation("bird2",bird2image);
	}
	bird.velocityY += 2;

  score = score+1;

  if(group1.isTouching(bird) || group2.isTouching(bird)){
	gameState = end;
  }
  
bird.collide(group1);
bird.collide(group2);
 
  createBarrier();
  createdownBarrier();
	
  }
  else if (gameState === end){
	  gamesprite.visible = true;
	  bird.x = 50;
	  bird.y = 350;
	  bird.velocityX = 0;
	  bird.velocityY = 0;
	  group1.setVelocityXEach(0);
	  group2.setVelocityXEach(0);
	  group1.setLifetimeEach(-1);
	  group2.setLifetimeEach(-1);
	  gamesprite.depth = group1.depth+1;
  }


 

  
 textFont ("Montserrat") 
fill ("red");
textSize (25);
text ("Score: "+score,50,50);




  drawSprites();
  
  
  
  image (ground,0,610);


 
}

function createBarrier(){
	if (frameCount%60===0){
		upbarrier = createSprite(600,0,70,random(100,500));
		upbarrier.addImage(pipe1);
		upbarrier.scale = 0.5;
		upbarrier.velocityX = -(5 + score/100);
		group1.add(upbarrier);
	}


}
function createdownBarrier(){
	if (frameCount%80===0){
		downbarrier = createSprite(600,680,70,random(500,700));
		downbarrier.addImage(pipe2);
		downbarrier.scale = 0.6;
		downbarrier.velocityX = -(5 + score/100);
		group2.add(downbarrier);
	}
}

 