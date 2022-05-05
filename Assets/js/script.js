// array of objects with all questions and answers
const Questions = [
  {
    id: 1,
    question: "Question one?",
    choices: [
      { text: "Answer 1-1", isCorrect: false },
      { text: "Answer 1-2", isCorrect: true },
      { text: "Answer 1-3", isCorrect: false },
      { text: "Answer 1-4", isCorrect: false }
    ],
  },
  {
    id: 2,
    question: "Question two?",
    choices: [
      { text: "Answer 2-1", isCorrect: false },
      { text: "Answer 2-2", isCorrect: false },
      { text: "Answer 2-3", isCorrect: false },
      { text: "Answer 2-4", isCorrect: true }
    ],
  },
  {
    id: 3,
    question: "Question three?",
    choices: [
      { text: "Answer 3-1", isCorrect: true },
      { text: "Answer 3-2", isCorrect: false },
      { text: "Answer 3-3", isCorrect: false },
      { text: "Answer 3-4", isCorrect: false }
    ],
  },
];

const startSection = document.getElementById("start");
const quizSection = document.getElementById("quiz");
const finishSection = document.getElementById("finish");
const scoresSection = document.getElementById("scores");

const question = document.getElementById("question");
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const correctTxt = document.getElementById("correct");
const wrongTxt = document.getElementById("wrong");

const startQuizBtn = document.getElementById("quiz-start-btn");
const choiceBtns = choices.getElementsByTagName('*');
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submit-btn");

const initialsTxt = document.getElementById("initials");
const totalScoreTxt = document.getElementById("quiz-score");

// set score to 0, current question to 0, and set total number of questions
let score = 0;
let currentQuestion = 0;

// get total number of questions
const questionCount = Questions.length;
const startTime = 30;

submitBtn.addEventListener("click", () => {

  // log initials and score to browser
  localStorage.setItem(initialsTxt.value, score);

  finishSection.display = "none";
  scoresSection.display = "block";
  timeLeft.innerHTML = startTime;
});

startQuizBtn.addEventListener("click", () => {
  startSection.style.display = "none";
  
  // set counter start to be text that's within timer span
  let counter = startTime; 

  // start timer countdown function
  const interval = setInterval(startTimer, 1000);
    
  function startTimer() {
    counter--;
  
    if( counter >= 0 ) {
      timeLeft = document.getElementById("timer");
      timeLeft.innerHTML = counter;
    }
    else if( counter === 0 && currentQuestion <= questionCount ) {
      window.alert("time is up! start over");
      resetTimer();
    } 
  };

  function resetTimer() {
    clearInterval(interval);
    document.getElementById("timer").innerText = startTime;
  };

  quiz(currentQuestion);
});

nextBtn.addEventListener("click", () => {
  nextBtn.style.display = "none";
  result.style.display = "none";
  correctTxt.style.display = "none";
  wrongTxt.style.display = "none";
  
  // enable choice buttons
  for (let node of choiceBtns) {
    node.disabled = false;
  }

  currentQuestion++;
  quiz(currentQuestion);
});

// SUBMIT BUTTON CLICK
submitBtn.addEventListener("click", () => {

  // log initials and score to browser
  localStorage.setItem(initialsTxt.value, score);

  finishSection.style.display = "none";
  timeLeft.innerHTML = startTime;

  const scoreList = document.getElementById("score-list");
  scoresSection.style.display = "block";

});

function quiz(id) {
  if (id === questionCount) {
    totalScoreTxt.innerHTML = score;

    clearInterval();

    finishSection.style.display = "block";
    quizSection.style.display = "none";
  } else {
    // show current question
    console.log("current question: " + currentQuestion);
    console.log("current score: " + score);

    // display quiz
    quizSection.style.display = "block";

    // insert question text
    question.innerText = Questions[id].question;

    // grab all choice buttons on page
    const choiceItems = document.querySelectorAll(".choice");

    // attach text and isCorrect boolean to all buttons
    for (const [i, c] of choiceItems.entries()) {
      // insert choice text in buttons
      c.innerText = Questions[id].choices[i].text;

      // set true or false
      let isCorrect = Questions[id].choices[i].isCorrect;

      // when choice button is clicked
      c.addEventListener("click", function () {
        if (isCorrect) {
          score++;
          result.style.display = "block";
          correctTxt.style.display = "block";
          wrongTxt.style.display = "none";
          console.log("correct!");
        } else {
          result.style.display = "block";
          correctTxt.style.display = "none";
          wrongTxt.style.display = "block";
          console.log("wrong...you get zero points");
        }
        
        // disable choices after selection is made
        for (let node of choiceBtns) {
            node.disabled = true;
        }

        // show next button
        nextBtn.style.display = "block";
      });
    }
  }
}
