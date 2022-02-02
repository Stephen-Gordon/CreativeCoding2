boxsize = 100;

numboxes = 5;



function drawGrid() {

    for (j = 0; j < numboxes; j++) {

        for (i = 0; i < numboxes; i++) {
            strokeWeight(4);
            stroke(51);
            fill(255)
            rect(boxsize + i, boxsize + j, boxsize)
        }


    }


}

function setup() {
    createCanvas(500, 500);
    
}

function draw() {
    drawGrid();
}