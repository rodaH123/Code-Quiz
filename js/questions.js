
var quizContainer=document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

const myQuestions = [
    {
     question0:"Who invented Javascript?",
      answers: {
          a:"Douglas Crockford",
          b: "Sheryl Sanberg",
         c: "Brendan Eich",
         d:"Mark Zuckerberg"
     },
      correctAnswer: "c"
      },
      {
          question1: "Inside which HTML element do we put the JavaScript?",
         answers: { 
         a: "<JS>",
        b: "<script>",
         c: "<javascript>",
          d:"<scripting>"
          },
      correctAnswer: "b"
      },
      {
          question2: "What is the correct syntax for referring to an external script called 'xxx.'js?",
          answers: {
         a: "<script src=xxx.jx>",
         b:"<script href=xxx.js>",
          c:"<script name=xxx.js>",
          d:"<script var=xxx.js>"
              
          },
         correctAnswer:"a"
      },
      {
          question3: "How can you add a comment in javascript?",
          answers: {
          a: "<!--This is a comment-->",
          b: "'This is a comment'",
          c: "//This is a comment",
         d:"This is a comment"
      },
          correctAnswer:"c"
      },
    ];


 var timeLeft = 75
setInterval(function(){
    console.log(timeLeft--)
},1000);

setInterval()

//Declare/create variable to hold the HTML button reference
var startbtn = document.queryselector("start Quiz");
var questions =document.queryselector("Questioncontainer");
var setNumber = 0

startBtn.addEventListener("click",function(){

var populateData = function() {
for(let i = 0; i<Object.keys(myQuestion[0]). length; i++) {
//Create HTML elements to hold the data values0
var itemData = document.createElement("button");
itemData.txtContent = myQuestions(0)(i);

    //get HTML on the actual website
    questions.append(itemData)
}



//call our populate Data function
populateData(setNumber);
};

var populateData = function () {


questions.addEventListener("click", function (event) {

//delete all content in the list
questions.txtContent = "";
})

//Append the new items in the list 
 for(let i = 0; i<Object.keys(myQuestion[0]). length; i++) {
  //Create HTML elements to hold the data values
      var itemData = document.createElement("button");
      itemData.txtContent = myQuestions(setNumber)(i);

    //get HTML on the actual website
    questions.append(itemData)
 }

//call our populate Data function
populateData(setNumber);