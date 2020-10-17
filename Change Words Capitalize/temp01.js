var myTxt = document.getElementById('textrea'),
    butt  = document.getElementById('butt'),
    viewer= document.getElementById('view');

butt.onclick = function(string) {
    string = myTxt.value;
    var oldArray = string.split(" ");
    var newArray = [];

    for (i = 0 ; i < oldArray.length; i++ ) {
        newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
    }
    // just for fun !!!
    viewer.textContent = newArray.join(' ');
    viewer.style.width = '100%';
    viewer.style.height = '100px';
    viewer.style.opacity = .9;
    // just for fun !!!
}

// just for fun !!!
myTxt.onkeypress = function() {
    myTxt.style.borderWidth = '8px';
}
myTxt.onkeyup = function () {
    myTxt.style.borderWidth = '10px';
}
// just for fun !!!