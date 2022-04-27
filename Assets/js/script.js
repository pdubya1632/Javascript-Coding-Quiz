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

const startSection = document.getElementById('start');
const startQuizBtn = document.getElementById('quiz-start-btn');

const quizSection = document.getElementById('quiz');
const finishSection = document.getElementById('finish');
const scoresSection = document.getElementById('scores');

startQuizBtn.addEventListener('click', () => {
    startSection.style.display = 'none';
    quiz(0);
});

function quiz(id) {
    
    const question = document.getElementById('question');

    question.innerText = Questions[id].question;

    const choices = [
        document.getElementById('c1'),
        document.getElementById('c2'),
        document.getElementById('c3'),
        document.getElementById('c4'),
        document.getElementById('c5')
    ];

    for (i = 0; i < choices.length; i++) {
        choices[i].innerText = Questions[id].choices[i].text;
    }

    quizSection.style.display = 'block';
}