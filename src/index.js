const casino = document.querySelector("#casino");
const setting = document.querySelector("#setting");
const conjecture = document.querySelector("#conjecture");

function game(event) {
  event.preventDefault();
  const comSetting = parseInt(setting.value);
  const userConjecture = parseInt(conjecture.value);
  const correct = Math.floor(Math.random() * comSetting + 1);

  const displayEl = document.querySelector("#display");
  const resultEl = document.querySelector("#result");

  if (userConjecture > comSetting || userConjecture < 0) {
    displayEl.innerText = "Please put in a number within the range.";
  } else if (userConjecture === correct) {
    displayEl.innerText = `You chose: ${userConjecture}, the machine chose: ${correct}.`;
    resultEl.innerText = "You Win!";
  } else {
    displayEl.innerText = `You chose: ${userConjecture}, the machine chose: ${correct}.`;
    resultEl.innerText = "You Lost!";
  }
}

casino.addEventListener("submit", game);
