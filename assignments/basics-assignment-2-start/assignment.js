const task3Element = document.getElementById("task-3");

function one() {
  alert("You clicked task3");
}

function two(name) {
  alert(`hi ${name}`);
}

function four(a, b, c) {
  const text = `${a}, ${b}, ${c}`;
  return text;
}

task3Element.addEventListener("click", one);

two("sara");
var concatedText = four("a", "b", "c");
alert(concatedText);
