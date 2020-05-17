class Hurdles{

    constructor(){
        
    }

    erect(){
        for (let i=0; i<15;i++)  {
           for (let j=0;j<4;j++){ 
            obstacle=createSprite(300+250*j,(40+35*i),10,25);
    } 
        } 
    }
}