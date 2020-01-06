function drawName() {
    drawA();
    drawL();
    drawE();
}
function drawA() {
    ctx.fillRect(2*UNIT,0,UNIT,UNIT);
    ctx.fillRect(3*UNIT,0,UNIT,7*UNIT);
    ctx.fillRect(1*UNIT,1*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(0*UNIT,2*UNIT,1*UNIT,5*UNIT);
    ctx.fillRect(1*UNIT,4*UNIT,2*UNIT,1*UNIT);
}
function drawL() {
    ctx.fillRect(5*UNIT,0*UNIT,1*UNIT,7*UNIT);
    ctx.fillRect(6*UNIT,6*UNIT,3*UNIT,1*UNIT);
}
function drawE() {
    ctx.fillRect(10*UNIT,0*UNIT,4*UNIT,UNIT);
    ctx.fillRect(*UNIT,*UNIT,*UNIT,*UNIT);
}
