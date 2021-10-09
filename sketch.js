var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var world;
var engine;
var ball;

var bottom1;
var bottom2;
var bottom3;
var bottom4;
var bottom5;
var bottom6;
  
function setup(){
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  var ballOptions = {
    restitution:0
  }

  ball = Bodies.circle(100,430,20,ballOptions);
  World.add(world,ball);


  bottom1 = new Ground(100,450,80,20);

  bottom2 = new Ground(250,410,80,20);

  bottom3 = new Ground(450,370,80,20);
  
  bottom4 = new Ground(330,300,80,20);

  bottom5 = new Ground(200,270,90,20);

  bottom6 = new Ground(100,220,70,20);
}

function draw(){
  background("blue");

  Engine.update(engine);

  if(keyIsDown(UP_ARROW)){
    jump();
  }
  if(keyIsDown(RIGHT_ARROW)){
    right();
  }
  if(keyIsDown(LEFT_ARROW)){
    left();
  }
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);

  bottom1.show();
  bottom2.show();
  bottom3.show();
  bottom4.show();
  bottom5.show();
  bottom6.show();
}

function jump(){
  Matter.Body.applyForce(ball,ball.position,{x:0,y:-0.005})
}
function left(){
  Matter.Body.applyForce(ball,ball.position,{x:-0.005,y:0});
}
function right(){
  Matter.Body.applyForce(ball,ball.position,{x:0.005,y:0});
}