var currentScale = 1;

document.addEventListener("DOMContentLoaded", function() {
    setZoom();
    window.addEventListener("resize", setZoom);
});

function setZoom() {
    var requiredWidth = 430;
    currentScale = Math.min(window.innerWidth * currentScale / requiredWidth, 1);
    document.querySelector("meta[name='viewport']").setAttribute("content", "width=device-width, initial-scale=" + currentScale + ", user-scalable=0");
}