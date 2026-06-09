const form = document.querySelector("form")
const input = document.querySelector("input[type='radio']");

function backgroundChanger(event) {
       document.body.style.backgroundColor = event.target.value;
}
form.addEventListener("change", backgroundChanger)