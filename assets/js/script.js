


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


startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", quizTimer)
window.addEventListener("load", showQuestion);

function startQuiz() {
  openerEl.classList.add("hide");
 quizContainerEl.classList.remove("hide") 
}

function quizTimer() {
 var timeLeft = 50 
  var timeInterval = setInterval(function () {
    if (timeLeft === -1) {
      clearInterval(timeInterval);
      quizOver();
    } else {
      timerEl.textContent = `You Have---- ${timeLeft}---- Seconds Left `;
      timeLeft--;
    }
  }, 1000);
}


var quizContainerEl = document.getElementById("quiz-cont")
var qCount= 0 
var quizEl = document.getElementById("quiz")
var quizCounterEl= document.getElementById("counter")
var score = 0
var question
var answer 
var chA, chB, chC, chD



var questions = [
  [ "What does JS stand for?", "Jahova Saint", "Javascript", "Just Sayin", "Junior Salamandor", "B" ],
  ["Where have all the good people gone?", "Bahamas", "sailing","under a rock", "everywhere and nowhere", "D" ],
  ["Have you seen it?", "yes", "no", "maybe,so","what?", "C" ],
  ["How do.... you do?", "Dandy", "Peachy", "A bit Peckish", "trashed", "A" ]
]




function showQuestion(){ 

quizOver()

quizCounterEl.innerHTML = `You are on number ${qCount + 1} of ${questions.length} questions`;

question = questions[qCount][0];
chA = questions[qCount][1];
chB = questions[qCount][2];
chC = questions[qCount][3];
chD = questions[qCount][4];


quizEl.innerHTML = "<h2>"+question+"<h2>";
quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers' value='A'>" +chA+ "</button>";
quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers' value='B'>"+ chB + "</button>";
quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers' value='C'>" +chC + "</button>";
quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers' value= 'D'>" +chD+  "</button>";

};

var correctAnswer = function(){

}


var pickAnswer = function() {
  
  var answer = document.getElementsByClassName("answers")
  for(var i = 0; i < answer.length; i++ ){
    if (answer[i].onclick){
      answer = answer[i].value;
    }
  }
  if(answer === questions[qCount][5]){
    score++
  }else{
    //* put in negative time 
  }
  qCount++
  showQuestion()
}

var quizOver = function(){
  if (qCount >= questions.length || quizTimer < 0) {
    quizCounterEl.innerhtml = "Quiz Complete"
  }
  return false
}

var saveScores = function (){
  localStorage.setItem("score", score)
}

