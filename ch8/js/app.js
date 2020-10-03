console.log('script app.js');
(function() {
let button = document.getElementById('toggle-menu');
button.addEventListener('click', function(event) {
    event.preventDefault();
    let menu = document.getElementById('main-menu');
    menu.classList.toggle('is-open');
});
})();