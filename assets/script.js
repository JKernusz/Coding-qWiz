var secondsLeft = 30;
var currentQuestionIndex = 0
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var local = localStorage;
var startBtn = document.querySelector("#Start-quiz");
const questionElement = document.getElementById('questions');
const answerbutton = document.getElementById('answer-buttons');
const nextbutton = document.getElementById('next-btn'); 
const questions = [
  {
    question:"Wich one of these is considered a boolean?",
    answers: [
      { text: "true", correct: true},
      { text: "0", correct: false },
      { text: "yes", correct: false},
      { text: "1", correct: false },

    ]
  },
  {
    question:"Wich one of these is considered a boolean?",
    answers: [
      { text: "true", correct: true},
      { text: "0", correct: false },
      { text: "yes", correct: false},
      { text: "1", correct: false },

    ]
  },
  {
    question:"Wich one of these is considered a boolean?",
    answers: [
      { text: "true", correct: true},
      { text: "0", correct: false },
      { text: "yes", correct: false},
      { text: "1", correct: false },

    ]
  },
  {
    question:"Wich one of these is considered a boolean?",
    answers: [
      { text: "true", correct: true},
      { text: "0", correct: false },
      { text: "yes", correct: false},
      { text: "1", correct: false },

    ]
  },
  {
    question: "Wich one of these is considered a boolean?",
    answers: [
      { text: "true", correct: true},
      { text: "0", correct: false },
      { text: "yes", correct: false},
      { text: "1", correct: false },

    ]
  }
]





function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo = ". " + currentQuestion.question;

  

}



function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to display game over screen
          sendMessage();
        }
    
      }, 1000);}

function sendMessage() {
timeEl.textContent = "GAME OVER ";
var gameOver = document.createElement("div");
mainEl.appendChild(gameOver);

}

startBtn.addEventListener("click", function(){
 setTime()
 showQuestions()
 document.getElementById("Start-quiz").style.display = "none";
 

})