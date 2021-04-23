mouse_event="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var lastpositonofX, lastpositionofY;

color="black"

widthofline=1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e)
{
mouse_event="mousedown";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e)
{
mouse_event="mouseleave";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e)
{
mouse_event="mouseup";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e)
{
CurrentX=e.clientX-canvas.offsetLeft;
CurrentY=e.clientY-canvas.offsetTop;
if(mouse_event=="mousedown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthofline;
ctx.moveTo(lastpositonofX, lastpositionofY);
ctx.arc(CurrentX, CurrentY, 20, 0, 2*Math.PI);
console.log("lastX: "+lastpositonofX+"lastY: "+lastpositionofY);
console.log("X: "+CurrentX+"Y: "+CurrentY);
ctx.stroke();
}
lastpositonofX=CurrentX;
lastpositionofY=CurrentY;
}





