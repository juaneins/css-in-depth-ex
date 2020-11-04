let input = document.getElementById("trip");
let button = document.getElementById("submit-button");

button.addEventListener("click", function (event) {
  console.log("click on button");
  event.preventDefault();
  button.classList.add("is-loading");
  button.disabled = true;
  input.disabled = true;
});
