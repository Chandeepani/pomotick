let time = 25 * 60;
let interval;
const timerDisplay = document.getElementById('timer');

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;
}

function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(interval);
        interval = null;
        alert('Time’s up!');
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  time = 25 * 60;
  updateDisplay();
}

updateDisplay();