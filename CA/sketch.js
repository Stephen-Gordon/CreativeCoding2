let data = [

    {country: "Switzerland", Qol: 195.27, Pol: 19.59},

    {country: "Finland", Qol: 184.96, Pol: 25.07},

    {country: "New Zealand", Qol: 176.81, Pol: 23.62 },

    {country: "Portugal", Qol: 162.52, Pol: 30.48},

    {country: "South Africa", Qol: 136.02, Pol: 56.57},

    {country: "Tunisia", Qol: 114.56, Pol:70.84 },

    {country: "Russia", Qol: 103.28, Pol: 61.80},

    {country: "Chile", Qol: 100.15, Pol: 78.54},

    {country: "Kenya", Qol: 92.54, Pol: 69.34},

    {country: "Nigeria", Qol: 52.44, Pol: 88.32}

];



let stackedData = [
    
    {country: "Switzerland", Qol: 195.27, Pol: 19.59, values:[100,200,300], total: 125},

    {country: "Finland", Qol: 184.96, Pol: 25.07, values:[100,200,300], total: 125},

    {country: "New Zealand", Qol: 176.81, Pol: 23.62, values:[100,200,300], total: 125 },

    {country: "Portugal", Qol: 162.52, Pol: 30.48, values:[100,200,300], total: 125},

    {country: "South Africa", Qol: 136.02, Pol: 56.57, values:[100,200,300], total: 125},

    {country: "Tunisia", Qol: 114.56, Pol:70.84, values:[100,200,300], total: 125 },

    {country: "Russia", Qol: 103.28, Pol: 61.80, values:[100,200,300], total: 125},

    {country: "Chile", Qol: 100.15, Pol: 78.54, values:[100,200,300], total: 125},

    {country: "Kenya", Qol: 92.54, Pol: 69.34, values:[100,200,300], total: 125},

    {country: "Nigeria", Qol: 52.44, Pol: 88.32, values:[100,200,300], total: 125}


]







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
    chart01 = new HorBarChart(data)
    chart01.chartWidth = 300;
    chart01.chartHeight = 300
    chart01.posX = 100;
    chart01.posY = 400;
    chart01.updateValues();

    //regular
    chart02 = new BarChart(data)
    chart02.chartWidth = 300;
    chart02.chartHeight = 300
    chart02.posX = 600;
    chart02.posY = 400;
    chart02.updateValues();

    //Stacked
    chart03 = new StackedChart(stackedData)
    chart03.chartWidth = 300;
    chart03.chartHeight = 300;
    chart03.posX = 100;
    chart03.posY = 900;
    chart03.updateValues();

}


function draw() {
    background(242, 242, 242);
    chart01.updateValues();
    chart01.render();
    chart02.updateValues();
    chart02.render();
    chart03.updateValues();
    chart03.render();
}