

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

var questions
var qCount= 0 
var quizEl = document.getElementById("quiz")
var quizTitleEl= document.getElementById("quiz-name")
var question 



var questions [
  [ "What does JS stand for?", "Jahova Saint", "Javascript", "Just Sayin", "Junior Salamandor", "Javsacript" ],
  ["Where have all the good people gonehave all the good people gone", "Bahamas", "sailing","under a rock", "everywhere and nowhere", "everywhere and no where" ],
  ["Have you seen it?", "yes", "no", "maybe,so","what?", "maybe,so" ],
  ["How do.... you do?", "Dandy", "Peachy", "A bit Peckish", "trashed", "Dandy" ]
}