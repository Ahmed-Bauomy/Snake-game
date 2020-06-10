window.addEventListener("load",function(){
    var drawingCanvas=this.document.querySelector("canvas");
    var context=drawingCanvas.getContext("2d");
    
   
     var pX=0,pY=0;
     var xV=1,yV=0;
     var aX=15,aY=15;
     var gs=20;
     var snakeArr=[];
     var tail=5;
     var flage=true;
     //game update
    this.setInterval(function(){
        //reset the board
        context.fillStyle="black";
        context.fillRect(0,0,drawingCanvas.width,drawingCanvas.height);
          //update
          pX+=xV;
          pY+=yV;
          if(pX<0){
             pX=gs-1;
          }
          if(pX>gs-1){
             pX=0;
          }
          if(pY<0){
            pY=gs-1;
         }
         if(pY>gs-1){
            pY=0;
         }
         //render
         context.fillStyle="cyan";
         for(let i=0;i<snakeArr.length;i++){
            context.fillRect(snakeArr[i].x*gs,snakeArr[i].y*gs,gs-2,gs-2);
            if(snakeArr[i].x==pX && snakeArr[i].y==pY){
               tail=5;
            }
         }
        snakeArr.push({x:pX,y:pY});
        while(snakeArr.length>tail){
           snakeArr.shift();
        }
        
        if(pX==aX && pY==aY){
           tail++;
           while(true){
            aX=Math.round(Math.random()*(gs-1));
            aY=Math.round(Math.random()*(gs-1));
            flage=true;
            console.log(aX,aY);
            for(let i=0;i<snakeArr.length;i++){
               if(snakeArr[i].x==aX && snakeArr[i].y==aY){
                  flage=false;
                  break;
               }
            }
            if(flage){
               break;
            }
           }
        
           
        }


         //apple box
          context.fillStyle="red";
          context.fillRect(aX*gs,aY*gs,gs-2,gs-2);
    },1000/15);
    //key handling
    this.document.addEventListener("keydown",function keyPush(){
   
        switch(event.code){
            case "ArrowUp":
               if(xV!=0){
                  yV=-1;
                  xV=0;
               }
               break;
            case "ArrowDown":
               if(xV!=0){
                  yV=1;
                  xV=0;
               }
               break;
            case "ArrowLeft":
               if(yV!=0){
                  yV=0;
                  xV=-1;
               } 
               break;
            case "ArrowRight":
               if(yV!=0){
                  yV=0;
                  xV=1;
               }
               break;
        }

});


});//end of load













