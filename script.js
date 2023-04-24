"use strict";
function modifyPage(inputClass, textmessage) {
  document.querySelector(inputClass).textContent = textmessage;
}
function modifyValue(inputClass, textmessage) {
  document.querySelector(inputClass).style.width = textmessage;
}

let opportunities = 10;
let secretNumber = Math.trunc(Math.random() * 50) + 1;

console.log(secretNumber + " first secret");
document.querySelector(".again").addEventListener("click", function () {
  modifyValue(".progress", "100%");
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  console.log(secretNumber + " this is the secret");
  modifyPage(".attempts", "Attempts 💰 " + 10);
  document.querySelector("body").style.background = "#9f82f8";
  modifyPage(".show-message", "Let's start Again!🤩");
  modifyPage(".secret", "?");
});

document.querySelector(".push").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);

  if (!guess || guess < 0) {
    modifyPage(".show-message", "Invalid Number 👎");
  } else if (guess === secretNumber) {
    modifyPage(".attempts", "I'm proud of you! 🙂");
    modifyPage(".show-message", "You're the winner!🏆 🥳");
    modifyPage(".secret", secretNumber);
    // modifyPage(".highscore", `Highscore: ${highscore}`);
    document.querySelector("body").style.background = "#51cf66";
  } else if (guess !== secretNumber) {
    guess > secretNumber
      ? modifyPage(".show-message", "high number!⬇")
      : modifyPage(".show-message", "low number!⬆");
    opportunities--;

    modifyPage(".attempts", "Attempts 💰" + `Only: ${opportunities}`);
    modifyValue(".progress", `${opportunities * opportunities}%`);
    console.log(opportunities + " this is oportunities ");
    if (opportunities <= 0) {
      modifyPage(".show-message", "You loss the game!❌");
      modifyPage(".attempts", "Play Again!🤾‍♂️");
      document.querySelector(".progress").style.width = `${0}%`;
      secretNumber = 0;
    }
  }
});
