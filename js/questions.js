
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


setNextQuestion()

}

function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])
resetstate

}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function selectAnswer(e) {

//to loop in all the children inside the answer buttons
}
function resetstate() {
nextbutton.classList.add('hide')
while (answerButtonsElement.firstChild) {
answerButtonsElement.removeChild
(answerButtonsElement.firstChild)
}

}
const questions = [
    {
     question: 'Who invented Javascript?',
      answers: {
          a:"Douglas Crockford",
          b: "Sheryl Sanberg",
         c: "Brendan Eich",
         d:"Mark Zuckerberg"
     },
      correctAnswer: "c"
      },
      {
          question: "Inside which HTML element do we put the JavaScript?",
         answers: { 
         a: "<JS>",
        b: "<script>",
         c: "<javascript>",
          d:"<scripting>"
          },
      correctAnswer: "b"
      },
      {
          question: "What is the correct syntax for referring to an external script called 'xxx.'js?",
          answers: {
         a: "<script src=xxx.jx>",
         b:"<script href=xxx.js>",
          c:"<script name=xxx.js>",
          d:"<script var=xxx.js>"
              
          },
         correctAnswer:"a"
      },
      {
          question: "How can you add a comment in javascript?",
          answers: {
          a: "<!--This is a comment-->",
          b: "'This is a comment'",
          c: "//This is a comment",
         d:"This is a comment"
      },
          correctAnswer:"c"
      },
    ];
