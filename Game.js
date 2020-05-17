class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(123,58,40,30);
    car1.addImage("player1",car1_img);

    car2 = createSprite(129,167,40,30);
    car2.addImage("player2",car2_img);
    
    car3 = createSprite(80,276,40,30);
    car3.addImage("player3",car3_img);
    
    car4 = createSprite(73,393,40,30);
    car4.addImage("player4",car4_img);

    car5 = createSprite(86,504,40,30);
    car5.addImage("player5",car5_img);

    }

  play(){
    form.hide();
    this.reset = createButton("Reset");
    this.reset.position(displayWidth-100,20);

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(backgroundImg);
      
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      var speed=random (0.3,0.9);
      car5.x= car5.x+speed;
      var speed=random (0.2,0.8);
      car2.x = car2.x+speed;
      var speed=random (0.4,0.7);
      car3.x=car3.x+speed;
      var speed=random (0.3,0.7);
      car4.x=car4.x+speed;

  if(keyIsDown(32) ){
       var speed=random(0.5,1.1);
      car1.x = car1.x+speed;   
    }
    
    if (keyIsDown(RIGHT_ARROW)){
      car1.x = car1.x+2;
    }

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;


      }

    }
   
      console.log(mouseX,mouseY);

    drawSprites();
  }

  end(){
    console.log("Game Ended");
    game.update(2);
  }

playerRank(){
  if(gameState===2){
    if(dist1>dist2||dist1>dist3|dist1>dist4|dist1>dist5){
      var rank=1;  
    } else if (dist2>dist3||dist2>dist4||disdt2>dist5) {
        rank=2;
    } else if(dist3>dist4|dist3>dist5){
        rank=3;
    } else if(dist4>dist5){
        rank=4;
    }else{
        rank=5;
    }
  console.log(rank);
  var result=createElement('h1');
  result.position(300,75);
  
  
  switch (rank) {
              
      case 1:
        result.html(playerName1+ "    is the WINNER");
      break;
      case 2:
        result.html(playerName2+ "    is the WINNER");
      break;
      case 3:
        result.html(playerName3+ "    is the WINNER");
      break;
      case 4:
        result.html(playerName4+ "    is the WINNER");
      break;
      case 5:
        result.html(playerName5+ "    is the WINNER");
      break;
    }
  
  }
} 
}
