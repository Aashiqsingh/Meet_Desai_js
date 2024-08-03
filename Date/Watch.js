var hours = 0;
var minutes = 0;
var seconds = 0;

var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

const start2 = () => {

    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    hour.innerHTML = (hours < 10 ? "0" : "") + hours;
    minute.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    second.innerHTML = (seconds < 10 ? "0" : "") + seconds;
}
var x;
const start = () => {
     x = setInterval(start2, 1000)
}

const stop = () => {

    clearInterval(x)
}

const reset = () => {
    seconds = 0;
    minutes = 0;
    hours = 0;
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    clearInterval(x);
}