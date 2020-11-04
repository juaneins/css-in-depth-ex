let input = document.getElementById("trip");
let button = document.getElementById("submit-button");

let timeout = null;

button.addEventListener("click", function (event) {
  console.log("click on button");
  event.preventDefault();
  button.classList.add("is-loading");
  button.disabled = true;
  input.disabled = true;
});

input.addEventListener("keyup", function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    button.classList.add("shake");
  }, 1000);
});

button.addEventListener("animationend", function () {
  button.classList.remove("shake");
});
