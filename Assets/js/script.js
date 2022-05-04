// array of objects with all questions and answers
const Questions = [
  {
    id: 1,
    question: "Question one?",
    choices: [
      { text: "Answer 1-1", isCorrect: false },
      { text: "Answer 1-2", isCorrect: true },
      { text: "Answer 1-3", isCorrect: false },
      { text: "Answer 1-4", isCorrect: false },
      { text: "Answer 1-5", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Question two?",
    choices: [
      { text: "Answer 2-1", isCorrect: false },
      { text: "Answer 2-2", isCorrect: false },
      { text: "Answer 2-3", isCorrect: false },
      { text: "Answer 2-4", isCorrect: true },
      { text: "Answer 2-5", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Question three?",
    choices: [
      { text: "Answer 3-1", isCorrect: true },
      { text: "Answer 3-2", isCorrect: false },
      { text: "Answer 3-3", isCorrect: false },
      { text: "Answer 3-4", isCorrect: false },
      { text: "Answer 3-5", isCorrect: false },
    ],
  },
];

const startSection = document.getElementById("start");
const quizSection = document.getElementById("quiz");
const finishSection = document.getElementById("finish");
const scoresSection = document.getElementById("scores");

const startQuizBtn = document.getElementById("quiz-start-btn");
const nextBtn = document.getElementById("nextBtn");

const question = document.getElementById("question");
const choices = document.getElementById("choices");
// const result = document.getElementById("result");
const correctTxt = document.getElementById("correct");
const wrongTxt = document.getElementById("wrong");

const totalScoreTxt = document.getElementById("quiz-score");

// set score to 0 and current question to 0
let score = 0;
let currentQuestion = 0;

// get total number of questions
const questionCount = Object.keys(Questions).length;

startQuizBtn.addEventListener("click", () => {
  startSection.style.display = "none";
  quiz(currentQuestion);
});

nextBtn.addEventListener("click", () => {
  nextBtn.style.display = "none";
  correctTxt.style.display = "none";
  wrongTxt.style.display = "none";
  currentQuestion++;
  quiz(currentQuestion);
});

function quiz(id) {
  if (id === questionCount) {
    localStorage.setItem("totalScore", score);
    totalScoreTxt.innerHTML = localStorage.getItem("totalScore");

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
    const choiceItems = document.querySelectorAll(".c-item");

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
          correctTxt.style.display = "block";
          wrongTxt.style.display = "none";
          console.log("correct!");
        } else {
          correctTxt.style.display = "none";
          wrongTxt.style.display = "block";
          console.log("wrong...you get zero points");
        }
        //choices.disabled = true;
        nextBtn.style.display = "block";
      });
    }
  }
}
