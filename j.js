/* TODO Document in comments. */

// Need to figure out how to scale, based on the maximum throw height + distance from elbow to floor.


// Window should be based on browser window?
// define window
function win( width, height ) {
    this.width = width;
    this.height = height;
    // this.usableHeight = 9*height/10;
    // this.usableWidth = 9*width/10;
    this.usableHeight = height;
    this.usableWidth = width;
    // this.xborder = this.width/20;
    // this.yborder = this.height/20;
    this.xborder = 0;
    this.yborder = 0;
}

var controls = document.getElementById("controls");
var w = new win( window.innerWidth, window.innerHeight );

var video = document.getElementById("vd1");
video.load();
video.volume=0;
video.play();
var video_height = video.offsetHeight;
var video_width = video.offsetWidth;
console.log ("element vd1: ", video);
console.log ("video_height: ", video_height);
console.log ("video_width: ", video_width);

var global = {
    acceleration: 0,
    maxheight: 0,
    total_ticks: 0,
    total_beats: 0,
    total_frames: 0,
    tick_interval: 0,
    beat_interval: 0,
    frames_per_beat: 0,
    tick_in_current_beat: 0, 
    center_line: video.offsetWidth/2,
    pattern_top: video.offsetHeight,
    metronome_x: 0,
    tray_plane: 50,
    throw_line: video.offsetWidth/10, 
    catch_line: video.offsetWidth/3, 
    bpm: 160,
    fps: 30
};

resize_canvas(video)

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

var container;
var canvas;  
var ctx;

// FPS should be variable

function circle(center,r) {
    ctx.beginPath();
    ctx.arc(center.xreal, center.yreal, r, 0, Math.PI*2, true);
    ctx.stroke();
}
 
function parabola( point, t ) {
    // need to figure out acceleration based on max height and max air time.
    // acceleration should be expressed in ticks (thousanths of a second)
}

