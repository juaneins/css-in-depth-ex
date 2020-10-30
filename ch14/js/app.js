(function() {
    let toggle = document.getElementsByClassName('dropdown__toggle')[0];
    let dropdown = toggle.parentElement;
    let drawer = document.getElementsByClassName('dropdown__drawer')[0];
    let height = drawer.scrollHeight;
    console.log("height:" + height);

    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('is-open');
        if(dropdown.classList.contains('is-open')) {
            drawer.style.setProperty('height', height + 'px');
        } else {
            drawer.style.setProperty('height', '0');
        }
    });
}());