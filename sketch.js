//Create variables here
var dog,dogImg;
var  happyDog,happyDogImg;
var foodS
var foodStock;
var database;
function preload()
{
  happyDogImg=loadImage("happydog.png");
  dogImg=loadImage("Dog.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  dog.addImage("Dog.png");

  database=fireBase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  
 background(46,139,87);
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDogImg);

 }


  drawSprites();
  fill ("black");
  textSize(20);
  text("press up arrow to feed the dog ",10,10);

dog.display();
  


}

//function to read 

function readStock(data){
  foodS=data.val();
}


//function to write 

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

