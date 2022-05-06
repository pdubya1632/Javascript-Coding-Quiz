// array of objects with all questions and answers
const QuizContent = [
  {
    id: 1,
    question: "Question one",
    choices: [
      { text: "Answer 1-1", isCorrect: false },
      { text: "Answer 1-2", isCorrect: true },
      { text: "Answer 1-3", isCorrect: false },
      { text: "Answer 1-4", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Question two",
    choices: [
      { text: "Answer 2-1", isCorrect: false },
      { text: "Answer 2-2", isCorrect: false },
      { text: "Answer 2-3", isCorrect: false },
      { text: "Answer 2-4", isCorrect: true },
    ],
  },
  {
    id: 3,
    question: "Question three",
    choices: [
      { text: "Answer 3-1", isCorrect: true },
      { text: "Answer 3-2", isCorrect: false },
      { text: "Answer 3-3", isCorrect: false },
      { text: "Answer 3-4", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Question four",
    choices: [
      { text: "Answer 4-1", isCorrect: false },
      { text: "Answer 4-2", isCorrect: false },
      { text: "Answer 4-3", isCorrect: true },
      { text: "Answer 4-4", isCorrect: false },
    ],
  },
];

const startSection = document.getElementById("start");
const quizSection = document.getElementById("quiz");
const finishSection = document.getElementById("finish");
const scoresSection = document.getElementById("scores");
const startOverModal = document.getElementById("start-over-modal");

const question = document.getElementById("question");
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const correctTxt = document.getElementById("correct");
const wrongTxt = document.getElementById("wrong");
const scoreList = document.getElementById("score-list");

const startQuizBtn = document.getElementById("quiz-start-btn");
const choiceBtns = choices.getElementsByTagName("*");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const tryAgainBtn = document.getElementById("tryAgain-btn");
const clearBtn = document.getElementById("clear-btn");

const viewScores = document.getElementById("view-scores");
const initialsTxt = document.getElementById("initials");
const totalScoreTxt = document.getElementById("quiz-score");
const timer = document.getElementById("timer");

let score = 0;
let currentQuestion = 0;
let timeLeft = 30;
const questionCount = QuizContent.length;
let isQuizActive = true;

// add Time Left: upon page load
document.getElementById("timer").textContent = timeLeft;

// TIMER
function countdownTimer() {
  let counter = timeLeft;

  const timerInterval = setInterval(function () {
    if (counter > 0 && isQuizActive == true) {
      counter--;
      timer.innerHTML = counter;
    }
    else if (isQuizActive == false) {
      clearInterval(timerInterval);
      timer.innerText = timeLeft;
    }
    else {
      clearInterval(timerInterval);
      if (!alert("You're out of time! Please try again.")) {
        location.reload();
      }
    }
  }, 1000);
}

// SHOW/HIDE SECTIONS & BUTTONS
const displayToggle = {
  show: function (id) {
    id.style.display = "block";
  },
  hide: function (id) {
    id.style.display = "none";
  },
  inline: function (id) {
    id.style.display = "inline";
  },
};

// START QUIZ
startQuizBtn.addEventListener("click", () => {
  countdownTimer();

  displayToggle.hide(startSection);
  displayToggle.show(quizSection);

  quiz(currentQuestion);
});

// NEXT BUTTON CLICK
nextBtn.addEventListener("click", () => {
  displayToggle.hide(nextBtn);
  displayToggle.hide(result);
  displayToggle.hide(correctTxt);
  displayToggle.hide(wrongTxt);

  // enable choice buttons
  for (let node of choiceBtns) {
    node.disabled = false;
  }

  currentQuestion++;

  if (currentQuestion < questionCount) {
    quiz(currentQuestion);
  } else {
    totalScoreTxt.innerHTML = score;

    isQuizActive = false;
    currentQuestion = 0;

    displayToggle.show(finishSection);
    displayToggle.hide(quizSection);
  }
});

// SUBMIT BUTTON CLICK
submitBtn.addEventListener("click", () => {
  
  // log initials and score to browser
  const person = {
    personName: initialsTxt.value,
    personScore: score,
  }

  // create ID for each score submitted
  let scoreID = Date.now();
  window.localStorage.setItem(scoreID, JSON.stringify(person));


  // reset currentQuestion and clear initials field
  currentQuestion = 0;
  initialsTxt.value = "";

  displayToggle.hide(finishSection);

  displayScores();

});

function displayScores() {

const keys = Object.keys(localStorage);
  for (let key of keys) {
    //let scoreArray = [];
    //scoreArray.push(JSON.parse(localStorage.getItem(key)));
    let scoreData = JSON.parse(localStorage.getItem(key));
    scoreList.innerHTML += "<li>" + scoreData.personName + " : " + scoreData.personScore + "</li>";
  }

  displayToggle.show(scoresSection);
}

// TRY AGAIN
tryAgainBtn.addEventListener("click", () => {
  displayToggle.hide(scoresSection);
  displayToggle.show(startSection);

  isQuizActive = true;

  // show View High Scores link
  if (localStorage.length != 0 && viewScores.style.display === "none") {
    displayToggle.inline(viewScores);
  }
});

// CLEAR HIGH SCORES
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  scoreList.innerHTML = "";
  displayToggle.hide(viewScores);
});

//--------------QUIZ FUNCTION---------------//

function quiz(id) {
  // insert question text
  question.innerText = QuizContent[id].question;

  // grab all choice buttons on page
  const choiceItems = document.querySelectorAll(".choice");

  // attach text and isCorrect boolean to all buttons
  for (const [i, c] of choiceItems.entries()) {
    // reset choice border color
    c.style.border = "1px solid purple";

    // insert choice text in buttons
    c.innerText = QuizContent[id].choices[i].text;

    // set true or false
    let isCorrect = QuizContent[id].choices[i].isCorrect;

    // when choice button is clicked
    c.addEventListener("click", function () {
      // give selected choice a white border
      c.style.border = "1px solid #fff";

      if (isCorrect) {
        score++;
        displayToggle.show(result);
        displayToggle.show(correctTxt);
        displayToggle.hide(wrongTxt);
        console.log("correct! you get one point");
      } else {
        displayToggle.show(result);
        displayToggle.hide(correctTxt);
        displayToggle.show(wrongTxt);
        console.log("wrong...you get zero points");
      }

      // disable choices after selection is made
      for (let node of choiceBtns) {
        node.disabled = true;
      }

      // show next button
      displayToggle.show(nextBtn);
    });
  }
}
