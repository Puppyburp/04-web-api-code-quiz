var highscoreEl = document.querySelector("#highscore");
var timeEl = document.querySelector("#time");
var introH1 = document.querySelector("#intro-h1");
var introPara = document.querySelector("#intro-para");
var startBtn = document.querySelector("#start-button");
var qOneContain = document.querySelector("question-one-contain");
var firstSectionContain = document.querySelector("first-question-section");

var secondsLeft = 5;

function setStartPage() {
  // h1 quiz start page
  introH1.textContent = "Coding Quiz Challenge";
  introH1.setAttribute("style", "text-align: center;")
  document.body.appendChild(introH1);
  
  // paragraph quiz start page
  introPara.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your time allotment by 10 seconds!";
  introPara.setAttribute("style", "text-align: center; width: 50%; margin: 1em auto;")
  document.body.appendChild(introPara);
  
  // start quiz button
  startBtn = document.createElement("button");
  startBtn.textContent = "Start Quiz";
  startBtn.setAttribute("class", "btn btn-primary")
  document.body.appendChild(startBtn);
}
setStartPage();

function closeStartPage() {
  firstSectionContain.setAttribute("style", "display: none;")
}

// questions - page 1
function setFirstPage() {
  closeStartPage();
  setTime();
  // page 1 - question
  var questionOne = document.querySelector("#question-one");
  questionOne.textContent = "Which of the following is not a JavaScript data type?";
  questionOne.setAttribute("style", "text-align: center; padding: .5em; font-weight: bold;")
  document.body.appendChild(questionOne);

  // page 1 - potential answers
  var question1Btn1 = document.querySelector("#q1button-1");
  question1Btn1 = document.createElement("button");
  question1Btn1.textContent = "1: A number.";
  question1Btn1.setAttribute("class", "btn btn-primary")
  document.body.appendChild(question1Btn1);

  var question1Btn2 = document.querySelector("#q1button-2");
  question1Btn2 = document.createElement("button");
  question1Btn2.textContent = "2: A boolean.";
  question1Btn2.setAttribute("class", "btn btn-primary")
  document.body.appendChild(question1Btn2);

  var question1Btn3 = document.querySelector("#q1button-3");
  question1Btn3 = document.createElement("button");
  question1Btn3.textContent = "3: A banana.";
  question1Btn3.setAttribute("class", "btn btn-primary")
  document.body.appendChild(question1Btn3);

  var question1Btn4 = document.querySelector("#q1button-4");
  question1Btn4 = document.createElement("button");
  question1Btn4.textContent = "4: A string.";
  question1Btn4.setAttribute("class", "btn btn-primary")
  document.body.appendChild(question1Btn4);

}

startBtn.addEventListener("click", setFirstPage);


// app timer
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Quiz Over!")
    }

  }, 1000);
}

