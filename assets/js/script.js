
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("begin")
var quizEl = document.getElementById("quiz")
var questionsEl = document.getElementById("questions") 

function maggotFunc() {
  confirm("Move it Maggot");
}



function quizTimer() {
  var timeLeft = 50;

  var timeInterval = setInterval(function () {
    if (timeLeft === -1) {
      clearInterval(timeInterval);
     window.confirm(
       "You have failed miserably, and dishonored your family for generations to come"
      //endgame()
        window.confirm(
        "You have failed miserably, and dishonored your family for generations to come"
        //*  endgame()
      );
     } else {
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


var qCount= 0

quizEl.textContent = `You're On Question of ${Qcount + 1} of ${qQuestions.length}`;

console.log(quizEl.textContent)

questionsEl.innerHTML="<h3>"+qQuestions[qCount].q+ " </h3>";

chA = qQuestions[qCount].a
chB = qQuestions[qCount].b
chC = qQuestions[qCount].c
chD = qQuestions[qCount].d

 questionsEl.innerHTML += "<label> <input type='radio' name='choices' value='A'>" +chA +"</label><br>";
  questionsEl.innerHTML += "<label> <input type='radio' name='choices' value='B'>" + chB +"</label><br>";
  questionsEl.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + chC + "</label><br>"
  questionsEl.innerHTML += "<label> <input type='radio' name='choices' value='D'> " + chD +"</label><br><br ";




//* . End Game function for when the time runs out

//endGame = () => {}
//* create a function that when user clicks on the answer it moves to the next question,

//* if right answer appears green
//rightAnswer = () => {}

//* and if they guessed wrong it turns red and deducts -10 seconds

//*