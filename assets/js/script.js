timeIsRunning = () => {
  var timeLeft = 50;

  var timeInterval = setInterval(function () {
    if (sec < 0) {
      clearInterval(timeInterval);
      //display meaasge 'Time has ran out'
    } else {
      timerEl.textcontent = `Faster, you only have: ${timeLeft} left!`;
      time--;
    }
  }, 1000);
};

var questions = [
  {
    q: "Inside which HTML element do we put the JavaScript?",
    choices: {
      a: "<script>",
      b: "<scripting>",
      c: "<link>",
      d: "<js>",
    },
    answer: "a",
  },

  {
    q: "Which is the correct syntax for an alert?",
    choices: {
      a: "",
      b: " hhg",
      c: "window.alert()",
      d: "haaha",
    },
    answer: "c",
  },

  {
    q: "Where is the correct place to insert a JavaScript?",
    choices: {
      a: "the <body> section",
      b: "the <head> section",
      c: "after the <html> section",
      d: " anywhere works",
    },
    answer: "a",
  },

  {
    q: "How do you call a function named 'myFunction' ?",
    choices: {
      a: "call myFunction()",
      b: " call function myFunction()",
      c: "myfunction()",
      d: "Here myFunction(), Come on boy!",
    },
    answer: "c",
  },
];
