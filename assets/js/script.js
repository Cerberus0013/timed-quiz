

//* new thought why the hell am I creating buttons just to replace them, I'll just append them into a div and wont have to waste time with the other more complicated forEach iteration, which for the lif of me I can't seem to get to work.

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


function quizTimer() {
  var timeLeft = 50;
  
  var timeInterval = setInterval(function () {
    if (timeLeft === -1) {
      clearInterval(timeInterval);
      displayMessage();
    } else {
      timerEl.textContent = `You Have---- ${timeLeft}---- Seconds Left `;
      timeLeft--;
    }
  }, 1000);
}

startBtn.onclick = quizTimer;



var qCount= 0 
var quizEl = document.getElementById("quiz")
var quizCounterEl= document.getElementById("counter")
var question
var answer 
var chA
var chB
var chC
var chD



var questions = [
  [ "What does JS stand for?", "Jahova Saint", "Javascript", "Just Sayin", "Junior Salamandor", "B" ],
  ["Where have all the good people gonehave all the good people gone", "Bahamas", "sailing","under a rock", "everywhere and nowhere", "D" ],
  ["Have you seen it?", "yes", "no", "maybe,so","what?", "C" ],
  ["How do.... you do?", "Dandy", "Peachy", "A bit Peckish", "trashed", "A" ]
]


function showQuestion(){ 


quizCounterEl.innerHTML = `You are on number ${qCount + 1} of ${questions.length} questions`;

question = questions[qCount][0];
chA = questions[qCount][1];
chB = questions[qCount][2];
chC = questions[qCount][3];
chD = questions[qCount][4];


quizEl.innerHTML = "<h2>"+question+"<h2>";
quizEl.innerHTML += "<button onclick= 'correctAnswer()' name='answers' value='A'>" +chA+ "</button>";
quizEl.innerHTML += "<button onclick= 'correctAnswer()' name='answers' value='A'>"+ chB + "</button>";
quizEl.innerHTML += "<button onclick= 'correctAnswer()' name='answers' value='A'>" +chC + "</button>";
quizEl.innerHTML += "<button onclick= 'correctAnswer()' name='answers' value='A'>" +chD+  "</button>";

};


function correctAnswer (){
  answer = document.getElementById("answers")
  for(var i = 0; i<answer.length; i++ ){
    if (answer[i].onclick){
      answer = answers[i].value;
    }
  }
  if(choice !== questions[qCount][5]){
   timerEl.textContent - 5
  }
  qCount++
  showQuestion()
}



window.addEventListener("load", showQuestion )