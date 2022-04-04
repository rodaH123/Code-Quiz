

//to manage timer and have time countdown during quiz
var timeLeft = 75
setInterval(function(){
    console.log(timeLeft--)
},1000);

setInterval()

var startQuizButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById
('question-containier')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')




//To get questions in the array shuffled
let shuffledQuestions, currentQuestionIndex


startQuizButton.addEventListener('click', startGame)

function startGame() {
startQuizButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
setNextQuestion()
}

//To continue to show different questions from the question and answer array after first question is listed in the browser.
function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])
}

//To populate different answers
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        //If correct answer is selected, this answer will be labeled as correct.
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        //This is to append the answer selections from the arry list onto the DOM
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}



function selectAnswer(e) {

//to loop in all the children(from the array) inside the answer buttons
}
function resetstate() {
nextbutton.classList.add('hide')
while (answerButtonsElement.firstChild) {
answerButtonsElement.removeChild
(answerButtonsElement.firstChild)
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body.correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button,button,dataset.correct)
        }) 
        nextButton.classList.remove()
    }

            
     function setStatusClass(element,correct){
         ClearStatusClass
     }
    })
}

// list of questions and answer in an array
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
    ]
