class BarChart {
    constructor(_data) {
        this.data = _data;

        this.title;
        this.titleFontSize;

        this.xAxisTitle;
        this.yAxisTitle;
        this.axisTitleFontSize;

        this.chartWidth;
        this.chartHeight;
        this.spacing;
        this.margin;
        this.numTicks;
        this.posX;
        this.posY;
        this.numPlaces;
        this.showValues;
        this.showLabels;
        this.rotateLabels;


        this.maxValue;
        
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        

        this.colors = [color('#ffe066'), color('#fab666'), color('#f68f6a'), color('#f3646a')];
       

        this.tickColor;
        this.strokeThickness;
        this.fontSize;

        this.tickIncrements;
        this.tickColor;
        this.strokeThickness;
        this.fontSize;


        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {

        this.title = "Pollution by Country";
        this.titleFontSize = 20;

        
        this.xAxisTitle = "Countries";
        this.yAxisTitle = "Pollution Index Score"
        this.axisTitleFontSize = 16;

        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 10;
        this.numPlaces = 0;


        this.tickColor = 255;
        this.strokeThickness = 1;
        this.fontSize = 14;

        //Controls
        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;


        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.Pol })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push()
        translate(this.posX, this.posY);

        this.drawTitle();
        this.drawTicks();
        this.drawHorizontalLines();
        this.drawRects();
        this.drawAxis();
        pop()
    }

    drawTitle() {
        //Main Title
        fill(255);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.title, this.chartWidth / 2, -this.chartHeight - 20)
    
        //X Axis Title
        fill(255);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.xAxisTitle, this.chartWidth / 2, this.chartHeight/2 - 50)

        //Y Axis Title
        push()
        rotate(PI/-2)
        fill(255);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.yAxisTitle, this.chartWidth / 2,-50)
        pop()
    
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            }
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(255, 50);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);


        }
    }

    drawRects() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 4;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].Pol));

            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].Pol.toFixed(this.numPlaces), ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].Pol));

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(14);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(PI / 4)
                    text(this.data[i].country, 0, 0);
                    pop()
                } else {

                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].country, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
            }


        }
        pop()
    }
}