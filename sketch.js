const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1200,500);

  engine = Engine.create();
  world = engine.world;

  //BOTTOM BOXES:-
  box1 = new Box(660,460,50,50);
  box2 = new Box(730,460,50,50);
  box3 = new Box(800,460,50,50);
  box4 = new Box(870,460,50,50);
  box5 = new Box(940,460,50,50);

  //LEVEL 1:-
  box6 = new Box(695,425,50,50);
  box7 = new Box(765,425,50,50);
  box8 = new Box(835,425,50,50);
  box9 = new Box(905,425,50,50);

  //LEVEL 2:-
  box10 = new Box(730,365,50,50);
  box11 = new Box(800,365,50,50);
  box12 = new Box(870,365,50,50);

  //LEVEL 3:-
  box13 = new Box(765,320,50,50);
  box14 = new Box(835,320,50,50);

  //TOPMOST BOX:-
  box15 = new Box(800,255,50,50);


  //GROUND:-
  ground = new Ground(600,480,1200,20);


  ball = new Ball(100,100,20);
   
  slingshot = new Slingshot(ball.body,{x:600, y:50});
  fill("white");
}

function draw() {
  background("black"); 
  
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  ball.display();
  slingshot.display();
}


 function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
 }
  
  function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
  }

