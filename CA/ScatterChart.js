class ScatterChart {
    constructor(_data) {
        this.data = _data;

        this.title = "Pollution by Country";
        this.titleFontSize = 20;


        this.xAxisTitle = "Quality of life";
        this.yAxisTitle = "Pollution Index Score"
        this.axisTitleFontSize = 16;

        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 5;
        this.margin = 0;
        this.numTicks = 10;
        this.numPlaces = 0;

        this.horLineColour = 215, 219, 222;
        this.lineColour = (33, 37, 41)
        this.fontColor = (33, 37, 41);
        this.tickColor = (33, 37, 41);
        this.strokeThickness = 1;
        this.fontSize = 14;

        //Controls
        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [color('#7172ad'), color('#509ee3'), color('#ef8c8c'), color('#9cc177')];

        this.tickSpacing;
        this.availableWidth;
        this.barWidth;

        this.updateValues();

    }

    updateValues() {

        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;

        let listValuesY = this.data.map(function (x) {
            return x.PollIndex
        })
        this.maxValueY = max(listValuesY);
        this.tickIncrementsY = this.maxValueY / this.numTicks;

        let listValuesX = this.data.map(function (x) {
            return x.QualityofLifeIndex
        })
        this.maxValueX = max(listValuesX);
        this.tickIncrementsX = this.maxValueX / this.numTicks;
    }

    render() {

        push()
        translate(this.posX, this.posY);

        this.drawLegend();
        this.drawTitle();
        this.drawTicks();
        this.drawHorizontalLines();
        this.drawEllipse();
        this.drawAxis();
        pop()
    }

    drawTitle() {
        //Main Title
        fill(this.fontColor);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.title, this.chartWidth / 2, -this.chartHeight - 20)

        //X Axis Title
        fill(this.fontColor);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.xAxisTitle, this.chartWidth / 2, this.chartHeight / 2 - 70)

        //Y Axis Title
        push()
        rotate(PI / -2)
        fill(this.fontColor);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.yAxisTitle, this.chartWidth / 2, -50)
        pop()

    }

    /* scaleXData(num) {
        return map(num, 0, this.maxValueX, 0, this.chartWidth);
    }


    scaleYData(num) {
        return map(num, 0, this.maxValueY, 0, this.chartHeight);
    } */

    scaleXData(num) {
        return map(num, this.maxValueX, 0, this.chartWidth, 0);
    }


    scaleYData(num) {
        return map(num, this.maxValueY, 0, this.chartHeight, 0);
    }



    drawAxis() {
        //chart
        stroke(this.lineColour);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }


    drawLegend() {

        push();
        translate(0, -this.chartHeight);
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].region.length; j++) {
                noStroke();
                fill(this.fontColor);
                textSize(14);
                textAlign(LEFT, CENTER);
                text(this.data[i].region, this.chartWidth + this.margin + 100, this.tickSpacing * i);
                fill(this.data[i].legendColour)
                ellipse(this.chartWidth + this.margin + 90, this.tickSpacing * i, 10, 10)
            }


        }
        pop();


    }


    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //Y AXIS TICKS
            stroke(this.tickColor);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);


            //Y AXIS TICKS
            stroke(this.tickColor);
            strokeWeight(this.strokeThickness)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 20);
            //numbers (text)
            if (this.showValues) {
                fill(this.fontColor);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrementsY).toFixed(this.numPlaces), -15, this.tickSpacing * -i);


                //X AXIS TICKS
                fill(this.fontColor);
                noStroke();
                textSize(this.fontSize);
                textAlign(CENTER, CENTER);
                text((i * this.tickIncrementsX).toFixed(this.numPlaces), this.tickSpacing * i, 30);

            }
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(this.horLineColour);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
        }
    }

    drawEllipse() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {



            noStroke();
            fill(this.data[i].colour)
            let ellipX = this.scaleXData(this.data[i].QualityofLifeIndex);
            let ellipY = this.scaleYData(this.data[i].PollIndex);
            let ellipRadius = this.scaleYData(this.data[i].SafetyIndex);

            

            ellipse(ellipX, -ellipY, ellipRadius/20)





            //let colorNumber = i % 4;

            //bars
            //fill(this.colors[colorNumber]);

            
            //numbers (text)
            //noStroke();
            //fill(this.fontColor)
            //textSize(16);
            //textAlign(CENTER, BOTTOM);
            //text(this.data[i].Pol.toFixed(this.numPlaces), ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].Pol));




        }
        pop()
    }
}