let timer;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

function setTimer() {
    const inputMinutes = parseInt(document.getElementById('input-minutes').value);
    const inputSeconds = parseInt(document.getElementById('input-seconds').value);

    if (!isNaN(inputMinutes) && inputMinutes >= 0) {
        minutes = inputMinutes;
    }

    if (!isNaN(inputSeconds) && inputSeconds >= 0 && inputSeconds < 60) {
        seconds = inputSeconds;
    }

    updateDisplay();
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        stopTimer();
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('countdown-minutes').textContent = padTime(minutes);
    document.getElementById('countdown-seconds').textContent = padTime(seconds);
}

function padTime(time) {
    return time < 10 ? '0' + time : time;
}

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('stop-btn').addEventListener('click', stopTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
document.getElementById('set-time-btn').addEventListener('click', setTimer);

updateDisplay();
