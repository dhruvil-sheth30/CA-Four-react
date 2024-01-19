import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import lightIcon from "./assets/light-icon.png";
import darkIcon from "./assets/dark-icon.png";
import lightModeImage from "./assets/light-mode.png";
import darkModeImage from "./assets/dark-mode.png";

// Creating a context
export const MyQuizGame = createContext();

function App() {
  const [mode, setMode] = useState("Light");
  const [Light, setLight] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState(questions[questionNumber]);
  const [answer, setAnswer] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [highlightQuestion, setHighlightQuestion] = useState(false);

  const contextValue = {
    setAnswer,
    setFinalScore,
    highlightQuestion,
    setHighlightQuestion,
    finalScore,
    setLight,
    setQuestionNumber,
    setQuestion,
    mode,
    Light,
    questionNumber,
    question,
    answer,
  };

  const handleClick = () => {
    setLight(!Light);
  };

  useEffect(() => {
    setMode(Light ? "Dark" : "Light");
  }, [Light]);

  const backgroundImageStyle = {
    background: `url(${Light ? lightModeImage : darkModeImage}), lightgray 10% / cover no-repeat`,
  };

  return (
    <>
      <MyQuizGame.Provider value={contextValue}>
        <div className="App" style={backgroundImageStyle}>
          <div className="header">
            <p className="logo">Quizzy</p>
            {/* Replacing the button with image element for light mode */}
            <img
              src={Light ? lightIcon : darkIcon}
              alt={mode}
              onClick={handleClick}
              className="mode-icon"
            />
          </div>
          {/* Using Ternary operator for the rendering of components */}
          {questionNumber < 10 ? <QuestionBox /> : <Result />}
        </div>
      </MyQuizGame.Provider>
    </>
  );
}

export default App;
