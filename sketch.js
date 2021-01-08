//Create variables here
var dog, happyDog, database, foodS, foodStock, feedbutton;
var sadDog;
var bedroom, garden, washroom;
var currenttime;
var LastFed;
var gameState;
function alertDBVal()
{
  database = firebase.database();
  foodStock = database.ref('Food').on("value", readStock)
}



function preload(){
  //load images here
  sadDog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")

  milk = loadImage("images/Milk.png")

  bedroom = loadImage("images/Bed Room.png")
  garden = loadImage("images/Garden.png")
  washroom = loadImage("images/Wash Room.png")
}

function setup() {
  createCanvas(1000, 500);
  
  database = firebase.database();
  foodStock = database.ref("Food").on("value", readStock)

  feedTime = database.ref("FeedTime").on("value", function(data){
    LastFed = data.val(); 
  })

  reedState = database.ref("gameState").on("value", function(data){
    gameState = data.val();
  })

  dog = createSprite(830, 280, 20, 20)
  dog.addImage(sadDog);
  dog.scale = 0.3;

  foodObj = new Food(milk, foodStock);
  addFoodButton = new addButton();
  feedButton = new Feedbutton();

  
}


function draw() {  
  background(46, 139, 87)
  
  drawSprites();
  //add styles here

  fill("white")
  textSize(22)
  currenttime = hour();

  if(LastFed>=12){ 
    text("Last Fed: " + LastFed%12 + " PM", 350,45)
  }else if(LastFed == 0){ 
    text("Last Fed: 12 AM",350,45)
  }else{
    text("Last Fed: " + LastFed + " AM", 350, 45)
  }
  
  if(currenttime==(LastFed+1))
  {
    updateState("Playing")
    foodObj.Garden();
  }
  else if(currenttime == (LastFed+2))
  {
    updateState("Sleeping")
    foodObj.Bedroom();
  } 
  else if(currenttime>(LastFed + 2) && currenttime <= (LastFed + 4))
  {
    updateState("Bathing")
    foodObj.Washroom();
  }
  else
  {
    updateState("Hungry")
    foodObj.display();
    if (currenttime == LastFed){
      dog.addImage(happyDog);
    }else{
      dog.addImage(sadDog)
    }

    if (foodStock <= 0){
      foodStock = 0;
      writeStock(foodStock);
      feedButton.hide();
    }else{
      feedButton.display();
    }
  
    if (foodStock >= 50){
      foodStock = 50;
      writeStock(foodStock);
      addFoodButton.hide();
    }else{
      addFoodButton.display();
    }
  }


}

function readStock(data){
  foodStock = data.val();
}
function writeStock(z){
  
  database.ref("/").update({
    Food:z
  })
}

function updateState(state){
  database.ref("/").update({
    gameState:state
  })
}
