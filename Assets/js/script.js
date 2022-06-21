// array of objects with all questions and answers
const QuizContent = [
  {
    id: 1,
    question: "Inside which HTML element do we put our JS code?",
    choices: [
      { text: "<js>", isCorrect: false },
      { text: "<script>", isCorrect: true },
      { text: "<javascript>", isCorrect: false },
      { text: "<scripts>", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "How do you write 'Hello World' in an alert box?",
    choices: [
      { text: "alertBox('Hello World')", isCorrect: false },
      { text: "msgBox('Hello World')", isCorrect: false },
      { text: "alert('Hello World')", isCorrect: true },
      { text: "msg('Hello World')", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What is the correct way to write a JavaScript array?",
    choices: [
      { text: 'var colors = ["red", "green", "blue"]', isCorrect: true },
      { text: 'var colors = (1:"red", 2:"green", 3:"blue")', isCorrect: false },
      { text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', isCorrect: false },
      { text: 'var colors = "red", "green", "blue"', isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: [
      { text: "onmouseover", isCorrect: false },
      { text: "onclick", isCorrect: true },
      { text: "onchange", isCorrect: false },
      { text: "onmouseclick", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: 'How do write an IF statement testing that "i" is NOT equal to 5?',
    choices: [
      { text: "if (i <> 5)", isCorrect: false },
      { text: "if i <> 5", isCorrect: false },
      { text: "if i =! 5 then", isCorrect: false },
      { text: "if (i != 5)", isCorrect: true }
    ],
  },
];