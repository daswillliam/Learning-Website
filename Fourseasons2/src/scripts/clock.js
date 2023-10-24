const padZero = (time) => {
    while (time.length < 2) {
        time = '0' + time;
    }
    return time;
}

function updateClock() {
const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

function formatMs() { const now = new Date(); const _t = Math.round(now.getMilliseconds() / 100); if (_t === 10) return 0; return _t;  }

const milliSeconds = String(formatMs())


const formattedTime = `${hours}:${minutes}:${seconds},${milliSeconds}`;
document.getElementById('time').textContent = formattedTime;
}

// Update the clock immediately upon loading
updateClock();

// Update the clock every second
setInterval(updateClock, 50);
