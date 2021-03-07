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

var total_ticks = 0;
var total_beats = 0;
var total_frames = 0;
var tick_interval;
var beat_interval;
var frames_per_beat;
var tick_in_current_beat = 0; 

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

function bpm_interval(bpm) {
    var ticks=60.0*1000.0;
    return ticks / bpm;
}

function fps_interval(fps) {
    var ticks = 1000;
    return ticks / fps;
}

function init( fps, bpm ) {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = w.width;
    ctx.canvas.height = w.height;
    tick_interval = fps_interval(fps);
    beat_interval = bpm_interval(bpm);
    frames_per_beat = fps * 60 / bpm;
    return setInterval( draw, tick_interval );
}

function draw() {
    clear();
    ctx.fillStyle = "#FAF7F8";
    rect(0,0,w.width,w.height);
    ctx.fillStyle = "#444444";

    // All of the drawing within the animation goes here.

    // Draw Grid Lines every 100 px.

    // Horizontal

    var CurrentHeight;
    for (CurrentHeight = 0; CurrentHeight < w.height; CurrentHeight+=100) {
        p1 = new point( 0, CurrentHeight );
        p2 = new point( w.width, CurrentHeight );
        label_point = new point( -50, CurrentHeight + 10 );
        text( label_point, CurrentHeight, 20, "black" )
        line( p1, p2, "#000000", 1 );
    }

    // Vertical
    var CurrentWidth;
    for (CurrentWidth = 0; CurrentWidth < w.width; CurrentWidth+=100) {
        p1 = new point( CurrentWidth, 0 );
        p2 = new point( CurrentWidth, w.height );
        label_point = new point( CurrentWidth + 10, -20 );
        text( label_point, CurrentWidth, 20, "black" )
        line( p1, p2, "#000000", 1 );
    }

    var sign = ( total_beats % 2 === 0 ) ? 1 : -1;
    var elevation = ( total_beats % 2 === 0 ) ? 0 : w.height;
    var travel = w.height;
    var travel_per_frame = travel / frames_per_beat;
    total_ticks +=  tick_interval;
    total_frames++;
    tick_in_current_beat += tick_interval;
    frame_in_current_beat = tick_in_current_beat / tick_interval;
    metronome_point = new point( 0, elevation + (sign * travel_per_frame * frame_in_current_beat ))
    line( new point( 0, 0), metronome_point, "#FF0000", 3 )
    if ( tick_in_current_beat >= beat_interval ) {
        total_beats++;
        tick_in_current_beat %= beat_interval;
    }
}

init( 60, 120 );

// See: https://design.tutsplus.com/articles/human-anatomy-fundamentals-basic-body-proportions--vector-18254
