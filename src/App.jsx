import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import lightIcon from "./assets/light-icon.png";
import darkIcon from "./assets/dark-icon.png";
import lightModeImage from "./assets/light-mode.png";
import darkModeImage from "./assets/dark-mode.png";

// Creating a context to share state and functions among components
export const MyQuizGame = createContext();

// Main App component
function App() {
  // State variables using the useState hook
  const [mode, setMode] = useState("Light");
  const [Light, setLight] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState(questions[questionNumber]);
  const [answer, setAnswer] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [highlightQuestion, setHighlightQuestion] = useState(false);

  // Creating a context value object to pass to the provider
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

  // Function to handle button click and toggle between Light and Dark mode
  const handleClick = () => {
    setLight(!Light);
  };

  // Effect to update the mode based on the Light state
  useEffect(() => {
    setMode(Light ? "Dark" : "Light");
  }, [Light]);

  // Style object for background image
  const backgroundImageStyle = {
    background: `url(${Light ? lightModeImage : darkModeImage}), lightgray 10% / cover no-repeat`,
  };

  // Main component structure
  return (
    <>
      <MyQuizGame.Provider value={contextValue}>
        <div className={`App ${Light ? "light-theme" : "dark-theme"}`} style={backgroundImageStyle}>
          {/* Header section with logo and mode switch */}
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
          {/* Conditional rendering of QuestionBox or Result component based on questionNumber */}
          {questionNumber < 10 ? <QuestionBox Light={Light} /> : <Result Light={Light} />}
        </div>
      </MyQuizGame.Provider>
    </>
  );
}

export default App;
