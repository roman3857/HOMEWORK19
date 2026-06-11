const form = document.querySelector("form");
const input = document.querySelector("input[type='radio']");

function backgroundChanger(event) {
  document.body.style.backgroundColor = event.target.value;
}
form.addEventListener("change", backgroundChanger);

const input2 = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input2.addEventListener("input", () => {
       output.textContent = input2.value.trim() || "незнайомець"
})
