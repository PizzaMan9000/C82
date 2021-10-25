mouseEvent = "";
var lastPositionX;
var lastPositionY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
line_width = 1;

canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e) {
    color = document.getElementById("color").value;
    line_width = document.getElementById("lineWidth").value;

    mouseEvent = "mouseDown"
}

canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e) {
    currentPosX = e.clientX - canvas.offsetLeft;
    currentPosY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        console.log("Last position of x and y:");
        console.log("x- " + lastPositionX + " y- " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);
        console.log("Current position of x and y:");
        console.log("x- " + currentPosX + " y- " + currentPosY);
        ctx.lineTo(currentPosX, currentPosY);
        ctx.stroke();

        

    }

    lastPositionX = currentPosX;
    lastPositionY = currentPosY;
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e) {
    mouseEvent = "mouseUp";
}

function clearCanvas() {
    ctx.clearRect(0 , 0,canvas.width, canvas.height);
}