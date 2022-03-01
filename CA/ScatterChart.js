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

        let listValues = this.data.map(function(x) { return x.Pol })
        this.maxValueY = max(listValues);
        this.tickIncrements = this.maxValueY / this.numTicks;

        let listValues2 = this.data.map(function(x) { return x.Qol })
        this.maxValueX = max(listValues2);
        this.YtickIncrements = this.maxValueX / this.numTicks;
    } 

    render() {

        push()
        translate(this.posX, this.posY);

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
        text(this.xAxisTitle, this.chartWidth / 2, this.chartHeight/2 - 70)

        //Y Axis Title
        push()
        rotate(PI/-2)
        fill(this.fontColor);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.yAxisTitle, this.chartWidth / 2,-50)
        pop()
    
    }

    /* scaleXData(num) {
        return map(num, 0, this.maxValueX, 0, this.chartWidth);
    }


    scaleYData(num) {
        return map(num, 0, this.maxValueY, 0, this.chartHeight);
    } */

    scaleXData(num) {
        return map(num, this.maxValueX, 0, 0, this.chartWidth);
    }


    scaleYData(num) {
        return map(num, this.maxValueY,0, this.chartHeight, 0);
    }

    

    drawAxis() {
        //chart
        stroke(this.lineColour);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
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
                text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            

                //X AXIS TICKS
                fill(this.fontColor);
                noStroke();
                textSize(this.fontSize);
                textAlign(CENTER, CENTER);
                text((i * this.YtickIncrements).toFixed(this.numPlaces), this.tickSpacing * i, 30);
            
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
            let colorNumber = i % 4;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            fill(0);
            let ellipX = this.scaleXData(this.data[i].Qol);
            let ellipY = this.scaleYData(this.data[i].Pol);

         
            ellipse(ellipX,-ellipY, 10)


            //numbers (text)
            noStroke();
            fill(this.fontColor)
            textSize(16);
            textAlign(CENTER, BOTTOM);
            //text(this.data[i].Pol.toFixed(this.numPlaces), ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].Pol));

        


        }
        pop()
    }
}