let chartWidth = 300;
let chartHeight = 300;
//let data = [30, 100, 90, 20, 180, 94];
//let scaledData = [];
let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes", "Apples", "Grapes"];

let posX = 100;
let posY = 450;
let colors;
let numPlaces = 1;
//Controls
let showValues = true
let showLabels = true
let rotateLabels = true


let maxValue;

let data = [{name:"Oranges", total:63},
               {name:"Bananas", total:33},
               {name:"Pears", total:21},
               {name:"Apples", total:43}
]


//An array method that maps out a new array
//Takes values from one array to another
let listValues = data.map(function (x){return x.total});
//console.log(listValues)






let spacing = 10;
let margin = 20;
let numTicks = 10;
let tickIncrements;

let tickSpacing = chartHeight / numTicks; //space between ticks on  the left 
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1)); //available space for bars
let barWidth = availableWidth / data.length; //bar width

function setup() {
    createCanvas(500,500);
    background(0);


    colors = [color('#ffe066'), 
              color('#fab666'), 
              color('#f68f6a'), 
              color('#f3646a')]


    //Gets maxvalue 
    maxValue = max(listValues);
    tickIncrements = maxValue / numTicks;



    /* //Takes a value from an input and output
    //Scales the chart
    for(let i=0; i<data.length; i++){
        let tempVal = map(data[i].total, 0, maxValue, 0, chartHeight);
        scaledData.push(tempVal);
    } */
}


function scaleDate(){

    return map(data[i].total, 0, maxValue, 0, chartHeight);

}


function draw() {
    background(0);
    

    translate(posX, posY);
    //chart
    stroke(255, 180);
    strokeWeight(2);

    //y-Axis
    line(0, 0, 0, -chartHeight); 
    //y-Axis
    line(0, 0, chartWidth, 0); 


    for(let i=0; i<=numTicks; i++){
        //ticks
        stroke(255,100);
        line(0, tickSpacing * -i, -10, tickSpacing * -i);
        line(0, tickSpacing * -i, chartWidth, tickSpacing * -i);
        //numbers (text)
        fill(255,200);
        noStroke();
        textSize(14);
        textAlign(RIGHT, CENTER);
        text((i * tickIncrements).toFixed(numPlaces), -15, tickSpacing * -i);
    }



    
    translate(margin, 0);

    for(let i=0; i<scaledData.length; i++){
        //bars

        let colorNumber = i % 4;

        fill(colors[colorNumber]);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

        
        
        //numbers (text) Values
        if(showValues){
        noStroke();
        fill(255);
        textSize(16);
        textAlign(CENTER, BOTTOM);
        text(data[i].total, ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i]);
        }

        

        //text
        if(showLabels){
            if(rotateLabels){
                push()
                noStroke();
                fill(255);
                textSize(11);
                textAlign(CENTER, BOTTOM);

                translate( ((barWidth + spacing) * i) + barWidth / 2, 30)
                rotate(PI/2)
                text(data[i].name,0,0);
                pop()
            }else{
                noStroke();
                fill(255);
                textSize(11);
                textAlign(CENTER, BOTTOM);
                text(data[i].name, ((barWidth + spacing) * i) + barWidth / 2, 20);
            }

           
        }
       
    }
}