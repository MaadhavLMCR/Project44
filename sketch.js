var safe, safeImg, player, playerImg, enemyImg;
var count=0;
var enemyGrp;

function preload(){
  safeImg = loadImage("Images/Safe.png");
  playerImg = loadImage("Images/playerstanding.png");
  enemyImg = loadImage("Images/enemy1.png");
}

function setup() {
  createCanvas(displayWidth-200,displayHeight-200);
  safe = createSprite(displayWidth/2-100, displayHeight/2-100, 30, 60);
  safe.addImage("safe", safeImg);
  safe.scale = 0.1;
  player = createSprite(displayWidth/3,displayHeight/4,50,50);
  player.addImage("player", playerImg);
  enemyGrp = new Group();
}

function draw() {
  background("red"); 
  player.x = mouseX;
  player.y = mouseY;
  // if(keyDown("UP_ARROW")){
  //   player.y = player.y-4;
  // }
  // if(keyDown("DOWN_ARROW")){
  //   player.y = player.y+4;
  // }
  // if(keyDown("LEFT_ARROW")){
  //   player.x = player.x-4;
  // }
  // if(keyDown("RIGHT_ARROW")){
  //   player.x = player.x+4;
  // }
  //text(mouseX+ " "+mouseY,mouseX,mouseY);
  rect(350,75,360,350);
  enemy();
  for(var i=0;i<enemyGrp.length;i++)
  {
  // if (mousePressedOver(enemyGrp))
  // {

  //    console.log("Length is " +enemyGrp.length);
  //    console.log("index is "+i);
      if(mousePressedOver(enemyGrp[i]))
      {
        enemyGrp[i].destroy();
      }
    }
  
  drawSprites();
}
function enemy(){
  
  if (frameCount%120===0 ){
    var enemy = createSprite(displayWidth/4,displayHeight/4, 50, 50);
    enemy.setCollider("rectangle",0,0,100,100);
 //   enemy.debug=true;
    enemy.addImage("enemy", enemyImg);
    count++;
    var rand=Math.round(random(1,2));
    if(rand===1)
    {
      enemy.x = Math.round(random(150,330));
    }
    else
    {
      enemy.x = Math.round(random(720,900));
    }
      enemy.y=Math.round(random(100,425));
    enemy.scale = 0.3;
    enemyGrp.add(enemy);
  }
}