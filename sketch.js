var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var car1, car2, car3 ,car4,car5;

function preload (){
  backgroundImg = loadImage("Assets/track.jpg");   
  car1_img = loadImage("./Assets/athlete1.png");
  car2_img = loadImage("./Assets/athlete2.png");
  car3_img = loadImage("./Assets/athlete3.png");
  car4_img = loadImage("./Assets/athlete4.png");
  car5_img = loadImage("./Assets/athlete5.png");                                                                           
  backgroundImg.scale = 0.1;
}

function setup(){
  canvas = createCanvas(displayWidth - 20,displayHeight - 140);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  obstacle=new Hurdles();
  obstacle.erect();
}

 

function draw(){
  if(playerCount === 5){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
