
var quizContainer=document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

const myQuestions = [
    {
     question1:"Who invented Javascript?",
      answers: {
          a:"Douglas Crockford",
          b: "Sheryl Sanberg",
         c: "Brendan Eich",
         d:"Mark Zuckerberg"
     },
      correctAnswer: "c"
      },
      {
          question2: "Inside which HTML element do we put the JavaScript?",
         answers: { 
         a: "<JS>",
          b: "<script>",
         c: "<javascript>",
          d:"<scripting>"
          },
      correctAnswer: "b"
      },
      {
          question3: "What is the correct syntax for referring to an external script called 'xxx.'js?",
          answers: {
         a: "<script src=xxx.jx>",
         b:"<script href=xxx.js>",
          c:"<script name=xxx.js>",
          d:"<script var=xxx.js>"
              
          },
         correctAnswer:"a"
      },
      {
          question4: "How can you add a comment in javascript?",
          answers: {
          a: "<!--This is a comment-->",
          b: "'This is a comment'",
          c: "//This is a comment",
         d:"This is a comment"
      },
          correctAnswer:"c"
      }]


 var timeLeft = 75
setInterval(function(){
    console.log(timeLeft--)
},1000);

setInterval()

//Declar/create variable to hold the HTML button reference
var startbtn = document.queryselector("start");

startBtn.addEventListener("click",function(){


//Create HTML elements to hold the data values0
var itemData = document.createElement("h2");
itemData.txtContent = itemSets(0)

console.log





        
