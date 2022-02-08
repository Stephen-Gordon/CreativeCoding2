


//Bar height 
let data = [50,70,100,200,40,50]

let margin = 20;

let spacing = 10

let barWidth = 30

let numTicks = 40;

let tickDistance = 40;

//let numOfTicks = ;


function setup() {
    createCanvas(500, 500);
    
}

function draw() {
    background(255)

    fill(255,0,0)
    textSize(50)
    textAlign(RIGHT, CENTER)
    text("0",200,200)

    // First translation
    translate(50, 450)
    line(0,0,0,-400)
    line(0,0,400,0)

    // New translation
    translate(margin,0)
    stroke(0)
    strokeWeight(2)
    line(0,0,-10,0)
    line(0,-40,-10,-40)
    line(0,-80,-10,-80)



   // for(i = 0; i < ;)


    for(i = 0; i <= numTicks; i++){
        stroke(0)
        strokeWeight(2)
        line(0,-numTicks*-i,-10,-numTicks*-i)
    

    }


     for(i = 0; i < data.length; i++){
        rect((barWidth +spacing) * i, 0, barWidth, -data[i])
    } 
    
}



