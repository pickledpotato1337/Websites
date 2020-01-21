//global variable declarations

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
var redDefault=1;
var greenDefault=1;
var blueDefault=1;
//end here


function invertColors(data) {
        for (var i = 0; i < data.length; i += 4) {
            data[i] = data[i] ^ 255; // Invert Red
            data[i + 1] = data[i + 1] ^ 255; // Invert Green
            data[i + 2] = data[i + 2] ^ 255; // Invert Blue
        }
    }

    function negative() {
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        invertColors(imageData.data);
        ctx.putImageData(imageData, 0, 0);
    }


    function brightnessUp() {
        brightnessDefault += 0.15;
        adjustBrightness(brightnessDefault);

    }

    function brightnessDown() {
        brightnessDefault -= 0.15;
        adjustBrightness(brightnessDefault);

    }

    function redUp() {
        redDefault += 0.15;
        adjustBrightness(redDefault);

    }

    function redDown() {
        redDefault -= 0.15;
        adjustBrightness(redDefault);

    }

    function greenUp() {
        greenDefault += 0.15;
        adjustBrightness(greenDefault);

    }

    function greenDown() {
        greenDefault -= 0.15;
        adjustBrightness(greenDefault);

    }

    function blueUp() {
        blueDefault += 0.15;
        adjustBrightness(blueDefault);

    }

    function blueDown() {
        blueDefault += 0.15;
        adjustBrightness(blueDefault);

    }
    function hueUp(){
    let adj=20;
    adjusthue(adj);
    }
    function hueDown() {
    let adj=-20;
    adjusthue(adj);

    }

    function adjustBrightness(multiplier) {
        var iD = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var dA = iD.data; // raw pixel data in array



        for (var i = 0; i < dA.length; i += 4) {
            var red = dA[i]; // Extract original red color [0 to 255]
            var green = dA[i + 1]; // Extract green
            var blue = dA[i + 2]; // Extract blue

            var brightenedRed = multiplier * red;
            var brightenedGreen = multiplier * green;
            var brightenedBlue = multiplier * blue;


            Math.max(0, Math.min(255, brightenedRed));
            Math.max(0, Math.min(255, brightenedGreen));
            Math.max(0, Math.min(255, brightenedBlue));

            dA[i] = brightenedRed;
            dA[i + 1] = brightenedGreen;
            dA[i + 2] = brightenedBlue;
        }

        ctx.putImageData(iD, 0, 0);
    }


    function adjustRed(multiplier) {

            var iD = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var dA = iD.data; // raw pixel data in array



            for (var i = 0; i < dA.length; i += 4) {
                var red = dA[i]; // Extract original red color [0 to 255]
                var green = dA[i + 1]; // Extract green
                var blue = dA[i + 2]; // Extract blue

                var brightenedRed = multiplier * red;
                var brightenedGreen = green;
                var brightenedBlue =  blue;


                Math.max(0, Math.min(255, brightenedRed));
                Math.max(0, Math.min(255, brightenedGreen));
                Math.max(0, Math.min(255, brightenedBlue));

                dA[i] = brightenedRed;
                dA[i + 1] = brightenedGreen;
                dA[i + 2] = brightenedBlue;
            }

            ctx.putImageData(iD, 0, 0);
        }

function adjustGreen(multiplier) {

    var iD = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var dA = iD.data; // raw pixel data in array



    for (var i = 0; i < dA.length; i += 4) {
        var red = dA[i]; // Extract original red color [0 to 255]
        var green = dA[i + 1]; // Extract green
        var blue = dA[i + 2]; // Extract blue

        var brightenedRed =  red;
        var brightenedGreen = multiplier *green;
        var brightenedBlue = blue;


        Math.max(0, Math.min(255, brightenedRed));
        Math.max(0, Math.min(255, brightenedGreen));
        Math.max(0, Math.min(255, brightenedBlue));

        dA[i] = brightenedRed;
        dA[i + 1] = brightenedGreen;
        dA[i + 2] = brightenedBlue;
    }

        ctx.putImageData(iD, 0, 0);
    }

    function adjustBlue(multiplier) {

        var iD = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var dA = iD.data; // raw pixel data in array



        for (var i = 0; i < dA.length; i += 4) {
            var red = dA[i]; // Extract original red color [0 to 255]
            var green = dA[i + 1]; // Extract green
            var blue = dA[i + 2]; // Extract blue

            var brightenedRed =  red;
            var brightenedGreen = green;
            var brightenedBlue =  multiplier *blue;


            Math.max(0, Math.min(255, brightenedRed));
            Math.max(0, Math.min(255, brightenedGreen));
            Math.max(0, Math.min(255, brightenedBlue));

            dA[i] = brightenedRed;
            dA[i + 1] = brightenedGreen;
            dA[i + 2] = brightenedBlue;
        }

        ctx.putImageData(iD, 0, 0);
    }

    function adjusthue(variable){
    var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = data.data;
        List<double> hsl;
        List<int> newPixel;

        for(var i = 0, len = pixels.length; i < len; i += 4) {
            let hsl = rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);
            hsl[0]+=variable;
            newPixel = hslToRgb(hsl[0], hsl[1], hsl[2]);
            // or newPixel = hslToRgb((hsl[0] + hue) % 1.0, hsl[1], hsl[2]);

            pixels[i + 0] = newPixel[0];
            pixels[i + 1] = newPixel[1];
            pixels[i + 2] = newPixel[2];
        }
        _context.putImageData(data, 0, 0);}

    $('#canvas').onmousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    });

    $('#canvas').onmousemove(function(e){
        if(paint){
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
        }
    });

    $('#canvas').onmouseup(function(e){
        paint = false;
    });

    $('#canvas').onmouseleave(function(e){
        paint = false;
    });

    function addClick(x, y, dragging)
    {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }


    function redraw(){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas

        ctx.strokeStyle = "#df6600";
        ctx.lineJoin = "round";
        ctx.lineWidth = 5;

        for(var i=0; i < clickX.length; i++) {
            ctx.beginPath();
            if(clickDrag[i] && i){
                ctx.moveTo(clickX[i-1], clickY[i-1]);
            }else{
                ctx.moveTo(clickX[i]-1, clickY[i]);
            }
            ctx.lineTo(clickX[i], clickY[i]);
            context.closePath();
            ctx.stroke();
        }
    }

    function rgbToHsl(r, g, b){
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min){
            h = s = 0; // achromatic
        }else{
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h, s, l];
}
    function hslToRgb(h, s, l){
        var r, g, b;

        if(s == 0){
            r = g = b = l; // achromatic
        }else{
            var hue2rgb = function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }