//Made by:
//Amogh P Kaushik 
//Class 8th 
//A student of Whitehatjr 
//Project C29
//tower siege 1
//Teacher: Roopa Mam
//HILL ROCK NATIONAL PUBLIC SCHOOL 



// Writing Constant Values Where the matter engine needs the base
//to work without constant values it wont work 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// Variables declaration 

var ground;
var stand1;
var stand2;
var polygon, polygonIMG
var slingshot
var slingShot 
var blockIMG;

var engine, world;
var backgr;


//Image Store (Loading to sketch)
function preload(){
    backgr = loadImage("bg.jpg");
    polygonIMG = loadImage("polygon.png");
 

}

//Setup function for creating any objects in the game
function setup(){
    var canvas = createCanvas(1350,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    strokeWeight(6);
   // ground static
    ground = new Ground(10,750,3600,20);


   //stand for 1st pyramid
   stand1 = new Stand(500, 550, 400, 20);



   //2nd pyramid
   stand2 = new Stand(1000, 400, 400, 20);
   
    //first pyramid

    //first line 5 blocks
   block1 = new Block(380,510,60,60);
    block2 = new Block(440,510,60,60);
   block3 = new Block(500,510,60,60);
    block4 = new Block(560,510,60,60);
    block5 = new Block(620,510,60,60);
    //2nd line 4 blocks
    block6 = new Block(410,450,60,60);
    block7 = new Block(470,450,60,60);
    block8 = new Block(530,450,60,60);
    block9 = new Block(590,450,60,60);
    //3rd line 3 blocks
        block10 = new Block(440,390,60,60);
   block11 = new Block(500,390,60,60);
    block12 = new Block(560,390,60,60);
    // 4th line 2 blocks
   block13 = new Block(465,330,60,60);
    block14 = new Block(525,330,60,60);
    //single block
    block15 = new Block(490,270,60,60)


    //1st row 5 blocks
    block16 = new Block(880, 360, 60,60);
    block17 = new Block(940, 360, 60,60);
    block18 = new Block(1000, 360, 60,60);
    block19 = new Block(1060, 360, 60,60);
    block20 = new Block(1120, 360, 60,60);

    //2nd row 4 blocks 
    block21 = new Block(905, 300, 60, 60);
    block22 = new Block(965, 300, 60, 60);
    block23 = new Block(1025, 300, 60, 60);
    block24 = new Block(1085, 300, 60, 60);

    //3rd row 3 blocks
    block25 = new Block(935, 240, 60, 60);
    block26 = new Block(995, 240, 60, 60);
    block27 = new Block(1055, 240, 60, 60);

    //4th row 2 blocks 
    block28 = new Block(965, 180, 60, 60);
    block29 = new Block(1025, 180, 60, 60);

    //5th row 1 block
    block30 = new Block(995, 120, 60, 60); 

    // Creating the polygon shaped stricker 
    ball = Bodies.circle(50,200,20);
    //Adding to the world 
    World.add(world,ball);
   
    // Creating Slingshot 
  slingshot = new SlingShot(this.ball,{x:150,y:200})
  

      

   
}
//Displaying the sprites which are being created in the setup();
//Draw();
function draw(){
   background(backgr);

   
   //displaying constant ground 
   ground.display();

   //stands for pyramid 
   //display 
   stand1.display();
   stand2.display();
   strokeWeight(2)
   stroke(15);
   // displaying all the blocks
   //in the consequence order
   fill("blue");
  block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("pink");
     block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
     block11.display();
    block12.display();
   block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();

    
    //displaying the sling shot 
   
    slingshot.display();
    

    
 //adding image of polygon to the stricker 
    imageMode(CENTER)
  image(polygonIMG ,ball.position.x,ball.position.y,40,40);
    

   

}




//this function is used to drag the polygon 
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

//Mam even I have given this mouse release code...
//Please Do help me just in one step



