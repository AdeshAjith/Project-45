var Fighter,FighterImage
var backGround,MeteorImage

function preload(){
  FighterImage = loadImage("images/SpaceFighter.png")
  backGround = loadImage("images/Space.jpg")
  MeteorImage = loadImage("images/Meteor.png")
}

function setup() {

  createCanvas(1200,650);

  Fighter = createSprite(600,550)
  Fighter.addImage(FighterImage)
  Fighter.scale = 0.12


}

function draw() {
  background(backGround); 
  Fighter.velocityX = 0
  Fighter.velocityY = 0

  Meteors()

  
    
    
 
  if(keyDown(RIGHT_ARROW)){
    Fighter.velocityX = 7
  }

  if(keyDown(LEFT_ARROW)){
    Fighter.velocityX = -7
  }
  
  if(keyWentDown("space")){
    Laser = createSprite(Fighter.x,540,5,17)
    Laser.velocityY = -3
    Laser.lifetime = 300
    Laser.shapeColor = "red"
  }

  Fighter.display() 
  
  drawSprites();
}

function Meteors(){
  if(frameCount%100 === 0){
    var rand = Math.round(random(300,900))
    var Meteor = createSprite(rand,-50)
    Meteor.addImage(MeteorImage)
    Meteor.velocityY = 3
    Meteor.scale = 0.07
    Meteor.lifetime = 350

  }
}
