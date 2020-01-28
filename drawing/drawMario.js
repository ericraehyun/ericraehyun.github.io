function drawMario(type, frame, x,y) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    if (type == "default") {
        drawHead();
        drawBody();
    } else if (type == "walk") {
        if (frame == 1) {
            drawHeadWalk();
            drawBodyWalk();
        } else if (frame == 2) {
            drawHeadWalk2();
            drawBodyWalk2();
        }
    } else if (type == "run") {
        drawHeadRun();
        drawBodyRun();
    }
    ctx.restore();
}
function drawHead() {
    ctx.fillStyle = "#B13425";
    ctx.fillRect(6*UNIT,0*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,1*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,2*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,3*UNIT,11*UNIT,1*UNIT);
    ctx.fillStyle = "#E39D24";
    ctx.fillRect(10*UNIT,1*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,2*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,4*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(9*UNIT,4*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,5*UNIT,4*UNIT,2*UNIT);
    ctx.fillRect(14*UNIT,6*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,7*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,6*UNIT,3*UNIT,2*UNIT);
    ctx.fillRect(3*UNIT,5*UNIT,2*UNIT,4*UNIT);
    ctx.fillRect(5*UNIT,8*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,9*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,10*UNIT,8*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,11*UNIT,5*UNIT,1*UNIT);
    ctx.fillStyle = "#6A6B04";
    ctx.fillRect(3*UNIT,4*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,5*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(6*UNIT,6*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(2*UNIT,5*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(1*UNIT,7*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(1*UNIT,9*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,10*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,8*UNIT,5*UNIT,2*UNIT);
    ctx.fillRect(8*UNIT,8*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,7*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,4*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(9*UNIT,5*UNIT,1*UNIT,1*UNIT);
}
function drawBody() {
    ctx.fillStyle = "#6A6B04";
     ctx.fillRect(4*UNIT,12*UNIT,1*UNIT,4*UNIT);
     ctx.fillRect(3*UNIT,13*UNIT,1*UNIT,7*UNIT);
     ctx.fillRect(2*UNIT,14*UNIT,1*UNIT,6*UNIT);
     ctx.fillRect(1*UNIT,15*UNIT,1*UNIT,5*UNIT);
     ctx.fillRect(0*UNIT,17*UNIT,1*UNIT,3*UNIT);
     ctx.fillRect(6*UNIT,12*UNIT,4*UNIT,6*UNIT);
     ctx.fillRect(11*UNIT,12*UNIT,1*UNIT,4*UNIT);
     ctx.fillRect(12*UNIT,13*UNIT,1*UNIT,7*UNIT);
     ctx.fillRect(13*UNIT,14*UNIT,1*UNIT,6*UNIT);
     ctx.fillRect(14*UNIT,15*UNIT,1*UNIT,5*UNIT);
     ctx.fillRect(15*UNIT,17*UNIT,1*UNIT,3*UNIT);
     ctx.fillRect(0*UNIT,30*UNIT,2*UNIT,2*UNIT);
     ctx.fillRect(2*UNIT,28*UNIT,4*UNIT,4*UNIT);
     ctx.fillRect(10*UNIT,28*UNIT,4*UNIT,4*UNIT);
     ctx.fillRect(14*UNIT,30*UNIT,2*UNIT,2*UNIT);
     ctx.fillStyle = "#B13425";
     ctx.fillRect(5*UNIT,12*UNIT,1*UNIT,7*UNIT);
     ctx.fillRect(6*UNIT,18*UNIT,2*UNIT,7*UNIT);
     ctx.fillRect(6*UNIT,25*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(4*UNIT,16*UNIT,1*UNIT,9*UNIT);
     ctx.fillRect(2*UNIT,24*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(3*UNIT,23*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(5*UNIT,20*UNIT,1*UNIT,5*UNIT);
     ctx.fillRect(1*UNIT,25*UNIT,5*UNIT,3*UNIT);
     ctx.fillRect(10*UNIT,12*UNIT,1*UNIT,7*UNIT);
     ctx.fillRect(8*UNIT,18*UNIT,2*UNIT,7*UNIT);
     ctx.fillRect(9*UNIT,25*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(11*UNIT,16*UNIT,1*UNIT,9*UNIT);
     ctx.fillRect(12*UNIT,23*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(13*UNIT,24*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(10*UNIT,20*UNIT,1*UNIT,5*UNIT);
     ctx.fillRect(10*UNIT,25*UNIT,5*UNIT,3*UNIT);
     ctx.fillStyle = "#E39D24";
     ctx.fillRect(0*UNIT,20*UNIT,4*UNIT,2*UNIT);
     ctx.fillRect(1*UNIT,22*UNIT,2*UNIT,2*UNIT);
     ctx.fillRect(3*UNIT,22*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(5*UNIT,19*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(10*UNIT,19*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(12*UNIT,20*UNIT,4*UNIT,2*UNIT);
     ctx.fillRect(13*UNIT,22*UNIT,2*UNIT,2*UNIT);
     ctx.fillRect(12*UNIT,22*UNIT,1*UNIT,1*UNIT);
 }
 function drawHeadWalk() {
     ctx.fillStyle = "#B13425";
     ctx.fillRect(7*UNIT,2*UNIT,5*UNIT,1*UNIT);
     ctx.fillRect(5*UNIT,3*UNIT,6*UNIT,1*UNIT);
     ctx.fillRect(4*UNIT,4*UNIT,6*UNIT,1*UNIT);
     ctx.fillRect(4*UNIT,5*UNIT,11*UNIT,1*UNIT);
     ctx.fillStyle = "#E39D24";
     ctx.fillRect(11*UNIT,3*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(10*UNIT,4*UNIT,2*UNIT,1*UNIT);
     ctx.fillRect(7*UNIT,6*UNIT,2*UNIT,2*UNIT);
     ctx.fillRect(10*UNIT,6*UNIT,3*UNIT,1*UNIT);
     ctx.fillRect(11*UNIT,7*UNIT,4*UNIT,2*UNIT);
     ctx.fillRect(15*UNIT,8*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(12*UNIT,9*UNIT,4*UNIT,1*UNIT);
     ctx.fillRect(8*UNIT,8*UNIT,3*UNIT,2*UNIT);
     ctx.fillRect(4*UNIT,7*UNIT,2*UNIT,4*UNIT);
     ctx.fillRect(6*UNIT,10*UNIT,3*UNIT,1*UNIT);
     ctx.fillRect(5*UNIT,11*UNIT,5*UNIT,1*UNIT);
     ctx.fillRect(6*UNIT,12*UNIT,8*UNIT,1*UNIT);
     ctx.fillRect(6*UNIT,13*UNIT,5*UNIT,1*UNIT);
     ctx.fillStyle = "#6A6B04";
     ctx.fillRect(4*UNIT,6*UNIT,3*UNIT,1*UNIT);
     ctx.fillRect(6*UNIT,7*UNIT,1*UNIT,3*UNIT);
     ctx.fillRect(7*UNIT,8*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(3*UNIT,7*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(2*UNIT,9*UNIT,2*UNIT,2*UNIT);
     ctx.fillRect(4*UNIT,11*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(4*UNIT,12*UNIT,2*UNIT,1*UNIT);
     ctx.fillRect(10*UNIT,10*UNIT,5*UNIT,2*UNIT);
     ctx.fillRect(9*UNIT,10*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(11*UNIT,9*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(9*UNIT,6*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(10*UNIT,7*UNIT,1*UNIT,1*UNIT);
 }
 function drawBodyWalk() {
     ctx.fillStyle = "#B13425";
     ctx.fillRect(5*UNIT,13*UNIT,3*UNIT,1*UNIT);
     ctx.fillRect(4*UNIT,14*UNIT,1*UNIT,14*UNIT);
     ctx.fillRect(3*UNIT,17*UNIT,1*UNIT,7*UNIT);
     ctx.fillRect(5*UNIT,18*UNIT,1*UNIT,10*UNIT);
     ctx.fillRect(6*UNIT,20*UNIT,1*UNIT,8*UNIT);
     ctx.fillRect(7*UNIT,21*UNIT,1*UNIT,6*UNIT);
     ctx.fillRect(8*UNIT,21*UNIT,1*UNIT,5*UNIT);
     ctx.fillRect(9*UNIT,22*UNIT,2*UNIT,3*UNIT);
     ctx.fillRect(11*UNIT,22*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(12*UNIT,21*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(8*UNIT,14*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(9*UNIT,15*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(10*UNIT,16*UNIT,2*UNIT,1*UNIT);
     ctx.fillRect(9*UNIT,26*UNIT,4*UNIT,2*UNIT);
     ctx.fillRect(11*UNIT,25*UNIT,3*UNIT,1*UNIT);
     ctx.fillRect(12*UNIT,24*UNIT,2*UNIT,1*UNIT);
     // 초록색
     ctx.fillStyle = "#6A6B04"
     ctx.fillRect(4*UNIT,13*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(3*UNIT,14*UNIT,1*UNIT,3*UNIT);
     ctx.fillRect(2*UNIT,16*UNIT,1*UNIT,3*UNIT);
     ctx.fillRect(0*UNIT,24*UNIT,4*UNIT,5*UNIT);
     ctx.fillRect(0*UNIT,29*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(1*UNIT,29*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(9*UNIT,28*UNIT,4*UNIT,4*UNIT);
     ctx.fillRect(13*UNIT,30*UNIT,2*UNIT,2*UNIT);
     ctx.fillRect(9*UNIT,14*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(10*UNIT,15*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(8*UNIT,26*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(9*UNIT,25*UNIT,2*UNIT,1*UNIT);
     ctx.fillRect(11*UNIT,24*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(12*UNIT,23*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(5*UNIT,14*UNIT,3*UNIT,4*UNIT);
     ctx.fillRect(6*UNIT,18*UNIT,2*UNIT,2*UNIT);
     ctx.fillRect(8*UNIT,15*UNIT,1*UNIT,6*UNIT);
     ctx.fillRect(7*UNIT,20*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(9*UNIT,16*UNIT,1*UNIT,6*UNIT);
     ctx.fillRect(10*UNIT,17*UNIT,2*UNIT,5*UNIT);
     ctx.fillRect(12*UNIT,19*UNIT,1*UNIT,2*UNIT);
     ctx.fillStyle = "#E39D24"
     ctx.fillRect(12*UNIT,16*UNIT,2*UNIT,1*UNIT);
     ctx.fillRect(12*UNIT,17*UNIT,4*UNIT,2*UNIT);
     ctx.fillRect(13*UNIT,19*UNIT,3*UNIT,2*UNIT);
 }
 function drawHeadWalk2() {
     ctx.fillStyle = "#B13425";
     ctx.fillRect(6*UNIT,1*UNIT,5*UNIT,1*UNIT);
     ctx.fillRect(4*UNIT,2*UNIT,6*UNIT,1*UNIT);
     ctx.fillRect(3*UNIT,3*UNIT,6*UNIT,1*UNIT);
     ctx.fillRect(3*UNIT,4*UNIT,11*UNIT,1*UNIT);
     ctx.fillStyle = "#E39D24";
     ctx.fillRect(10*UNIT,2*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(9*UNIT,3*UNIT,2*UNIT,1*UNIT);
     ctx.fillRect(6*UNIT,5*UNIT,2*UNIT,2*UNIT);
     ctx.fillRect(9*UNIT,5*UNIT,3*UNIT,1*UNIT);
     ctx.fillRect(10*UNIT,6*UNIT,4*UNIT,2*UNIT);
     ctx.fillRect(14*UNIT,7*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(11*UNIT,8*UNIT,4*UNIT,1*UNIT);
     ctx.fillRect(7*UNIT,7*UNIT,3*UNIT,2*UNIT);
     ctx.fillRect(3*UNIT,6*UNIT,2*UNIT,4*UNIT);
     ctx.fillRect(5*UNIT,9*UNIT,3*UNIT,1*UNIT);
     ctx.fillRect(4*UNIT,10*UNIT,5*UNIT,1*UNIT);
     ctx.fillRect(5*UNIT,11*UNIT,8*UNIT,1*UNIT);
     ctx.fillRect(5*UNIT,12*UNIT,5*UNIT,1*UNIT);
     ctx.fillStyle = "#6A6B04";
     ctx.fillRect(3*UNIT,5*UNIT,3*UNIT,1*UNIT);
     ctx.fillRect(5*UNIT,6*UNIT,1*UNIT,3*UNIT);
     ctx.fillRect(6*UNIT,7*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(2*UNIT,6*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(1*UNIT,8*UNIT,2*UNIT,2*UNIT);
     ctx.fillRect(2*UNIT,10*UNIT,2*UNIT,1*UNIT);
     ctx.fillRect(3*UNIT,11*UNIT,2*UNIT,1*UNIT);
     ctx.fillRect(4*UNIT,12*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(9*UNIT,9*UNIT,5*UNIT,2*UNIT);
     ctx.fillRect(8*UNIT,9*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(10*UNIT,8*UNIT,1*UNIT,1*UNIT);
     ctx.fillRect(8*UNIT,5*UNIT,1*UNIT,2*UNIT);
     ctx.fillRect(9*UNIT,6*UNIT,1*UNIT,1*UNIT);
 }
 function drawBodyWalk2() {
    ctx.fillStyle = "#B13425";
    ctx.fillRect(4*UNIT,12*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,13*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,13*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,14*UNIT,2*UNIT,3*UNIT);
    ctx.fillRect(10*UNIT,16*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,14*UNIT,1*UNIT,5*UNIT);
    ctx.fillRect(2*UNIT,19*UNIT,2*UNIT,4*UNIT);
    ctx.fillRect(3*UNIT,23*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,20*UNIT,1*UNIT,6*UNIT);
    ctx.fillRect(5*UNIT,21*UNIT,1*UNIT,6*UNIT);
    ctx.fillRect(6*UNIT,26*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,22*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(7*UNIT,22*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(6*UNIT,27*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,22*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,21*UNIT,2*UNIT,3*UNIT);
    ctx.fillRect(12*UNIT,19*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(13*UNIT,20*UNIT,1*UNIT,3*UNIT);
    ctx.fillStyle = "#E39D24";
    ctx.fillRect(8*UNIT,18*UNIT,3*UNIT,4*UNIT);
    ctx.fillRect(9*UNIT,17*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,18*UNIT,1*UNIT,3*UNIT);
    ctx.fillStyle = "#6A6B04";
    ctx.fillRect(4*UNIT,29*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(5*UNIT,27*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(6*UNIT,28*UNIT,3*UNIT,4*UNIT);
    ctx.fillRect(9*UNIT,30*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(2*UNIT,14*UNIT,1*UNIT,5*UNIT);
    ctx.fillRect(3*UNIT,13*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,13*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,14*UNIT,4*UNIT,6*UNIT);
    ctx.fillRect(8*UNIT,17*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,20*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(5*UNIT,20*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,13*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,13*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(11*UNIT,15*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(7*UNIT,24*UNIT,4*UNIT,3*UNIT);
    ctx.fillRect(6*UNIT,25*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,22*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(10*UNIT,23*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,24*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,25*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,27*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,27*UNIT,2*UNIT,2*UNIT);
 }
 function drawHeadRun() {
    ctx.fillStyle = "#B13425";
    ctx.fillRect(6*UNIT,0*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,1*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,2*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,3*UNIT,11*UNIT,1*UNIT);
    ctx.fillStyle = "#E39D24";
    ctx.fillRect(10*UNIT,1*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,2*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,4*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(9*UNIT,4*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,5*UNIT,4*UNIT,2*UNIT);
    ctx.fillRect(14*UNIT,6*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,7*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,6*UNIT,3*UNIT,2*UNIT);
    ctx.fillRect(3*UNIT,5*UNIT,2*UNIT,4*UNIT);
    ctx.fillRect(5*UNIT,8*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,9*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,10*UNIT,8*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,11*UNIT,5*UNIT,1*UNIT);
    ctx.fillStyle = "#6A6B04";
    ctx.fillRect(3*UNIT,4*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,5*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(6*UNIT,6*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(2*UNIT,5*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(1*UNIT,7*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(1*UNIT,9*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,10*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,8*UNIT,5*UNIT,2*UNIT);
    ctx.fillRect(8*UNIT,8*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,7*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,4*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(9*UNIT,5*UNIT,1*UNIT,1*UNIT);
 }
 function drawBodyRun()  {

 }