function ball( start_point, start_beat, color, radius ) {
    var current_position = start;
    var ticks_since_last_catch = 0;
    var ticks_since_last_throw = 0;

    // dwell is in beats, varying between 0 and 2, exclusive.
    function toss( dwell, total_beats, toss_point, catch_point ) {
    }
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

function init( fps, bpm, pattern_top, center_line ) {
    w.width=video.offsetWidth
    w.height=video.offsetHeight
    console.log("In init");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = w.width;
    ctx.canvas.height = w.height;
    container = document.getElementById("container");
    container.height = w.height;
    container.width = w.width;
    console.log( "container height: ", container.height);
    global.fps = fps;
    global.bpm = bpm;
    console.log("bpm ", bpm);
    global.tick_in_current_beat = 0;
    console.log("    fps ", fps);
    console.log("    global.fps ", global.fps);
    global.tick_interval = fps_interval(fps);
    global.beat_interval = bpm_interval(bpm);
    global.frames_per_beat = fps * 60 / bpm;
    global.pattern_top = pattern_top;
    global.center_line = center_line;
    console.log("    global: ", global);
    clearInterval( global.interval_id);
    return setInterval( draw, global.tick_interval );
}

function draw() {
    clear();
    //ctx.strokeStyle = "#FAF7F8";
    //ctx.fillStyle = "#FAF7F8";
    //ctx.fillStyle = "#FFFFFFFF";
    ctx.fillStyle = "rgba(0,0,0,0)";
    rect(0,0,w.width,w.height);
    ctx.fillStyle = "rgba(0,0,0,0)";
    //ctx.fillStyle = "#444444";
    //ctx.strokeStyle = "#444444";

    // All of the drawing within the animation goes here.

    // Draw Grid Lines every 100 px.

    // Horizontal

    var CurrentHeight;
    /*
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
    */

    function get_normalized_metronome_height ( beat, tick) {
        var frame_in_current_beat = tick / global.tick_interval;
        var frame_remaining_in_current_beat
            = global.frames_per_beat - frame_in_current_beat;
        var metronome_height
            = ( beat % 2 === 0 )
            ? frame_in_current_beat
            : frame_remaining_in_current_beat;
        return metronome_height / global.frames_per_beat;
    };

    var metronome_y_normalized =
    get_normalized_metronome_height ( beat=global.total_beats, tick=global.tick_in_current_beat);

    global.total_ticks +=  global.tick_interval;
    global.total_frames++;
    global.tick_in_current_beat += global.tick_interval;
    pattern_top_left = new point( 0, global.pattern_top );
    line( pattern_top_left, new point(w.width, global.pattern_top),  "#0000FF", 2 );
    var metronome_height = global.pattern_top - global.tray_plane;
    metronome_point = new point(
        global.metronome_x,
        metronome_y_normalized * metronome_height + global.tray_plane);
    line(
        new point( global.metronome_x, global.tray_plane),
        metronome_point, "#FF0000", 4 )
    if ( global.tick_in_current_beat >= global.beat_interval ) {
        global.total_beats++;
        global.tick_in_current_beat %= global.beat_interval;
    }
    line( new point(global.center_line, 0), new point(global.center_line, w.height), "#00FF00", 2 );
    line( 
        new point(global.center_line-global.catch_line, 0),
        new point(global.center_line-global.catch_line, w.height),
        "#00FFFF", 2
    );
    line( 
        new point(global.center_line+global.catch_line, 0),
        new point(global.center_line+global.catch_line, w.height),
        "#00FFFF", 2
    );
    line( 
        new point(global.center_line-global.throw_line, 0),
        new point(global.center_line-global.throw_line, w.height),
        "#FFFF00", 2
    );
    line( 
        new point(global.center_line+global.throw_line, 0),
        new point(global.center_line+global.throw_line, w.height),
        "#FFFF00", 2
    );
    line( new point(0,global.tray_plane), new point(w.width,global.tray_plane), "#0000FF", 2 );
}


var slider_pattern_top = document.getElementById("slider_pattern_top");
slider_pattern_top.min = 0;
slider_pattern_top.max = video.offsetHeight;
slider_pattern_top.value = video.offsetHeight * 0.75;
var pattern_top = document.getElementById("pattern_top");
pattern_top.innerHTML = global.pattern_top;

var slider_pattern_bottom = document.getElementById("slider_pattern_bottom");
slider_pattern_bottom.min = 0;
slider_pattern_bottom.max = video.offsetHeight;
slider_pattern_bottom.value = global.tray_plane;
var pattern_bottom = document.getElementById("pattern_bottom");
pattern_bottom.innerHTML = global.tray_plane;

var slider_pattern_mid_line = document.getElementById("slider_pattern_mid_line");
slider_pattern_mid_line.min = 0;
slider_pattern_mid_line.max = video.offsetWidth;
slider_pattern_mid_line.value = video.offsetWidth/2;
var pattern_mid_line = document.getElementById("pattern_mid_line");
pattern_mid_line.innerHTML = global.center_line;

var slider_pattern_catch_line = document.getElementById("slider_pattern_catch_line");
slider_pattern_catch_line.min = 0;
slider_pattern_catch_line.max = video.offsetWidth/2;
slider_pattern_catch_line.value = video.offsetWidth/3;
var pattern_catch_line = document.getElementById("pattern_catch_line");
pattern_catch_line.innerHTML = global.catch_line;

var slider_pattern_throw_line = document.getElementById("slider_pattern_throw_line");
slider_pattern_throw_line.min = 0;
slider_pattern_throw_line.max = video.offsetWidth/2;
slider_pattern_throw_line.value = video.offsetWidth/10;
var pattern_throw_line = document.getElementById("pattern_throw_line");
pattern_throw_line.innerHTML = global.throw_line;

var slider_bpm = document.getElementById("slider_bpm");
slider_bpm.min = 30;
slider_bpm.max = 600;
slider_bpm.value = global.bpm;
var bpm_element = document.getElementById("bpm");
bpm_element.innerHTML = global.bpm;

function resize_container(element) {
    var w  = element.offsetWidth;
    var h  = element.offsetHeight;
    var container = document.getElementById("container");
    container.width  = w;
    container.height = h;
}

function resize_canvas(element) {
    var w  = element.offsetWidth;
    var h  = element.offsetHeight;
    var cv = document.getElementById("canvas");
    cv.width  = w;
    cv.height = h;
}

video.onplay=function(){
    resize_canvas(video)
    canvas = document.getElementById("canvas");
    console.log("video width: ", video.offsetWidth )
    console.log("video height: ", video.offsetHeight )
    console.log("canvas width: ", canvas.width )
    console.log("canvas height: ", canvas.height )
    console.log("canvas: ", canvas);
    canvas.style.visibility="visible";
};


// Update the current slider value (each time you drag the slider handle)
slider_pattern_top.oninput = function() {
    global.pattern_top = Number(this.value);
    /*var pattern_top = Number(this.value);*/
    var fps = global.fps;
    var bpm = global.bpm;
    pattern_top.innerHTML = global.pattern_top;
    global.interval_id = init( fps, bpm, global.pattern_top, global.center_line );
}

slider_pattern_bottom.oninput = function() {
    global.tray_plane = Number(this.value);
    var fps = global.fps;
    var bpm = global.bpm;
    pattern_bottom.innerHTML = global.tray_plane;
    global.interval_id = init( fps, bpm, global.pattern_top, global.center_line );
}

slider_pattern_mid_line.oninput = function() {
    var center_line = Number(this.value);
    var fps = global.fps;
    var bpm = global.bpm;
    pattern_mid_line.innerHTML = center_line;
    global.interval_id = init( fps, bpm, global.pattern_top, center_line );
}

slider_pattern_catch_line.oninput = function() {
    global.catch_line = Number(this.value);
    var fps = global.fps;
    var bpm = global.bpm;
    pattern_catch_line.innerHTML = global.catch_line;
    global.interval_id = init( fps, bpm, global.pattern_top, global.center_line );
}

slider_pattern_throw_line.oninput = function() {
    global.throw_line = Number(this.value);
    var fps = global.fps;
    var bpm = global.bpm;
    pattern_throw_line.innerHTML = global.throw_line;
    global.interval_id = init( fps, bpm, global.pattern_top, global.center_line );
}

slider_bpm.oninput = function() {
    var bpm = Number(this.value);
    var fps = global.fps;
    bpm_element.innerHTML = bpm;
    global.interval_id = init( fps, bpm, global.pattern_top, global.center_line );
}

window.addEventListener('load', function() {
    resize_container(video);
    resize_canvas(video);

    global.interval_id = init( global.fps, global.bpm, global.pattern_top, global.center_line );

    console.log ("element vd1: ", video);
    console.log ("video_height: ", video_height);
    console.log ("video_width: ", video_width);

})

// See: https://design.tutsplus.com/articles/human-anatomy-fundamentals-basic-body-proportions--vector-18254
// See: https://jsfiddle.net/7sk5k4gp/13/ for how to overlay canvas over video.
// See: https://jsfiddle.net/m1erickson/AGd6u/ for how to drag elements on canvas.
// Also: https://stackoverflow.com/questions/5559248/how-to-create-a-draggable-line-in-html5-canvas
// http://juggling.tv/video/encoded/7ballflashslowmotionjim-JTV-i17040.mp4
