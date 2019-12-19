var pupils = document.querySelectorAll(".pupil");

for (var i = 0; i < pupils.length; i++) {
    var offset = pupils[i].getBoundingClientRect();
    pupils[i]['centerX'] = offset.left + offset.width/2,
    pupils[i]['centerY'] = offset.bottom;
}

function goGoogly(e) {
    var pointerEvent = e;
    if (e.targetTouches && e.targetTouches[0]) {
        e.preventDefault(); 
        pointerEvent = e.targetTouches[0];
        mouseX = pointerEvent.pageX;
        mouseY = pointerEvent.pageY;
    } else {
        mouseX = e.clientX + window.pageXOffset,
        mouseY = e.clientY + window.pageYOffset;
    }
for (var i = 0; i < pupils.length; i++) {
        pupils[i]['radians'] = Math.atan2(mouseX - pupils[i]['centerX'], mouseY - pupils[i]['centerY']),
        pupils[i]['degree'] = (pupils[i]['radians'] * (180 / Math.PI) * -1); 
        pupils[i].style.transform = 'rotate('+ (pupils[i]['degree'] + 180) + 'deg)';
    }
}

window.addEventListener('mousemove', goGoogly);
window.addEventListener('touchstart', goGoogly);
window.addEventListener('touchmove', goGoogly);