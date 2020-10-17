// Hide Placeholder
var myInput = document.getElementById('myInput');

myInput.onfocus = function() {
    "use strict";
    this.removeAttribute("placeholder");
}
myInput.onblur = function () {
    "use strict";
    this.setAttribute("placeholder", 'Text Here..');
}
// Hide Placeholder

// Make Type Writer Effects
var mybutton = document.getElementById('mybutton'),
    viewer   = document.getElementById('viewer'),
    i        = 0;
   
mybutton.onclick = function () {
   
    "use strict";
    var typeWriter = setInterval(function(){
        
        "use strict";
        viewer.textContent += myInput.value[i];
        i++;

        if (i > myInput.value.length - 1) {
            clearInterval(typeWriter);
        }
    }, 20); 

}
// Make Type Writer Effects