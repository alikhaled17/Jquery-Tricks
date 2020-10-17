// define my html ellements
var myButt = document.getElementById('mybutt'),
    myPass = document.getElementById('mypass');


// define my password function
myButt.onclick = function() {
    'use strict';
    if (myButt.textContent === 'Show') {
        myPass.setAttribute('type', 'text');
        myButt.textContent = 'Hide'; 
    } else {
        myPass.setAttribute('type', 'password');
        myButt.textContent = 'Show'; 
    }
}


// define my time function
function showTime() {

    'use strict';
    // define my variables of time function 
    var timing = document.getElementById('timing'),
        now = new Date(),
        hours = now.getHours(),
        minut = now.getMinutes(),
        secondes = now.getSeconds();

    if (hours < 10) { hours = "0" + hours; }
    if (minut < 10) { minut = "0" + minut; }
    if (secondes < 10) { secondes = "0" + secondes; }
    timing.textContent = hours + ":" + minut + ":" + secondes;
}

// how time to refresh my time to disblay like dinemace
window.onload = function () {
    setInterval(showTime, 1000);
}