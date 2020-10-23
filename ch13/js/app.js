console.log('en script!!!');

let html = document.documentElement;
let script = document.createElement("script");
script.src = "js/fontfaceobserver.js";
script.async = true;


script.onload = function() {
    let roboto = new FontFaceObserver("Roboto");
    let sansita = new FontFaceObserver("Sansita");
    let timeout = 2000;

    Promise.all([
        roboto.load(null, timeout),
        sansita.load(null, timeout)
    ]).then(function() {
        html.classList.add("fonts-loaded");
    }).catch(function (e) {
        html.classList.add("fonts-failed");
    });
}
document.head.appendChild(script);