const btn = document.querySelector("button");
const input = document.querySelector(".input");
const error = document.querySelector(".error");
const errMsg = document.querySelector("#msg");
const border = document.querySelector(".input-container");
const errorPrompt = document.querySelectorAll(".prompt");

input.addEventListener("focus", changeBorderColor);
function changeBorderColor() {
  border.style.borderColor = "hsl(0, 74%, 74%)";
}

input.addEventListener("blur", resetBorderColor);
function resetBorderColor() {
  border.style.borderColor = "hsla(0, 36%, 70%, 0.466)";
}

btn.addEventListener("click", submit);

function submit(event) {
  event.preventDefault();

  let itemCheck = input.value.includes("@", ".");
  if (itemCheck) {
    input.value = "";
    error.style.display = "none";
    errMsg.style.display = "none";
  } else {
    error.style.display = "block";
    errMsg.style.display = "block";
    // console.log("Emmanuel");
  }
}
