document.body.classList.add(localStorage.getItem('pageColor') || 'green');

var el              = document.querySelectorAll('.color-switch li'),
    classesList     = [];

for (i = 0; i < el.length; i++) {
    classesList.push(el[i].getAttribute('data-color'));

    el[i].addEventListener(
        'click',
        function() {
            document.body.classList.remove(...classesList);
            document.body.classList.add(this.getAttribute('data-color')); 

            localStorage.setItem('pageColor', this.getAttribute('data-color'));
        },
        false
    )
    
}

