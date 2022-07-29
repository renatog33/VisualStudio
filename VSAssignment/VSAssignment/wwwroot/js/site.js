// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
//Functions to be called onmouseover and onmouseout to change the color of "Jill Scott"
function newColor() {
    document.getElementById("jill_scott").style.color = "brown";
}

function oldColor() {
    document.getElementById("jill_scott").style.color = "darkolivegreen";
}

let start = Date.now(); // remember start time

let timer = setInterval(function () {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 2000) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);

}, 20);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
    train.style.left = timePassed / 5 + 'px';
}