class BarChart {
    constructor(_data) {

        //An array method that maps out a new array
        //Takes values from one array to another




        this.data = _data;
        this.chartWidth = 300;
        this.chartHeight = 300;



        this.posX = 100;
        this.posY = 450;
        this.colors = [color('#ffe066'),
            color('#fab666'),
            color('#f68f6a'),
            color('#f3646a')
        ];
        this.numPlaces = 1;
        //Controls
        this.showValues = true
        this.showLabels = true
        this.rotateLabels = true


        this.maxValue;



        this.spacing = 10;
        this.margin = 20;
        this.numTicks = 10;
        this.tickIncrements;




        this.updateValues();
        this.calculateMaxValue();
    }


    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar width

    }



    calculateMaxValue() {
        let listValues = this.data.map(function (x) {
            return x.total
        });
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;

    }

    render() {
        


        translate(posX, posY);

        this.drawAxis();
        this.drawTicks();
        this.drawRects();
        this.drawHorLines();

    }

     scaleData(num) {

        //scales the chart with num value
        return map(num, 0, this.maxValue, 0, this.chartHeight);

    }


     drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(2);

        //y-Axis
        line(0, 0, 0, -this.chartHeight);
        //y-Axis
        line(0, 0, this.chartWidth, 0);
    }


    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255, 100);
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
            //numbers (text)
            fill(255, 200);
            noStroke();
            textSize(14);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
        }
    }


    drawRects() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {
            //bars

            let colorNumber = i % 4;

            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, scaleData(-this.data[i].total));



            //numbers (text) Values
            if (showValues) {
                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(data[i].total, ((barWidth + spacing) * i) + barWidth / 2, scaleData(-data[i]));
            }



            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    fill(255);
                    textSize(11);
                    textAlign(CENTER, BOTTOM);

                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 30)
                    rotate(PI / 2)
                    text(this.data[i].name, 0, 0);
                    pop()
                } else {
                    noStroke();
                    fill(255);
                    textSize(11);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }


            }

        }
        pop();
    }


    drawHorLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
        }
    }
}