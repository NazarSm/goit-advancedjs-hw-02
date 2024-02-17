let intervalId;

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

startButton.addEventListener('click', () => {
  intervalId = setInterval(changeBackgroundColor, 1000);

  startButton.setAttribute('disabled', '');
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);

  startButton.removeAttribute('disabled');
});

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
