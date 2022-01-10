
// TIMER -----------------------------------------------
const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEL = document.getElementById("countdown");

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10){
    seconds = '0' + seconds;
  }
  else{
    seconds = seconds;
  }

  countdownEL.innerHTML = `${minutes}:${seconds}`;
  time--;

  if (time<0){
    time = 0;
  }
}

function timerAnimation() {
  document.getElementById('timerBarFill').style.animation = "barAnimation 600s linear 1";
}

function timer() {
  timerAnimation();
  setInterval(updateCountdown, 1000);
}

// BREATHING EXERCISE ----------------------------------

function breathingAnimation() {
  document.getElementById('breathingCircle').style.animation = "circleAnimation 12s 25";
}

// CHECK UP ----------------------------------

var question = 1;
score = 0;

function checkUp(value){
  question += 1;
  score += value;
  console.log(score);
  changeQuestion(question);
}

function changeQuestion(q) {
  if (q == 2){
  document.getElementById('question').innerHTML = "Stress Level";
  document.getElementById('lowscore_text').innerHTML = "Stressed";
  document.getElementById('highscore_text').innerHTML = "Calm";
  }
  if (q == 3){
  document.getElementById('question').innerHTML = "Energy";
  document.getElementById('lowscore_text').innerHTML = "Exhausted";
  document.getElementById('highscore_text').innerHTML = "Energized";
  }
  if (q == 4){
  document.getElementById('question').innerHTML = "Motivation";
  document.getElementById('lowscore_text').innerHTML = "Unmotivated";
  document.getElementById('highscore_text').innerHTML = "Motivated";
  }
  if (q == 5){
  document.getElementById('question').innerHTML = "Self Esteem";
  document.getElementById('lowscore_text').innerHTML = "Poor";
  document.getElementById('highscore_text').innerHTML = "Great";
  }
  if (q == 6){
  document.getElementById('question').innerHTML = "Focus";
  document.getElementById('lowscore_text').innerHTML = "Distracted";
  document.getElementById('highscore_text').innerHTML = "Focused";
  }
  if (q == 7){
  document.getElementById('question').innerHTML = "Social";
  document.getElementById('lowscore_text').innerHTML = "Withdrawn";
  document.getElementById('highscore_text').innerHTML = "Social";
  }
  if (q == 8){
  window.location.href = "score.html";
  }
}

function showScore(){
  console.log(score);
  let s = score.toString();
  document.getElementById('score').innerHTML = "Your Score is: " + s; 
  if (score <= 16){
    document.getElementById('recommend_link').innerHTML = "Breathing Exercises";
    document.getElementById('recommend_link').setAttribute("href","breathing.html");
  }
  if (score >= 17 && score <= 27){
    document.getElementById('recommend_link').innerHTML = "Screen Timer";
    document.getElementById('recommend_link').setAttribute("href","timer.html");
  }
  if (score >= 28){
    document.getElementById('recommend').innerHTML = "Nice! You may choose any of the resources on the website ";
    document.getElementById('recommend_link').innerHTML = "here";
    document.getElementById('recommend_link').setAttribute("href","explore.html");
  }
}
