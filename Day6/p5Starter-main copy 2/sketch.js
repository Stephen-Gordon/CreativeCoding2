
let data = [{
        name: "Oranges",
        total: 63
    },
    {
        name: "Bananas",
        total: 33
    },
    {
        name: "Pears",
        total: 21
    },
    {
        name: "Apples",
        total: 43
    }
]
let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes", "Apples", "Grapes"];

let chart01;

function setup() {
    createCanvas(500, 500);
    chart01= new BarChart(data)
    chart01.chartWidth = 200;
    chart01.chartHeight = 200;
    chart01.updateValues();

}




function draw() {
    
    background(255);
}


//Scales the chart
//accepts a paramater (num) and scales it using the max and chartheight
