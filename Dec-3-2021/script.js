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
}}

function timerAnimation() {
  document.getElementById('timerBarFill').style.animation = "barAnimation 600s linear 1";
}

function changeQuestion(q) {
  if (q == 2){
  document.getElementById('question').innerHTML = "Question 2"
  }
  if (q == 3){
  document.getElementById('question').innerHTML = "Question 3"
  }
  if (q == 4){
  document.getElementById('question').innerHTML = "Question 4"
  }
  if (q == 5){
  document.getElementById('question').innerHTML = "Question 5"
  }
  if (q == 6){
  document.getElementById('question').innerHTML = "Question 6"
  }
  if (q == 7){
  document.getElementById('question').innerHTML = "Question 7"
  }
  if (q == 8){
  document.getElementById('question').innerHTML = new HTML
  }
}
