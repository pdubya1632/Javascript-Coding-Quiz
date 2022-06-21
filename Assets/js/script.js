// array of objects with all questions and answers
const QuizContent = [
  {
    id: 1,
    question: "Inside which HTML element do we put our JS code?",
    choices: {
      a: "<js>",
      b: "<script>",
      c: "<javascript>",
      d: "<scripts>"
    },
    correctAnswer: "b",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    question: 'How do write an IF statement testing that "i" is NOT equal to 5?',
    choices: {
      a: "if (i <> 5)",
      b: "if i <> 5",
      c: "if i =! 5 then",
      d: "if (i != 5)",
    },
    correctAnswer: "d",
  },
];