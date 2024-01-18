const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false },
      { id: 1, text: "User interface framework", isCorrect: true },
      { id: 2, text: "Both a and b", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },

  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true },
      { id: 1, text: "Java", isCorrect: false },
      { id: 2, text: "C", isCorrect: false },
      { id: 3, text: "C++", isCorrect: false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect: false },
      { id: 1, text: "Internal storage of the component.", isCorrect: true },
      { id: 2, text: "External storage of the component.", isCorrect: false },
      { id: 3, text: "None of the above.", isCorrect: false },
    ],
  },
  
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, text: "Pair of current state and function updating it", isCorrect: true },
      { id: 1, text: "Current State", isCorrect: false },
      { id: 2, text: "Function updating the current state", isCorrect: false },
      { id: 3, text: "UseState returns nothing", isCorrect: false },
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      { id: 0, text: "1", isCorrect: false },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "3", isCorrect: true },
      { id: 3, text: "4", isCorrect: false },
    ],
  },
  {
    text: "What does JSX stand for?",
    options: [
      { id: 0, text: "JavaScript XML", isCorrect: true },
      { id: 1, text: "Java XML", isCorrect: false },
      { id: 2, text: "JSON XML", isCorrect: false },
      { id: 3, text: "JavaScript Extension", isCorrect: false },
    ],
  },
  {
    text: "Which hook is used for side effects in functional components?",
    options: [
      { id: 0, text: "useEffect", isCorrect: true },
      { id: 1, text: "useReducer", isCorrect: false },
      { id: 2, text: "useState", isCorrect: false },
      { id: 3, text: "useContext", isCorrect: false },
    ],
  },
  {
    text: "What is the virtual DOM in React?",
    options: [
      { id: 0, text: "A real-time representation of the DOM", isCorrect: false },
      { id: 1, text: "An in-memory representation of the DOM", isCorrect: true },
      { id: 2, text: "A backup copy of the DOM", isCorrect: false },
      { id: 3, text: "A different implementation of the DOM", isCorrect: false },
    ],
  },
  {
    text: "What is prop drilling in React?",
    options: [
      { id: 0, text: "Passing data directly to child components", isCorrect: false },
      { id: 1, text: "Passing data through multiple levels of components", isCorrect: true },
      { id: 2, text: "Passing data to parent components", isCorrect: false },
      { id: 3, text: "Passing data between siblings components", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the useMemo hook?",
    options: [
      { id: 0, text: "Memoize function", isCorrect: false },
      { id: 1, text: "Optimize function components", isCorrect: false },
      { id: 2, text: "Memoize the result of an expensive computation", isCorrect: true },
      { id: 3, text: "Manage side effects", isCorrect: false },
    ],
  },
];

export default questions;
