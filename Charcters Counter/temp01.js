
var myTxt   = document.getElementById('textrea'),
    counter = document.getElementById('counter'),
    maxLength = myTxt.getAttribute('maxlength'),
    viewer = document.getElementById('viewer'); // just for fun


myTxt.oninput = function () {
    "use strict";
    counter.textContent = "-" + (maxLength - this.value.length) + "-" ;
    
    // just for fun
    viewer.textContent = this.value;
    if (myTxt.value.length === 120) {
        counter.style.backgroundColor = '#000';
    } else {
        counter.style.backgroundColor = 'crimson';
    }
    // just for fun
}