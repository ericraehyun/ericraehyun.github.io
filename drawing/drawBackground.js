function drawBackground(backgroundColour,floorColour) {
    ctx.fillStyle = backgroundColour;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    drawFloor(floorColour);
}
function drawFloor(floorColour) {
    ctx.fillStyle = floorColour;
    ctx.fillRect(0,canvas.height-10*UNIT,canvas.width,10*UNIT);
}
function drawCloud(cloudColour,x,y) {
    ctx.fillStyle = cloudColour;
    ctx.save();
    ctx.translate(x*UNIT, y*UNIT);
    ctx.fillRect(3*UNIT,0*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,1*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,2*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(0*UNIT,3*UNIT,9*UNIT,4*UNIT);
    ctx.fillRect(1*UNIT,7*UNIT,10*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,4*UNIT,2*UNIT,3*UNIT);
    ctx.fillRect(11*UNIT,5*UNIT,1*UNIT,2*UNIT);
    ctx.restore();
}