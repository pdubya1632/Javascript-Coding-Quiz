// SHOW/HIDE SECTIONS & BUTTONS
// const displayToggle = {
//   show: function (id) {
//     id.style.display = "inline";
//   },
//   hide: function (id) {
//     id.style.display = "none";
//   },
// };

function showQuestions(n) {

  const cards = document.querySelectorAll(".card");
  cards[n].classList.add('active-card');
  currentQuestion = n;

  if(currentQuestion === 0) {
    startSection.style.display = 'none';
    nextBtn.style.display = 'inline-block';
  }

  // displayToggle.show(quizSection);

  // questions[currentQuestion].classList.remove('active');
  // questions[n].classList.add('active');
  // currentQuestion = n;
  // if(currentQuestion === 0){
  //   previousButton.style.display = 'none';
  // }
  // else{
  //   previousButton.style.display = 'inline-block';
  // }
  // if(currentQuestion === Questions.length-1){
  //   nextButton.style.display = 'none';
  //   submitButton.style.display = 'inline-block';
  // }
  // else{
  //   nextButton.style.display = 'inline-block';
  //   submitButton.style.display = 'none';
  // }
}

function showNextQuestion() {
  showQuestions(currentSlide + 1);
}

const buildQuiz = () => {
  const output = [];
  
  QuizContent.forEach((currentQuestion, questionNumber) => {
    const choices = [];

    for (letter in currentQuestion.choices) {
      choices.push(
        `<button name="question${questionNumber}" value="${letter}" class="choice">${currentQuestion.choices[letter]}</button>`
      );
    }

    output.push(
      `<div class="card">
        <div class="question"> ${currentQuestion.question} </div>
        <div id="choices"> ${choices.join("")} </div>
      </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");

  showQuestions(currentQuestion);
}

// array of objects with all questions and answers
const QuizContent = [
  {
    question: "Inside which HTML element do we put our JS code?",
    choices: {
      a: "js",
      b: "script",
      c: "javascript",
      d: "scripts",
    },
    correctAnswer: "b",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: {
      a: "alertBox('Hello World')",
      b: "msgBox('Hello World')",
      c: "alert('Hello World')",
      d: "msg('Hello World')",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    choices: {
      a: 'var colors = ["red", "green", "blue"]',
      b: 'var colors = (1:"red", 2:"green", 3:"blue")',
      c: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
      d: 'var colors = "red", "green", "blue"',
    },
    correctAnswer: "a",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: {
      a: "onmouseover",
      b: "onclick",
      c: "onchange",
      d: "onmouseclick",
    },
    correctAnswer: "b",
  },
  {
    question:
      'How do write an IF statement testing that "i" is NOT equal to 5?',
    choices: {
      a: "if (i <> 5)",
      b: "if i <> 5",
      c: "if i =! 5 then",
      d: "if (i != 5)",
    },
    correctAnswer: "d",
  },
];

const startSection = document.getElementById("start");
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");

const startButton = document.getElementById("quiz-start-btn");
const nextBtn = document.getElementById("next-btn");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;

startButton.addEventListener("click", buildQuiz);
