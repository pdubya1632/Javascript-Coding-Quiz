// array of objects with all questions and answers
const Questions = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
    questions: "Question three?",
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
const startQuizBtn = document.getElementById("quiz-start-btn");

const quizSection = document.getElementById("quiz");
const next = document.getElementById("next");

const finishSection = document.getElementById("finish");
const scoresSection = document.getElementById("scores");

startQuizBtn.addEventListener("click", () => {
  startSection.style.display = "none";
  quiz(0);
});

let score = 0;

function quiz(id) {
  const question = document.getElementById("question");
  const correct = document.getElementById("correct");
  const wrong = document.getElementById("wrong");

  // insert question
  question.innerText = Questions[id].question;

  // grab all choice li's on page
  const choiceItems = document.querySelectorAll(".c-item");

  // attach text and isCorrect boolean to all li's
  for (const [i, c] of choiceItems.entries()) {
    c.innerText = Questions[id].choices[i].text;

    let isCorrect = Questions[id].choices[i].isCorrect;

    c.addEventListener("click", function () {
      if (isCorrect) {
        score++;
        correct.style.display = "block";
      } else {
        wrong.style.display = "block";
      }
      next.style.display = "block";
    });

    //c.disabled = true;
  }

  // display quiz
  quizSection.style.display = "block";
}
