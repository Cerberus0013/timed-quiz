


//*POA 
//*1. create questions
//*list the questions using inner html and accessing them using by calling them in multi-dim array
//* create a counter
//*input choices using multi dim using inner html
//*
//*create a counter to keep the count going
//*if/else for correct answers
//*timer put in, connected to the correct or wrong answers



var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");
var openerEl = document.getElementById("starter");

//start buttons for quiz
startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", quizTimer)
window.addEventListener("load", showQuestion);

//make the start button disappear, and the questions appear
function startQuiz() {
  openerEl.classList.add("hide");
 quizContainerEl.classList.remove("hide") 
}

//timer countdown
function quizTimer() {
 var timeLeft = 25 
 var timeInterval = setInterval(function () {
   if (timeLeft === -1) {
     clearInterval(timeInterval);
     quizOver();
    } else {
      timerEl.textContent = `You Have-- ${timeLeft}-- Seconds Left `;
      timeLeft--;
    }
  }, 1000);
}

var quizOver = function(){
  if (qCount > questions.length - 1 || quizTimer < 0) {
    quizCounterEl.innerhtml = "<h2>Quiz Complete<h2>"
  }
  return false
}

var quizContainerEl = document.getElementById("quiz-cont")
var qCount= 0 
var quizEl = document.getElementById("quiz")
var quizCounterEl= document.getElementById("counter")
var score = 0
var question
var selectedAnswer
var answerOptions 
var chA, chB, chC, chD


//simple arrays
const questions = [
 [ "What does JS stand for?", "Jahova Saint", "Javascript", "Just Sayin", "Junior Salamandor", "B" ],
  ["Where have all the good people gone?", "Bahamas", "sailing","under a rock", "everywhere and nowhere", "D" ],
  ["Have you seen it?", "yes", "no", "maybe,so","what?", "C" ],
  ["How do.... you do?", "Dandy", "Peachy", "A bit Peckish", "trashed", "A" ]
]


function showQuestion(quizOver){


  quizCounterEl.innerHTML = `You are on number ${qCount + 1} of ${
    questions.length
  } questions`;

  question = questions[qCount][0];
  chA = questions[qCount][1];
  chB = questions[qCount][2];
  chC = questions[qCount][3];
  chD = questions[qCount][4];

 quizEl.innerHTML = "<h2>"+question+"<h2>"


   quizEl.innerHTML = "<h2>"+question+"<h2>";
   quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers' name= 'answers' value='A'>" +chA+ "</button>";
   quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers' name='answers  value='B'>"+ chB + "</button>";
   quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers' name='answers' value='C'>" +chC + "</button>";
   quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers'  name='answers' value='D'>" +chD+  "</button>";
//*error message quizOver() is not a function
   quizOver()
};



//var answerOptions = document.getElementsByClassName("answers");


var correctAnswer = () => {
  if (selectedAnswer === questions[qCount][5]){  //*error message: cannot read property 5 of undefined
    score++;
    //*if the value matches on the option matches the the 6th element in the Array, then its correct
  } else {
   // timeLeft - 7
    //*reduce timer amount by 7, code is not correct but is s place holder 
  }
}

//var selectedAnswer= answerOptions[i].value;

var pickAnswer = () =>{       

  var answerOptions = document.getElementsByClassName("answers");

  for (var i = 0; i < answerOptions.length; i++) {
    if (answerOptions[i].onclick) {
      selectedAnswer
    }
  };
  correctAnswer();
  qCount++;
  showQuestion();

}

var saveScores = function (score){
  localStorage.setItem("score", JSON.stringify(score))
}

