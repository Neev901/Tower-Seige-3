const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, bg_img;
var score=0;

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, { x: 100, y: 200 })
    Slingshot.join(polygon)
  }
}

function preload() {
  bg_img = loadImage("download.jpg")
}

function setup() {
  var canvas = createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  polygon = new Polygon(100, 200)

  Slingshot = new slingshot(polygon.body, { x: 100, y: 200 })

  //level1
  block1 = new box(290, 235, 20, 20, "darkred");
  block2 = new box(310, 235, 20, 20, "darkred");
  block3 = new box(330, 235, 20, 20, "darkred");
  block4 = new box(350, 235, 20, 20, "darkred");
  block5 = new box(370, 235, 20, 20, "darkred");
  block6 = new box(390, 235, 20, 20, "darkred");
  block7 = new box(410, 235, 20, 20, "darkred");
  //level2
  block8 = new box(300, 215, 20, 20, "darkorange");
  block9 = new box(320, 215, 20, 20, "darkorange");
  block10 = new box(340, 215, 20, 20, "darkorange");
  block11 = new box(360, 215, 20, 20, "darkorange");
  block12 = new box(380, 215, 20, 20, "darkorange");
  block13 = new box(400, 215, 20, 20, "darkorange");
  //level3
  block14 = new box(310, 195, 20, 20, "yellow");
  block15 = new box(330, 195, 20, 20, "yellow");
  block16 = new box(350, 195, 20, 20, "yellow");
  block17 = new box(370, 195, 20, 20, "yellow");
  block18 = new box(390, 195, 20, 20, "yellow");
  //level4
  block19 = new box(320, 175, 20, 20, "lime");
  block20 = new box(340, 175, 20, 20, "lime");
  block21 = new box(360, 175, 20, 20, "lime");
  block22 = new box(380, 175, 20, 20, "lime");
  //level5
  block23 = new box(330, 155, 20, 20, "blue");
  block24 = new box(350, 155, 20, 20, "blue");
  block25 = new box(370, 155, 20, 20, "blue");
  //level6
  block26 = new box(340, 135, 20, 20, "indigo");
  block27 = new box(360, 135, 20, 20, "indigo");
  //top
  block28 = new box(350, 115, 20, 20, "darkviolet");

  ground1 = new Ground(350, 250, 160, 10)

  //level1
  block01 = new box(540, 335, 20, 20, "darkred");
  block02 = new box(560, 335, 20, 20, "darkred");
  block03 = new box(580, 335, 20, 20, "darkred");
  block04 = new box(600, 335, 20, 20, "darkred");
  block05 = new box(620, 335, 20, 20, "darkred");
  block06 = new box(640, 335, 20, 20, "darkred");
  block07 = new box(660, 335, 20, 20, "darkred");
  //level2
  block08 = new box(550, 315, 20, 20, "darkorange");
  block09 = new box(570, 315, 20, 20, "darkorange");
  block010 = new box(590, 315, 20, 20, "darkorange");
  block011 = new box(610, 315, 20, 20, "darkorange");
  block012 = new box(630, 315, 20, 20, "darkorange");
  block013 = new box(650, 315, 20, 20, "darkorange");
  //level3
  block014 = new box(560, 295, 20, 20, "yellow");
  block015 = new box(580, 295, 20, 20, "yellow");
  block016 = new box(600, 295, 20, 20, "yellow");
  block017 = new box(620, 295, 20, 20, "yellow");
  block018 = new box(640, 295, 20, 20, "yellow");
  //level4
  block019 = new box(570, 275, 20, 20, "lime");
  block020 = new box(590, 275, 20, 20, "lime");
  block021 = new box(610, 275, 20, 20, "lime");
  block022 = new box(630, 275, 20, 20, "lime");
  //level5
  block023 = new box(580, 255, 20, 20, "blue");
  block024 = new box(600, 255, 20, 20, "blue");
  block025 = new box(620, 255, 20, 20, "blue");
  //level6
  block026 = new box(590, 235, 20, 20, "indigo");
  block027 = new box(610, 235, 20, 20, "indigo");
  //top
  block028 = new box(600, 215, 20, 20, "darkviolet");

  ground2 = new Ground(600, 350, 160, 10)

  //level1
  block001 = new box(540, 160, 20, 20, "darkred");
  block002 = new box(560, 160, 20, 20, "darkred");
  block003 = new box(580, 160, 20, 20, "darkred");
  block004 = new box(600, 160, 20, 20, "darkred");
  block005 = new box(620, 160, 20, 20, "darkred");
  block006 = new box(640, 160, 20, 20, "darkred");
  block007 = new box(660, 160, 20, 20, "darkred");
  //level2
  block008 = new box(550, 140, 20, 20, "darkorange");
  block009 = new box(570, 140, 20, 20, "darkorange");
  block0010 = new box(590, 140, 20, 20, "darkorange");
  block0011 = new box(610, 140, 20, 20, "darkorange");
  block0012 = new box(630, 140, 20, 20, "darkorange");
  block0013 = new box(650, 140, 20, 20, "darkorange");
  //level3
  block0014 = new box(560, 120, 20, 20, "yellow");
  block0015 = new box(580, 120, 20, 20, "yellow");
  block0016 = new box(600, 120, 20, 20, "yellow");
  block0017 = new box(620, 120, 20, 20, "yellow");
  block0018 = new box(640, 120, 20, 20, "yellow");
  //level4
  block0019 = new box(570, 100, 20, 20, "lime");
  block0020 = new box(590, 100, 20, 20, "lime");
  block0021 = new box(610, 100, 20, 20, "lime");
  block0022 = new box(630, 100, 20, 20, "lime");
  //level5
  block0023 = new box(580, 80, 20, 20, "blue");
  block0024 = new box(600, 80, 20, 20, "blue");
  block0025 = new box(620, 80, 20, 20, "blue");
  //level6
  block0026 = new box(590, 60, 20, 20, "indigo");
  block0027 = new box(610, 60, 20, 20, "indigo");
  //top
  block0028 = new box(600, 40, 20, 20, "darkviolet");

  ground3 = new Ground(600, 175, 160, 10)
  base = new Ground(400, 390, width, 20)
  Engine.run(engine);
}

