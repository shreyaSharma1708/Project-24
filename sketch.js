var crumpledBall, ground, bin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	crumpledBall = new Paper(50, 200, 20);
	ground = new Ground(400, 375, 800, 10);
	bin_part1 = new Dustbin(700, 360, 100, 20);
	bin_part2 = new Dustbin(650, 320, 20, 100);
	bin_part3 = new Dustbin(750, 320, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  bin_part1.display();
  bin_part2.display();
  bin_part3.display();
  crumpledBall.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce( crumpledBall.body,  crumpledBall.body.position, {x:70, y:-70})
	}
}



