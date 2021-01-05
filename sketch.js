//Create variables here
var dog, happyDog, database, foodS, foodStock, feedbutton;
var normalDog;

function alertDBVal()
{
  database = firebase.database();
  foodStock = database.ref('Food').on("value", readStock)
}



function preload(){
  //load images here
  normalDog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")

  milk = loadImage("images/Milk.png")
}

function setup() {
  createCanvas(1000, 500);
  
  database = firebase.database();
  foodStock = database.ref("Food").on("value", readStock)

  feedTime = database.ref("FeedTime").on("value", function(data){
    LastFed = data.val(); 
  })

  dog = createSprite(830, 280, 20, 20)
  dog.addImage(normalDog);
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
  LastFed = hour();

  if(LastFed>=12){ 
    text("Last Fed: " + LastFed%12 + " PM", 350,45)
  }else if(LastFed == 0){ 
    text("Last Fed: 12 AM",350,45)
  }else{
    text("Last Fed: " + LastFed + " AM", 350, 45)
  }

  if (foodStock <= 19){
    dog.addImage(happyDog)
  }else{
    dog.addImage(normalDog)
  }
  foodObj.display();
  addFoodButton.display();
  feedButton.display();
}

function readStock(data){
  foodStock = data.val();
}
function writeStock(z){
  
  database.ref("/").update({
    Food:z
  })
}

