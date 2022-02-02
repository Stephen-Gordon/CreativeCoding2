


function setup() {
    createCanvas(500, 500);
    
}

function draw() {
    drawGrid(12);
}



function drawGrid(numBoxes) {
    let boxSize= width/numBoxes;
    for (let j = 0; j < numBoxes; j++) {

        for (let i = 0; i < numBoxes; i++) {
            strokeWeight(1);
            stroke(51);
            rect(boxSize * i, boxSize * j, boxSize ,boxSize)
        }


    }
    return "drawn";

}