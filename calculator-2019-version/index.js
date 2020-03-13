

const display = document.getElementById("display");
let currentValue = "";

function buttonClick(event) {
  const btn = event.target;
  if (btn.value === undefined) return;
  
  if (isNaN(btn.value) === true) {
    if (btn.value === "=") {
      display.value = eval(currentValue);
      currentValue = String(display.value);
      //currentValue = "";
    } else if (btn.value === "C") {
      currentValue = "";
      display.value = 0;
    } else {
      currentValue += btn.value;
    }
  } else {
    if (currentValue.includes("*")) {
      currentValue += String(btn.value);
      display.value = eval(currentValue);
      currentValue = String(display.value);
    } else {
      if (currentValue === "") display.value = btn.value;
      else if (!isNaN(currentValue)) display.value += btn.value;
      else display.value = btn.value;
      currentValue += String(btn.value);
    }
  }
  console.log(currentValue);
}

document.addEventListener("click", buttonClick);

function init() {
  display.value = 0;
}

init();
