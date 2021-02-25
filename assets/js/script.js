
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start-btn")
var quizEl = document.getElementById("quiz")
var questionsContainerEl = document.getElementById("quizContainer")
var questionEl = document.getElementById("question-title")
 var choicesEl = document.getElementById('choice-btn')


//*click events
startBtn.addEventListener('click', startQuiz)


//*end
//*global variables
var qCount = 0;



//*end
//*functions
function startQuiz(){
 
startBtn.classList.add('hide') 
questionsContainerEl.classList.remove('hide')
nextQuestion() 
}



//*need to rewrite questions, they are not working

function viewQuestions(qQuestions) {

  questionEl.innertex = qQuestions.question
  qQuestions.choices.forEach(choices => {
    var button = document.createElement('button')
    button.innerText = choices.a
    button.classList.add('btn')
    if(choices.correct){
    button.dataset.correct = choices.correct
  };
    button.addEventListener('click',answerChoice )
  choicesEl.appendChild(button)
  
 })
}

function nextQuestion() {


}

function answerChoice(){

}

function quizTimer() {
  var timeLeft = 40;

  var timeInterval = setInterval(function () {
    if (timeLeft === -1) {
      clearInterval(timeInterval);
     window.confirm(
       "You have failed miserably, and dishonored your family for generations to come"
      //endgame()
        //*  endgame()
      );
    }else{
  timerEl.textContent = `Move Faster, You Have---- ${timeLeft}---- Seconds Left `;
      timeLeft--;
    }
  }, 1000);
}

startBtn.onclick = quizTimer;


const qQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?", 
    a: "<script>",
    b: "<scripting>",
    c: "<link>",
    d: "<js>",
    answer: "a",
  },

  {
    question: "Which is the correct syntax for an alert?",
    a: "",
    b: " hhg",
    c: "window.alert()",
    d: "haaha",
    answer: "c",
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "the <body> section",
      b: "the <head> section",
      c: "after the <html> section",
      d: " anywhere works",
    answer: "a",
  },

  // {
  //   question: "How do you call a function named 'myFunction' ?",
  //   choices: [  
  //    { a: "call myFunction()",}
  //    { b: " call function myFunction()",}
  //    { c: "myfunction()"},
  //    { d: "Here myFunction(), Come on boy!"},
  //   ]
  //   answer: "c",
  // },
];


// var qCount = 0
// var correctAnswer = 0 

// function viewQuestions() {

// if(qCount >= qQuestions.length){

//   quizEl.textContent = "Quiz Completed"
//   questionsEl.textContent = `You answered ${correctAnswer} out of ${qCount} correclty`

// qCount = 0
// correctAnswer = 0

// return false;
// }


// quizEl.textContent = `You're On Question of ${qCount + 1} of ${qQuestions.length}`;



// var question = qQuestions[qCount].q

// // acees question in my array
// var  chA = qQuestions[qCount].a;
// var  chB = qQuestions[qCount].b;
// var  chC = qQuestions[qCount].c;
// var  chD = qQuestions[qCount].d;

// questionsEl.innerHTML = "<h3>" + question + " </h3>";
// //displaying questions, had to use ""+ concat, for some reason the``$ wouldn't work

// }


// function checkAnswer() {
//   //usng by name because its a looping array, selected all choices instances, i think
//   choices = document.getElementsByName("choices");
//   for (var i = 0; i < choices.length; i++) {
//     //iterate over all 4 options
//     if (choices[i].checked) {
//       choice = choices[i].value;
//     }
//   }
//   // checks ifthe answer chosen matches the answer 
//   if (choice === qQuestions[qcount].answer) {
//    quizQuestions[qCount].answer = quizQuestions[qCount].answer.fontcolor("green") 

//     correct++;
//   }
//   // changes qcount of which question the user is on
//   qCount++;
//  viewQuestions();
// }



// window.addEventListener("load", viewQuestions);




// //* . End Game function for when the time runs out

// //endGame = () => {}
// //* create a function that when user clicks on the answer it moves to the next question,

// //* if right answer appears green
// //rightAnswer = () => {}

// //* and if they guessed wrong it turns red and deducts -10 seconds


