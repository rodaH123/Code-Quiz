
var startQuizButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById
('question-containier')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')

let shuffledQuestions, currentQuestionIndex


startQuizButton.addEventListener('click', startGame)

function startGame() {
startQuizButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')

setNextQuestion()

}

function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText = question.question


}

const questions = [
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
