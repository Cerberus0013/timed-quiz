
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("begin")
var quizEl = document.getElementById("quiz")
var questionsEl = document.getElementById("questions") 




function quizTimer() {
  var timeLeft = 50;

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


var qQuestions = [
  {
    q: "Inside which HTML element do we put the JavaScript?",
      a: "<script>",
      b: "<scripting>",
      c: "<link>",
      d: "<js>",
    answer: "a",
  },

  {
    q: "Which is the correct syntax for an alert?",
      a: "",
      b: " hhg",
      c: "window.alert()",
      d: "haaha",
    answer: "c",
  },

  {
    q: "Where is the correct place to insert a JavaScript?",
      a: "the <body> section",
      b: "the <head> section",
      c: "after the <html> section",
      d: " anywhere works",
    answer: "a",
  },

  {
    q: "How do you call a function named 'myFunction' ?",
      a: "call myFunction()",
      b: " call function myFunction()",
      c: "myfunction()",
      d: "Here myFunction(), Come on boy!",
    answer: "c",
  },
];


//question counte
var qCount= 0
var correctAnswer = 0 

function viewQuestions() {

if(qCount >= qQuestions.length){

  quizEl.textContent = "Quiz Completed"

  questionsEl.textContent = `You answered ${correctAnswer} out of ${qCount} correclty`
}


quizEl.textContent = `You're On Question of ${qCount + 1} of ${qQuestions.length}`;



questionsEl.innerHTML="<h3>"+qQuestions[qCount].q+ " </h3>";

// acees question in my array

chA = qQuestions[qCount].a
chB = qQuestions[qCount].b
chC = qQuestions[qCount].c
chD = qQuestions[qCount].d

//displaying questions, had to use ""+ concat, for some reason the``$ wouldn't work

  questionsEl.innerHTML += "<label> <input type='radio' name='choices' value='A'>" +chA +"</label><br>";
  questionsEl.innerHTML += "<label> <input type='radio' name='choices' value='B'>" + chB +"</label><br>";
  questionsEl.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + chC + "</label><br>"
  questionsEl.innerHTML += "<label> <input type='radio' name='choices' value='D'> " + chD +"</label><br><br ";

};
function checkAnswer() {
  //usng by name because its a looping array, selected all choices instances, i think
  choices = document.querySelectorAll("choices");
  for (var i = 0; i < choices.length; i++) {
    //iterate over all 4 options
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  // checks ifthe answer chosen matches the answer 
  if (choice === qQuestions[qcount].answer) {
   quizQuestions[qCount].answer = quizQuestions[qCount].answer.fontcolor("green") 

    correct++;
  }
  // changes qcount of which question the user is on
  qCount++;
 viewQuestions();
}



window.addEventListener("load", viewQuestions);




//* . End Game function for when the time runs out

//endGame = () => {}
//* create a function that when user clicks on the answer it moves to the next question,

//* if right answer appears green
//rightAnswer = () => {}

//* and if they guessed wrong it turns red and deducts -10 seconds


