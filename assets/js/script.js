


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
  openerEl.classList.add("hide");//makes
  quizContainerEl.classList.remove("hide");
}

//timer countdown
function quizTimer() {
 var timeLeft = 25 
 var timeInterval = setInterval(function () {
   if (timeLeft === -1) {
     clearInterval(timeInterval);
     alert("Time has run out")
    } else {
      timerEl.textContent = `You Have-- ${timeLeft}-- Seconds Left `;
      timeLeft--;
    }
  }, 1000);
}

var quizOver = function(){
  if (qCount > questions.length - 1 || quizTimer < 0) {
    quizCounterEl.innerhtml = "<h2>Quiz Complete<h2>"
    return false
  }
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
  {
    quest: "What does JS stand for?",
    options: ["Jahova Saint", "Javascript", "Just Sayin", "Junior Salamandor"],
    answer: "JavaScript",
  },
  {
    quest: "Where have all the good people gone?",
    options: ["Bahamas", "sailing", "under a rock", "everywhere and nowhere"],
    answer: "sailing",
  },
  {
    quest: "Have you seen it?",
    options: ["yes", "no", "maybe,so", "what?"],
    answer: "maybe,so",
  },
  {
    quest: "How do.... you do?",
    options: ["Dandy", "Peachy", "A bit Peckish", "trashed"],
    answer: "Dandy",
  },
];


function showQuestion(){

    if (qCount >= questions.length || quizTimer < 0) {
     var endQuiz = document.createElement('h1')
      endQuiz.className = "end" 
      endQuiz.textContent = "Quiz Complete";
      quizEl.classList.add("hide"); 
      quizCounterEl.appendChild(endQuiz)
      return false;
    };

  
  quizCounterEl.innerHTML = `You are on number ${qCount + 1} of ${
    questions.length
  } questions`;

  question = questions[qCount].quest;
  chA = questions[qCount].options[0];
  chB = questions[qCount].options[1];
  chC = questions[qCount].options[2];
  chD = questions[qCount].options[3];

 quizEl.innerHTML = "<h2>"+question+"<h2>"


   quizEl.innerHTML = "<h2>"+question+"<h2>";
   quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers' name= 'answers'>" +chA+ "</button>";
   quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers' name='answers>"+ chB + "</button>";
   quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers' name='answers'>" +chC + "</button>";
   quizEl.innerHTML += "<button onclick= 'pickAnswer()' class='answers'  name='answers'>" +chD+  "</button>";
//*error message quizOver() is not a function
   //quizOver()
};



//var answerOptions = document.getElementsByClassName("answers");


var correctAnswer = () => {
  if (selectedAnswer === questions[qCount].answer){  //*error message: cannot read property answer of undefined
    score++;
    //*if the value matches on the option matches the answer then its correct
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
      selectedAnswer = answerOptions[i].options;  
    }
  };
  correctAnswer();
  qCount++;
  showQuestion();

}


//* local storage
var getScores = JSON.parse(localStorage.getItem("score"))


saveRecentScore = (event) =>{

event.preventDefault();

const fScore = {
  score: recentScore,
  name: initials
};

getScores.push(fScore)

};

function saveScores(score) {
  localStorage.setItem("score", JSON.stringify('score'));
}