// modula aliases 
var Engine = Matter.Engine,
     Render = Matter.Render,
      World = Matter.World, 
       Bodies = Matter.Bodies;



var engine;
var world;
var boxes = [];

var ground;

function setup() {
  createCanvas(600,600)
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
      isStatic: true,
  }

  ground = Bodies.rectangle(300, height, width, 20, options)
  World.add(world, ground)

  wall = new Wall(620, 520, 30, 1000)
  wall2 = new Wall(-16, 520, 30, 1000)

}

function mouseDragged() {
    boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)))


}

function draw() {
  background(51)

  for (var i = 0; i < boxes.length; i++) {
  boxes[i].show()
}
noStroke(255)
fill(170)
strokeWeight(4)
rectMode(CENTER)
rect(ground.position.x, ground.position.y, width, 10)

wall.display()
wall2.display()

}










