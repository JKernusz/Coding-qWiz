var secondsLeft = 30;
var currentQuestionIndex = 0
var score = 0
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

function resetState() {
  nextbutton.style.display = 'none'
  while(answerbutton.firstChild){
    answerbutton.removeChild(answerbutton.firstChild)
  }
}



function showQuestion() {
  resetState()
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo = ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('button');
    answerbutton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });

  

}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add('correct');
  }
  else{
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerbutton.children).forEach(button => {
    if(button.dataset.correct === 'true'){
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextbutton.style.display = 'block';
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
  currentQuestionIndex = 0
  score = 0
  nextbutton.innerHTML = "Next"
 setTime()
 showQuestion()
 document.getElementById("Start-quiz").style.display = "none";
 

})