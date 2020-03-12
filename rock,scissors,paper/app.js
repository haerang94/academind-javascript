const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Starting game...");
}

const person = {
  name: "sara",
  greet: function() {
    //메소드
    console.log("Hello there!");
  }
};

person.greet();
startGameBtn.addEventListener("click", startGame);
