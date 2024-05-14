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
    line_width: 10,
    bpm: 160,
    fps: 30
};

function resize_container(element) {
    var w  = element.offsetWidth;
    var h  = element.offsetHeight;
    var container = document.getElementById("container");
    container.width  = w;
    container.height = h;
}

var container = document.getElementById("container"); 

// SVG Manipulation

var SVGDocument = null;
var SVGRoot = null;

var TrueCoords = null;
var GrabPoint = null;
var BackDrop = null;
var DragTarget = null;

function resize_svg(element) {
    var w  = element.offsetWidth;
    var h  = element.offsetHeight;
    
    SVGDocument.setAttribute('width', '' + w );
    SVGDocument.setAttribute('height', '' + h );
}

function Init(evt)
{
    SVGDocument = document.getElementsByTagName("svg")[0];
    SVGRoot = SVGDocument;
    // SVGRoot = SVGDocument.documentElement;

    // these svg points hold x and y values...
    //    very handy, but they do not display on the screen (just so you know)
    TrueCoords = SVGRoot.createSVGPoint();
    GrabPoint = SVGRoot.createSVGPoint();

    // this will serve as the canvas over which items are dragged.
    //    having the drag events occur on the mousemove over a backdrop
    //    (instead of the dragged element) prevents the dragged element
    //    from being inadvertantly dropped when the mouse is moved rapidly
    BackDrop = SVGDocument.getElementById('BackDrop');
}

function Grab(evt)
{
    // find out which element we moused down on
    var targetElement = evt.target;

    // you cannot drag the background itself, so ignore any attempts to mouse down on it
    if ( BackDrop != targetElement )
    {
    //set the item moused down on as the element to be dragged
    DragTarget = targetElement;

    // move this element to the "top" of the display, so it is (almost)
    //    always over other elements (exception: in this case, elements that are
    //    "in the folder" (children of the folder group) with only maintain
    //    hierarchy within that group
    DragTarget.parentNode.appendChild( DragTarget );

    // turn off all pointer events to the dragged element, this does 2 things:
    //    1) allows us to drag text elements without selecting the text
    //    2) allows us to find out where the dragged element is dropped (see Drop)
    DragTarget.setAttributeNS(null, 'pointer-events', 'none');

    // we need to find the current position and translation of the grabbed element,
    //    so that we only apply the differential between the current location
    //    and the new location
    var transMatrix = DragTarget.getCTM();
    GrabPoint.x = TrueCoords.x - Number(transMatrix.e);
    GrabPoint.y = TrueCoords.y - Number(transMatrix.f);

    }
};


function Drag(evt)
{
    // account for zooming and panning
    GetTrueCoords(evt);

    // if we don't currently have an element in tow, don't do anything
    if (DragTarget)
    {
    // account for the offset between the element's origin and the
    //    exact place we grabbed it... this way, the drag will look more natural
    var newX = TrueCoords.x - GrabPoint.x;
    var newY = TrueCoords.y - GrabPoint.y;

    // apply a new tranform translation to the dragged element, to display
    //    it in its new location
    if( DragTarget.className.baseVal == 'vertical' ) {
        DragTarget.setAttributeNS(null, 'transform', 'translate(' + newX + ',' + 0 + ')');
    }
    else if( DragTarget.className.baseVal == 'horizontal' ) {
        DragTarget.setAttributeNS(null, 'transform', 'translate(' + 0 + ',' + newY + ')');
    }
    else {
        DragTarget.setAttributeNS(null, 'transform', 'translate(' + newX + ',' + newY + ')');
    }
    }
};


function Drop(evt)
{
    // if we aren't currently dragging an element, don't do anything
    if ( DragTarget )
    {
    // since the element currently being dragged has its pointer-events turned off,
    //    we are afforded the opportunity to find out the element it's being dropped on
    var targetElement = evt.target;

    // turn the pointer-events back on, so we can grab this item later
    DragTarget.setAttributeNS(null, 'pointer-events', 'all');

    // set the global variable to null, so nothing will be dragged until we
    //    grab the next element
    DragTarget = null;
    }
};


function GetTrueCoords(evt)
{
    // find the current zoom level and pan setting, and adjust the reported
    //    mouse position accordingly
    var newScale = SVGRoot.currentScale;
    var translation = SVGRoot.currentTranslate;
    TrueCoords.x = (evt.clientX - translation.x)/newScale;
    TrueCoords.y = (evt.clientY - translation.y)/newScale;
};

window.addEventListener('load', function() {
    resize_container(video);
    resize_svg(video);

    console.log ("element vd1: ", video);
    console.log ("video_height: ", video_height);
    console.log ("video_width: ", video_width);

})
