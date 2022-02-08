let data = [50,70,100]


let margin = 20;

let spacing = 10

let barWidth = 30


function setup() {
    createCanvas(500, 500);
    
}

function draw() {
    background(255)

    // First translation
    translate(50, 450)
    line(0,0,0,-400)
    line(0,0,400,0)

    // New translation
    translate(margin,0)
    rect(0,0, barWidth, -data[0])
}



