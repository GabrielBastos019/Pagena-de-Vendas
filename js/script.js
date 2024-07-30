/*
    Timer
*/
var hoursBox = document.getElementById('hours');
var minutesBox = document.getElementById('minutes');
var secondsBox = document.getElementById('seconds');

var hours = 1;
var minutes = 28;
var seconds = 43;

function updateTimer() {
    hoursBox.innerHTML = hours;
    minutesBox.innerHTML = minutes;
    secondsBox.innerHTML = seconds;

    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if (minutes < 0) {
        minutes = 59;
        hours--;
    }

    if (hours < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        clearInterval(interval);
    }
}

var interval = setInterval(updateTimer, 1000);
window.onbeforeunload = function() {
    hours = 1;
    minutes = 30;
    seconds = 0;
}
//Fim Timer