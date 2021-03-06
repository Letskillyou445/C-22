const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;






function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 engine=Engine.create();
 world=engine.world;

 var ground_options={isStatic:true}
 ground=Bodies.rectangle(200,390,200,20,ground_options);
 World.add(world,ground,ball)
 var ball_options={restitution:1.0}
ball=Bodies.circle(200,100,20,ball_options);

}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS)
  rect(ground.position.x,ground.position.y,400,20);
ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}