clap(3,8);

function clap(startNum,endNum){
    let loopCount = endNum-startNum;
    for (let i = 0; i < loopCount; i++) {
        console.log("clap" + (startNum+i))
    }
    
}

let myCars = [
    {name:'Fiat', value:220, cc:1020, color:'red'},
    {name:'VW', value:120,cc:1040,color:'blue'},
    {name:'BMW', value:190,cc:900,color:'green'}
 ];

function setup(){
    
 createCanvas(400,400)
 

}

function draw(){
    push();
    translate(width / 2, -height / 2)
    fill(255,0,0)
    rotate(PI/4)
    rectMode(CENTER)
    rect(width / 2, height / 2,50,10)
    pop();

    /* for(i = 0; i<= myCars.length; i++){
        //console.log(myCars.length)
    } */
    console.log(myCars.length)
}