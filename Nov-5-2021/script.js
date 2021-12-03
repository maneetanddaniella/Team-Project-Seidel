function breathingAnimation() {
  document.getElementById('breathingCircle').style.animation = "circleAnimation 12s 25";
}

const startingMinutes = 10;
let time = startingMinutes  * 60;

setInterval(updateCountdown, 1000);

function updateCountdown() {
 const minutes = Math.floor(time / 60);
 let seconds = time % 60;

 if (seconds < 10) {
    seconds = `0${seconds}`
 return `${minutes}:${seconds}`;
}

function timerAnimation() {
  document.getElementById('timerBarFill').style.animation = "barAnimation 600s 1";
}
