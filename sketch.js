const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, khg;

khg = [];

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20); 

    box1 = new Box(900,200,50,50);
    box2 = new Box(910,200,50,50);

    box3 = new Box(920,200,50,50);
    box4 = new Box(930,200,50,50);

    box5 = new Box(940,200,50,50);

    box6 = new Box(950,200,50,50);
    box7 = new Box(960,200,50,50);

   box8 = new Box(970,200,50,50);
   box9 = new Box(980,200,50,50);
 
    box0 = new Box(990,160,50,50);
    holder1 = new Holder(1000,230,209,30);
    holder2 = new Holder(630,330,209,30);

}

function draw(){
    background("#dec8e3");
    Engine.update(engine);
    strokeWeight(4);
    stroke(15);
    fill("white");
    box1.display();
    //fill("blue");
    box2.display();
    //fill("blue");
    ground.display();

    //fill("blue");
    box3.display();
    //fill("blue");
    box4.display();
    //fill("blue");
    box5.display();
    //fill("blue");
    box6.display();
    //fill("blue");
    box7.display();
    ground.display();

    //fill("blue");
    box8.display();
    //fill("blue");
    box9.display();
    //fill("blue");
    box0.display();
       
    holder1.display();
    holder2.display();
}

