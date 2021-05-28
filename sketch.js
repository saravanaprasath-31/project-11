  function preload(){
    //pre-load images
    pathImg = loadImage("path.png");
    running_boy.addAnimation("Runner-1.png ","Runner-2.png");
  }

  function setup(){
    createCanvas(400,400);
    //create sprites here
  pathImg = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 5;
  path.scale = 1.5;

  running_boy = createSprite(20,350);
  running_boy.addAnimation("Runner-1.png ","Runner-2.png");

  boundary1 = createSprite(10,340,200,0.5);
  boundary1.shapeColour = "green";

  boundary2 = createSprite(30,360,200,0.5);
  boundary2.shapeColour = "orange";
  
  if(running_boy.collide("boundary1")){
    boundary1.visible ("false");
  }

  if(running_boy.collide("boundary1")){
    boundary2.visible ("false");
  }

  function draw() {
    background(0);
    if(keyWentUp("left"))
    running_boy.x = -5;
    }

    if(keyWentUp("right")){
    running_boy.x = +5;
  }
  if(path.y>400){
    path.y = height/2;
  }
  }
