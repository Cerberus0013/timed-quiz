


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
var timeLeft = 25; 
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
function quizTimer(timeLeft) {
var timeLeft = 25;  
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
var qCount = 0
var aCount = 0
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
    answer: "Javascript",
  },
  {
    quest: "Which is a back end language?",
    options: ["HTML", "CSS", "Node.js", "React"],
    answer: "Node.js",
  },
  {
    quest: "What does HTML stand for?",
    options: [
      "Harry Tomatoes Mango Lollipop",
      "Hyper-text Millenial Language",
      "Hey Tom its Me Larry",
      "Hypertext Markup Language",
    ],
    answer: "Hypertext Markup Language",
  },
  {
    quest: "How do you connect a CSS page to an HTML page ?",
    options: [
      "anchor tags",
      "link elemnet",
      "You connect them through the Javascript",
      "script element",
    ],
    answer:"link elemnet" ,
  },
];

function quizOver(){
  
 quizCounterEl.innerHTML = `You are on number ${qCount + 1} of ${questions.length} questions`;

      var yourScore = document.createElement("h1");
        yourScore.className = "quizScore";
        yourScore.textContent = `You answered ${score} out of ${qCount} correctly`;
        quizCounterEl.appendChild(yourScore);
 
     var endQuiz = document.createElement('h1')
      endQuiz.className = "end" 
      endQuiz.textContent = "Quiz Complete";
      quizEl.classList.add("hide"); 
      quizCounterEl.appendChild(endQuiz)
      return false;
    }

function showQuestion(){

  renderQuestions()

    // if (qCount >= questions.length || quizTimer < 0) {

    //   var yourScore = document.createElement("h1");
    //     yourScore.className = "quizScore";
    //     yourScore.textContent = `You answered ${score} out of ${qCount} correctly`;
    //     quizCounterEl.appendChild(yourScore);
 
    //  var endQuiz = document.createElement('h1')
    //   endQuiz.className = "end" 
    //   endQuiz.textContent = "Quiz Complete";
    //   quizEl.classList.add("hide"); 
    //   quizCounterEl.appendChild(endQuiz)
    //   return false;
    // };

  
 

  // question = questions[qCount].quest;
  // chA = questions[qCount].options[0];
  // chB = questions[qCount].options[1];
  // chC = questions[qCount].options[2];
  // chD = questions[qCount].options[3];



// quizEl.innerHTML = "<h2>" + question + "<h2>";
// quizEl.innerHTML +="<button onclick= 'pickAnswer()' id='A' class='answers' name= 'answers' value = 'A'>" +chA+"</button>";
// quizEl.innerHTML +="<button onclick= 'pickAnswer()' id='B' class='answers' name='answers' value = 'B'>" +chB+ "</button>";
// quizEl.innerHTML +="<button onclick= 'pickAnswer()' id='C' class='answers' name='answers' value = 'C' >" +chC+ "</button>";
// quizEl.innerHTML +="<button onclick= 'pickAnswer()' id='D' class='answers'  name='answers' value = 'D'>" +chD+  "</button>";
// //for whatever reason value='B' allows all four questions to appear
};

//*I want to pull in the selected answer with answer options, find its value and then compare it with the questions.answer value to determine if its correct.

function renderQuestions(){
quizCounterEl.innerHTML = `You are on number ${qCount + 1} of ${
 questions.length } questions`;

  var currentQuestion = questions[qCount];
  var qTitle = document.getElementById('question-title');
  qTitle.textContent = currentQuestion.quest
  quizEl.innerHTML= ""
  currentQuestion.options.forEach(function(option){
   var btnNode=document.createElement('button')
   btnNode.setAttribute('class', 'answers')
   btnNode.setAttribute('value', option )
   btnNode.textContent = option
  btnNode.onclick = checkAnswer;
  quizEl.appendChild(btnNode);
  })
}

function checkAnswer(){ 
  if (this.value === questions[qCount].answer) {
    score++
   console.log(score) 
  } else {
    timeLeft= timeLeft - 7; 
  }
  
  qCount++
  console.log(qCount)
if (qCount >= questions.length){
  quizOver() 
} else{
  renderQuestions()
}

}

  


// var btnEl = document.querySelectorAll("buttton")
// console.log(btnEl)
// btnEl.forEach(answer => {
//   answer.addEventListener('click', event => {
//     console.log(event.target.value)
//   })
// })

var pickAnswer = () =>{      
  
 // var userAnswer = document
 var correctAnswer= questions[qCount].answer
 console.log(correctAnswer) 
  //var answerOptions = document.querySelector(`#${questions[qCount]}`).value; 
  
  console.log(value)

  if (this.value === correctAnswer) {
   console.log('correct') 
  } else{
    console.log('wrong')
  }
  
  // for (var i = 0; i < answerOptions; i++) {
  //   if (answerOptions[i].onclick) {
    
  //   const  selectedAnswer = answerOptions.value;//*suppose to capture the choice made and its value, which one did they select?
      
  //   }
  // };
  //correctAnswer();
  qCount++;
  aCount++
  showQuestion();
  
}


// var correctAnswer = (selectedAnswer) => {
//   if (questions[qCount].answer === selectedAnswer){  //* variable "selectAnswer" is showing as not defined, suppose to take what they slected and compare it to the correct answer.
//     score++;

//     console.log(selectedAnswer)
//     console.log(score)
//     //*if the value matches on the option matches the answer then its correct
//   } else {
//   //wrongAnswer()
//     //*reduce timer amount by 7, code is not correct but is s place holder 
//   }
// }

var wrongAnswer = () => {
timeLeft = timeLeft - 7;
}


//* local storage not working, need to get the correctAnswer to work first
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