function draw() {
  background(bg_img);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
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

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();

  
  block01.display();
  block02.display();
  block03.display();
  block04.display();
  block05.display();
  block06.display();
  block07.display();
  block08.display();
  block09.display();
  block010.display();
  block011.display();
  block012.display();
  block013.display();
  block014.display();
  block015.display();
  block016.display();
  block017.display();
  block018.display();
  block019.display();
  block020.display();
  block021.display();
  block022.display();
  block023.display();
  block024.display();
  block025.display();
  block026.display();
  block027.display();
  block028.display();

  block01.score();
  block02.score();
  block03.score();
  block04.score();
  block05.score();
  block06.score();
  block07.score();
  block08.score();
  block09.score();
  block010.score();
  block011.score();
  block012.score();
  block013.score();
  block014.score();
  block015.score();
  block016.score();
  block017.score();
  block018.score();
  block019.score();
  block020.score();
  block021.score();
  block022.score();
  block023.score();
  block024.score();
  block025.score();
  block026.score();
  block027.score();
  block028.score();

  ground2.display();

  polygon.display();

  ground1.display();

  block001.display();
  block002.display();
  block003.display();
  block004.display();
  block005.display();
  block006.display();
  block007.display();
  block008.display();
  block009.display();
  block0010.display();
  block0011.display();
  block0012.display();
  block0013.display();
  block0014.display();
  block0015.display();
  block0016.display();
  block0017.display();
  block0018.display();
  block0019.display();
  block0020.display();
  block0021.display();
  block0022.display();
  block0023.display();
  block0024.display();
  block0025.display();
  block0026.display();
  block0027.display();
  block0028.display();

  ground3.display();
  base.display();

 
  block001.score();
  block002.score();
  block003.score();
  block004.score();
  block005.score();
  block006.score();
  block007.score();
  block008.score();
  block009.score();
  block0010.score();
  block0011.score();
  block0012.score();
  block0013.score();
  block0014.score();
  block0015.score();
  block0016.score();
  block0017.score();
  block0018.score();
  block0019.score();
  block0020.score();
  block0021.score();
  block0022.score();
  block0023.score();
  block0024.score();
  block0025.score();
  block0026.score();
  block0027.score();
  block0028.score();

  console.log(score);

  drawSprites();

  fill("white")
  textSize(20);
  text("Drag and release the hexagon to hit the blocks hard to disappearand.", 75, 25)
  text("remove all blocks. Click space for another try", 180, 50)
  textSize(30);
  text("Score: "+ score, 50, 100)
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
  Slingshot.fly();
}
