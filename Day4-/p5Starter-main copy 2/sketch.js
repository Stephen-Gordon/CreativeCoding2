let chartWidth = 400;
let chartHeight = 400;


//Bar height 
let data = [50, 30, 90]

let scaledData = [];


let maxValue;



let margin = 60;

let spacing = 10





let numOfTicks = 10;


//Length of tickets
let tickLength = 10;

//space between ticks
let tickSpacing = chartHeight / numOfTicks

let ticketValues = chartHeight / numOfTicks

let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length));

let barWidth = availableWidth / data.length;

console.log(barWidth)


function setup() {
    createCanvas(500, 500);

    maxValue = max(data);

    for (let i = 0; i < data.length; i++) {
        let tempVal = data[i] * 4;
        scaledData.push(tempVal)

    }
}

function draw() {
    background(255)






    // First translation
    translate(50, 450)
    line(0, 0, 0, -chartHeight)
    line(0, 0, chartWidth, 0)



    //Ticks + SIde numbers loop


    for (i = 0; i <= numOfTicks; i++) {
        stroke(0)
        strokeWeight(2)
        //Draws ticks
        line(0, -i * tickSpacing, -tickLength, -i * tickSpacing)

        textSize(12)
        textAlign(RIGHT, CENTER)
        text(i * ticketValues, -15, -i * ticketValues)

    }




    // New translation
    translate(margin, 0)

    //Bar loop
    for (i = 0; i < data.length; i++) {
        fill(255, 0, 0)
        rect((barWidth + spacing) * i, 0, barWidth, -data[i])

        //text("Hello", (barWidth + spacing) * i, 0)

    }




}