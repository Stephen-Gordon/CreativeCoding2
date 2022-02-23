let data01 = [
    { name: "Oranges", total: 23 },
    { name: "Bananas", total: 34 },
    { name: "Pears", total: 23 },
    { name: "Apples", total: 18 }
];

let data02 = [
    { name: "Oranges", total: 223 },
    { name: "Bananas", total: 134 },
    { name: "Pears", total: 233 },
    { name: "Apples", total: 118 }
];

let data03 = [
    { name: "Oranges", values:[15,25,35,50], total: 125 },
    { name: "Bananas", values:[30,35,40,50], total: 155 },
    { name: "Pears", values:[35,55,70,90], total: 250 },
    { name: "Apples", values:[25,40,50,90], total: 205 }
];

let chart01;
let chart02;
let chart03;


function setup() {
    createCanvas(1200, 1200);

    //Horizontal 
    chart01 = new HorBarChart(data01)
    chart01.chartWidth = 300;
    chart01.chartHeight = 300
    chart01.posX = 100;
    chart01.posY = 400;
    chart01.updateValues();

    //regular
    chart02 = new BarChart(data02)
    chart02.chartWidth = 300;
    chart02.chartHeight = 300
    chart02.posX = 600;
    chart02.posY = 400;
    chart02.updateValues();

    //Stacked
    chart03 = new StackedChart(data03)
    chart03.chartWidth = 300;
    chart03.chartHeight = 300;
    chart03.posX = 100;
    chart03.posY = 800;
    chart03.updateValues();

}


function draw() {
    background(50);
    chart01.updateValues();
    chart01.render();
    chart02.updateValues();
    chart02.render();
    chart03.updateValues();
    chart03.render();
}