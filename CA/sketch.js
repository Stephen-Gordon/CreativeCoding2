/* let data = [

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

]; */



let stackedData = [
    
    {country: "Switzerland", Qol: 195, Pol: 1/19, Saftey: 78, values:[195,19,78], total: 294},

    {country: "Finland", Qol: 184, Pol: 1/25, Saftey: 72, values:[184,25,72], total: 281},

    {country: "New Zealand", Qol: 176, Pol: 1/23, Saftey: 56, values:[176,23,56], total: 255 },

    {country: "Portugal", Qol: 162, Pol: 1/30, Saftey: 69, values:[162,30,69], total: 261}

    ,{country: "South Africa", Qol: 136, Pol: 1/56, Saftey: 23, values:[136,56,23], total: 215},

    {country: "Tunisia", Qol: 116, Pol:1/70, Saftey: 55, values:[116,70,55], total: 241 },

    {country: "Russia", Qol: 103, Pol: 1/61, Saftey: 60, values:[103,61,60], total: 224},

    {country: "Chile", Qol: 100, Pol: 1/78, Saftey: 46, values:[100,78,46], total: 224},

    {country: "Kenya", Qol: 92, Pol: 1/69, Saftey: 43, values:[92,69,43], total: 204},

    {country: "Nigeria", Qol: 52, Pol: 1/88, Saftey: 36, values:[52,88,36], total: 176} 

]

let legend = [
    {name: "Quality Of life", colour:'#7172ad'},
    {name: "Pollution", colour:'#509ee3'},
    {name: "Saftey", colour:'#ef8c8c'}
]





let chart01;
let chart02;
let chart03;
let chart04;

//let newFont;

/* function preload() {
    newFont = loadFont('fonts/Roboto-Regular.ttf');
  } */



function setup() {
    createCanvas(1200, 1200);
    generateData()
    //Horizontal 
     chart01 = new HorBarChart(dataSmall)
     chart01.chartWidth = 300;
     chart01.chartHeight = 300
     chart01.posX = 100;
     chart01.posY = 400;
     chart01.updateValues()
    //regular
     chart02 = new BarChart(dataSmall)
     chart02.chartWidth = 300;
     chart02.chartHeight = 300
     chart02.posX = 600;
     chart02.posY = 400;
     chart02.updateValues()
    //Stacked
     chart03 = new StackedChart(stackedData, legend)
     chart03.chartWidth = 300;
     chart03.chartHeight = 300;
     chart03.posX = 100;
     chart03.posY = 900;
     chart03.updateValues()
     //scatter
     chart04 = new ScatterChart(dataAll)
     chart04.chartWidth = 300;
     chart04.chartHeight = 300
     chart04.posX = 600;
     chart04.posY = 900;
     chart04.updateValues();

    /*     chart04 = new ScatterChart(dataAll)
    chart04.chartWidth = 700;
    chart04.chartHeight = 700
    chart04.posX = 200;
    chart04.posY = 900;
    chart04.updateValues(); */


}


function draw() {
    background(242, 242, 242);
    textFont(newFont)
    scale(1)
    chart01.updateValues();
    chart01.render();
    chart02.updateValues();
    chart02.render();
    chart03.updateValues();
    chart03.render();
    chart04.updateValues();
    chart04.render();
}