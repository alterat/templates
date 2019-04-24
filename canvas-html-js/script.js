var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseIsDown = false;
var mouseWasOut = false;

function getMousePos(canvas, evt) {
   var rect = canvas.getBoundingClientRect();
   return {
     x: evt.clientX - rect.left,
     y: evt.clientY - rect.top
   };
}

function drawPoint(pos) {
	ctx.beginPath();
	ctx.fillStyle = "#000000";
	ctx.arc(pos.x, pos.y, 5, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke(); 
	
}

function mouseClick(e){
	pos = getMousePos(canvas, e)
	if (mouseWasOut) {
		mouseWasOut = false;
	}
	else {
		drawPoint(pos);
	}
}

function mouseDown(e) {
	mouseIsDown = true;
}

function mouseUp() {
	mouseIsDown = false;
}

function mouseMove(e) {
	if (mouseIsDown) {
		pos = getMousePos(canvas, e);
		drawPoint(pos);
	}
	e.preventDefault();
}

function mouseOut() {
	mouseIsDown = false;
	mouseWasOut = true;
}

function touchMove(e) {
	var touch = e.touches[0];
	if (mouseIsDown) {
		pos = getMousePos(canvas, touch);
		drawPoint(pos);
	}
	e.preventDefault();
}


canvas.addEventListener('click',mouseClick);
canvas.addEventListener('mousedown',mouseDown);
canvas.addEventListener('mouseup',mouseUp);
canvas.addEventListener('mousemove',mouseMove);
canvas.addEventListener('mouseout',mouseOut);
canvas.addEventListener('touchstart',mouseDown);
canvas.addEventListener('touchend',mouseUp);
canvas.addEventListener('touchmove',touchMove);
canvas.addEventListener('touchleave',mouseOut);

// Add a function that clears the canvas

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var btn = document.getElementById('erase')
btn.addEventListener('click',clearCanvas)
