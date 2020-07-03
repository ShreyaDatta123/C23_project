const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,390,800,20);
    box1 = new Box(100,389,50,230);
    box2 = new Box(300,389,50,230);
    box3 = new Box(450,389,50,230);
    box4 = new Box(650,389,50,230);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();

    beginShape();
    vertex(275,150);
    vertex(375,40);
    vertex(475,150);

    vertex(75,150);
    vertex(105,40);
    vertex(130,150);

    vertex(625,150);
    vertex(655,40);
    vertex(680,150);

    endShape(CLOSE);

    
}