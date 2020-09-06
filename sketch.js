var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG;
var packageBody,ground;
var rectleft,rectbottom,rectright
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 100,100);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	//helicopterSprite=createSprite(width/2, 200, 10,10);
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rectleft = createSprite(500,625,10,90);
	rectleft.shapeColor = color(255,0,0);
	rectright = createSprite(600,625,10,90);
	rectright.shapeColor = color(225,0,0);
	rectbottom = createSprite(550,665,100,10);
	rectbottom.shapeColor = color(225,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false, density:1.2});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  drawSprites();
 
}
function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(packageSprite.body,packageSprite.body.position,{x:85, y:-85 });




}



}





