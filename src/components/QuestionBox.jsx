import React, { useContext, useEffect } from "react";
import { MyQuizGame } from "../App";
import questions from "../questions";
import GameResult from "./Result";

// Functional component for rendering a question box
function QuestionBox({ Light }) {
  // Destructuring values from the context
  const {
    setFinalScore,
    highlightQuestion,
    setHighlightQuestion,
    setQuestionNumber,
    setQuestion,
    setAnswer,
    questionNumber,
    question,
    answer,
  } = useContext(MyQuizGame);

  // Using the useEffect hook to update the question when questionNumber changes
  useEffect(() => {
    if (questionNumber < 10) {
      setQuestion(questions[questionNumber]);
    }
  }, [questionNumber, setQuestion]);

  // Function to handle user's answer selection
  const handleAnswer = (selectedOption) => {
    const isCorrect = question.options[selectedOption].isCorrect;

    // Update final score and answers array
    setFinalScore((prevScore) => prevScore + (isCorrect ? 1 : 0));
    setAnswer([
      ...answer,
      { question: questionNumber, selectedOption, isCorrect },
    ]);

    // Move to the next question
    setQuestionNumber(questionNumber + 1);
  };

  // If all questions are answered, show the game result
  if (questionNumber === 10) {
    return <GameResult />;
  }

  // Function for toggling the highlighting of the question
  const handleHighlight = () => {
    setHighlightQuestion((prevHighlight) => !prevHighlight);
  };

  return (
    <div className={`question-box ${Light ? "light-theme" : "dark-theme"}`}>
      {/* Display the question counter */}
      <p
        className="question-counter"
        style={{
          color: Light ? "inherit" : "rgba(255, 251, 251, 0.60)",
        }}
      >
        Question {questionNumber + 1} out of 10
      </p>
      
      {/* Display the question text with optional highlighting */}
      <h2
        className="question-text"
        style={{ color: highlightQuestion ? "red" : null }}
      >
        {question.text}
      </h2>
      
      {/* Display the answer options */}
      {question.options.map((option, index) => (
        <p
          className={`options ${Light ? "light-option" : "dark-option"}`}
          key={index}
          onClick={() => handleAnswer(index)}
        >
          {option.text}
        </p>
      ))}
      
      {/* Button to toggle question highlighting */}
      <button className="highlight" onClick={handleHighlight}>
        {highlightQuestion ? "Unhighlight" : "Highlight"}
      </button>
    </div>
  );
}

export default QuestionBox;
