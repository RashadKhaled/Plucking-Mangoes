
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var boyImage
var treeImage
function preload()
{
	boyImage= loadImage("Images/boy.png")
	treeImage= loadImage("Images/tree.png")
}

function setup() {
	createCanvas(1300, 600);
	

	engine = Engine.create();
	world = engine.world;
	mangoObject1= new Mango(933,372,30)
	mangoObject2= new Mango(851,334,30)
	mangoObject3= new Mango(1009,236,30)
	mangoObject4= new Mango(997,304,30)
	mangoObject5= new Mango(1177,311,30)
	mangoObject6= new Mango(894,262,30)
	groundObject=new Ground(650,600,1300,20)
	stoneObject=new Stone(186,421,30)
	slingObject=new Slingshot(stoneObject.body,{x:186,y:421})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  image(boyImage,150,340,200,300)
  image(treeImage,750,150,550,500)
  text(mouseX+","+mouseY,mouseX,mouseY);
  mangoObject1.display()
  mangoObject2.display()
  mangoObject3.display()
  mangoObject4.display()
  mangoObject5.display()
  mangoObject6.display()
 groundObject.display()
 stoneObject.display()
 slingObject.display()
 checkCollision(mangoObject1,stoneObject)
 checkCollision(mangoObject2,stoneObject)
 checkCollision(mangoObject3,stoneObject)
 checkCollision(mangoObject4,stoneObject)
 checkCollision(mangoObject5,stoneObject)
 checkCollision(mangoObject6,stoneObject)
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingObject.fly();
}
function keyPressed(){
	if(keyCode==32){
		slingObject.attach(stoneObject.body)
	}
	
}
function checkCollision(mangoObject,stone){
	mangoPosition=mangoObject.body.position;
	stonePosition=stone.body.position;
	distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
	if(distance<=(mangoObject.radius+stone.radius)){
		Body.setStatic(mangoObject.body,false)
	}

}



