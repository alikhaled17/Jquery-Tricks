// define my html ellements
var butty = document.getElementById('butt'),
    viewer = document.getElementById('show');


// define my Function
butty.onclick = function () {

    'use strict';
    // define my variables of function
    var chars = "1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        seriaLength = 10,
        randomSerial = '',
        i,
        randomNum;

    // create randome number and create serial number
    for (i = 0; i < seriaLength; i++) {
        randomNum = Math.floor(Math.random() * chars.length);
        randomSerial = randomSerial + chars.substring(randomNum, randomNum + 1); 
    }
    
    viewer.innerHTML = randomSerial;
    
}

