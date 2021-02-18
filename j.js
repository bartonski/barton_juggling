/* TODO Document in comments. */

// Need to figure out how to scale, based on the maximum throw height + distance from elbow to floor.


// Window should be based on browser window?
// define window
function win( width, height ) {
    this.width = width;
    this.height = height;
    this.usableHeight = 9*height/10;
    this.usableWidth = 9*width/10;
    this.xborder = this.width/20;
    this.yborder = this.height/20;
}

// leave room for slider below window.
// Don't have slider, but might want controls.
var w = new win( window.innerWidth, window.innerHeight - 100 );

function point( x, y ) {
    this.x = x;
    this.y = y;
    this.xreal = this.x + w.xborder;
    this.yreal = w.height - ( this.y + w.yborder );
    this.plus = pointAdd;
    this.plusX = xAdd;
    this.plusY = yAdd;

    function pointAdd( pt ) {
        return new point( this.x + pt.x, this.y + pt.y );
    }

    function xAdd ( x ) {
        return new point( this.x + x, this.y );
    }

    function yAdd ( y ) {
        return new point( this.x, this.y + y );
    }
}

// Frames should be calculated, not hard coded
var frames = 600;
var canvas;  
var ctx;
var counter = 0;

// FPS should be variable
var fps = 30;

function circle(center,r) {
    ctx.beginPath();
    ctx.arc(center.xreal, center.yreal, r, 0, Math.PI*2, true);
    ctx.stroke();
}

function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}

function text( pt, label, textSize, color) {
    ctx.font = textSize + "px Arial";
    ctx.fillStyle = color;
    ctx.fillText(label, pt.xreal, pt.yreal); 
}

function clear() {
    ctx.clearRect(0, 0, w.width, w.height );
}

function _line( x1, y1, x2, y2, color, width ) {
    var color = color;
    var oldcolor = ctx.strokeStyle;
    var oldwidth = ctx.lineWidth;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo( x1, y1 );
    ctx.lineTo( x2, y2 );
    ctx.stroke();
    ctx.strokeStyle = oldcolor;
    ctx.lineWidth = oldwidth;
}

function line( pt1, pt2, color, width ) {
    _line( pt1.xreal, pt1.yreal, pt2.xreal, pt2.yreal, color, width );
}

function init( framecount ) {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = w.width;
    ctx.canvas.height = w.height;
    frames=framecount;
    return setInterval(draw, 10);
}

function draw() {
    clear();
    ctx.fillStyle = "#FAF7F8";
    rect(0,0,w.width,w.height);
    ctx.fillStyle = "#444444";

    // All of the drawing within the animation goes here.
}

init( 500 );

// See: https://design.tutsplus.com/articles/human-anatomy-fundamentals-basic-body-proportions--vector-18254
