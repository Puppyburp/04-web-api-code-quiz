$(document).ready(function() {

  
// variables
var timeEl = $("#time");
var startButton = $("#start-button");


var secondsLeft = 120;



// hide first set of questions
var question1PageContain = $(".question-one-contain");

function hideQuestionPage1() {
  question1PageContain.attr("class", "hide");
  $(".question-one-contain").append(question1PageContain);
}

// hide second set of questions
var question2PageContain = $(".question-two-contain");

function hideQuestionPage2() {
  question2PageContain.attr("class", "hide");
  $(".question-two-contain").append(question2PageContain);
}

// hide result page
var resultContain = $(".result-container");

function hideResultPage() {
  resultContain.attr("class", "hide");
  $(".result-container").append(resultContain);
}

// hide highscore page
var highscoreContain = $(".highscore-page");

function hideHighscorePage() {
  highscoreContain.attr("class", "hide");
  $(".result-highscore").append(highscoreContain);
}


// when start button is clicked, hides start page and starts timer
var hideStart = $(".start-page-contain");

$("#start-button").click(function(e) {
  e.preventDefault();
  hideStart.attr("class", "hide");
  $(".start-page-contain").append(hideStart);
  showQuestionPage1();
  setTime();
});

// app timer
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    $("#time").text("Time: " + secondsLeft);
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Quiz is over!");
    }

  }, 1000);
}


// var count = 0;
// var incrementEl = document.querySelector("#increment");
// var decrementEl = document.querySelector("#decrement");
// var countEl = document.querySelector("#count");

// function setCounterText() {
//   countEl.textContent = count;
// }

// incrementEl.addEventListener("click", function() {
//   count++;
//   setCounterText();
// });


var counter = 0;
var count = document.querySelector("#highscore-span");

function setCounter() {
count.textContent = counter;
}

// question 1 answer

$("#q1button-3").click(function(e) {
  e.preventDefault();
  $("#result-message-one").text("Yep! You got it!");
  counter++
  setCounter()

  setTimeout(function(){ 
    showQuestionPage2();
    hideQuestionPage1();
  }, 2000);
});

$("#q1button-1").click(function(e) {
  e.preventDefault();
  $("#result-message-one").text("Sorry, that answer is incorrect. 10 seconds deducted from game");
  secondsLeft = secondsLeft - 10;

  setTimeout(function(){ 
    showQuestionPage2();
    hideQuestionPage1();
  }, 2000);
});

$("#q1button-2").click(function(e) {
  e.preventDefault();
  $("#result-message-one").text("Sorry, that answer is incorrect. 10 seconds deducted from game");
  secondsLeft = secondsLeft - 10;

  setTimeout(function(){ 
    showQuestionPage2();
    hideQuestionPage1();
  }, 2000);
});

$("#q1button-4").click(function(e) {
  e.preventDefault();
  $("#result-message-one").text("Sorry, that answer is incorrect. 10 seconds deducted from game");
  secondsLeft = secondsLeft - 10;
  
  setTimeout(function(){ 
    showQuestionPage2();
    hideQuestionPage1();
  }, 2000);
});



// question 2 answer
$("#q2button-1").click(function(e) {
  e.preventDefault();
  $("#result-message-two").text("Yep! You got it!");
  counter++
  setCounter()

  setTimeout(function(){ 
    hideQuestionPage2();
    showResultPage();
  }, 2000);
});

$("#q2button-2").click(function(e) {
  e.preventDefault();
  secondsLeft = secondsLeft - 10;
  $("#result-message-two").text("Sorry, that answer is incorrect. 10 seconds deducted from game");
  
  setTimeout(function(){ 
    hideQuestionPage2();
    showResultPage();
  }, 2000);
});

$("#q2button-3").click(function(e) {
  e.preventDefault();
  secondsLeft = secondsLeft - 10;
  $("#result-message-two").text("Sorry, that answer is incorrect. 10 seconds deducted from game");

  setTimeout(function(){ 
    showResultPage();
    hideQuestionPage2();
  }, 2000);
});

$("#q2button-4").click(function(e) {
  e.preventDefault();
  secondsLeft = secondsLeft - 10;
  $("#result-message-two").text("Sorry, that answer is incorrect. 10 seconds deducted from game");

  setTimeout(function(){ 
    showResultPage();
    hideQuestionPage2();
  }, 2000);
});



$("#initial-submit").click(function(e) {
  e.preventDefault();
  showResultPage();
});


$("#highscore").click(function(e) {
  e.preventDefault();
  
  hideStart.attr("class", "hide");
  showHighscorePage();
  hideQuestionPage1();
  hideQuestionPage2();
  hideResultPage();

});


// high score page ------------------

// clear button
$("#clear-button").click(function(e) {
  e.preventDefault();
  $("#result-p").empty();

});

// go back button
$("#go-back-btn").click(function(e) {
  e.preventDefault();
  location.reload();

});    
 
// score final
var highscoreFinal = $("#highscore-span");
highscoreFinal.text(counter);
$("#highscore-span").append(highscoreFinal);


var highscoreFinal = $("#highscore-final");
highscoreFinal.text(counter);
$("#highscore-final").append(highscoreFinal);



// var counter = document.querySelector("highscore-span");
// var count = JSON.parse(localStorage.getItem("count"));
//   localStorage.setItem("count", JSON.stringify(count));
// function initials {
// var inputInitials = $("#initials");

// localStorage.setItem("email", email);
// }



// show pages ---------------

// show second set of questions
var question1PageContain = $(".question-one-contain");

function showQuestionPage1() {
  question1PageContain.attr("class", "show");
  $(".question-one-contain").append(question1PageContain);
};

// show second set of questions
var question2PageContain = $(".question-two-contain");

function showQuestionPage2() {
  question2PageContain.attr("class", "show");
  $(".question-two-contain").append(question2PageContain);
};

// show result page
var resultContain = $(".result-container");

function showResultPage() {
  resultContain.attr("class", "show");
  $(".result-container").append(resultContain);
};

// show highscore page
var highscoreContain = $(".highscore-page");

function showHighscorePage() {
  highscoreContain.attr("class", "show");
  $(".result-highscore").append(highscoreContain);
};


});

