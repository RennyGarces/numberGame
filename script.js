"use strict";
function modifyPage(inputClass, textmessage) {
  document.querySelector(inputClass).textContent = textmessage;
}
function modifyInput(inputClass, textmessage) {
  document.querySelector(inputClass).value = textmessage;
}
function modifyValue(inputClass, textmessage) {
  document.querySelector(inputClass).style.width = textmessage;
}
let scoreUser = 0;
let opportunities = 10;
let secretNumber = Math.trunc(Math.random() * 50) + 1;
let highscore = [0];

const calculateSum = (arr) => {
  return arr.reduce((total, current) => {
    return total + current;
  }, 0);
};

document.querySelector(".again").addEventListener("click", function () {
  opportunities = 10;
  modifyValue(".progress", "100%");
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  modifyPage(".attempts", "Attempts 💰 " + 10);
  document.querySelector("body").style.background = "#9f82f8";
  modifyPage(".show-message", "Let's start Again!🤩");
  modifyPage(".secret", "?");
  modifyInput(".input", "");
});

document.querySelector(".push").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);

  if (!guess || guess < 0) {
    modifyPage(".show-message", "Invalid Number 👎");
  } else if (guess === secretNumber) {
    highscore.push(opportunities);

    scoreUser = calculateSum(highscore);

    modifyInput(".input", "");
    modifyPage(".attempts", "I'm proud of you! 🙂");
    modifyPage(".show-message", "You're the winner!🏆 🥳");
    modifyPage(".secret", secretNumber);
    modifyPage(".highscore", `Highscore: 💰 ${scoreUser}`);
    document.querySelector("body").style.background = "#51cf66";
  } else if (guess !== secretNumber) {
    guess > secretNumber
      ? modifyPage(".show-message", "high number! 🔼")
      : modifyPage(".show-message", "low number! 🔽");
    opportunities--;

    modifyPage(".attempts", "Attempts 💰" + `Only: ${opportunities}`);
    modifyValue(".progress", `${opportunities * opportunities}%`);

    if (opportunities <= 0) {
      modifyPage(".show-message", "You loss the game!❌");
      modifyPage(".attempts", "Play Again!🤾‍♂️");
      document.querySelector(".progress").style.width = `${0}%`;
      secretNumber = 0;
    }
  }
});
