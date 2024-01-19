import React, { useContext, useEffect } from "react";
import { MyQuizGame } from "../App";
import questions from "../questions";
import GameResult from "./Result";

function QuestionBox() {
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

  // Using the useEffect hook
  useEffect(() => {
    if (questionNumber < 10) {
      setQuestion(questions[questionNumber]);
    }
  }, [questionNumber, setQuestion]);

  // Function to handle the answers
  const handleAnswer = (selectedOption) => {
    const isCorrect = question.options[selectedOption].isCorrect;

    setFinalScore((prevScore) => prevScore + (isCorrect ? 1 : 0));
    setAnswer([
      ...answer,
      { question: questionNumber, selectedOption, isCorrect },
    ]);
    setQuestionNumber(questionNumber + 1);
  };

  if (questionNumber === 10) {
    return <GameResult />;
  }

  // Updated function for managing the highlight button
  const handleHighlight = () => {
    setHighlightQuestion((prevHighlight) => !prevHighlight);
  };

  return (
    <div className="question-box">
      <p className="question-counter">Question {questionNumber + 1} out of 10</p>
      <h2
        className="question-text"
        style={{ color: highlightQuestion ? "red" : null }}
      >
        {question.text}
      </h2>
      {/* Logic for displaying the options */}
      {question.options.map((option, index) => (
        <p className="options" key={index} onClick={() => handleAnswer(index)}>
          {option.text}
        </p>
      ))}
      <button className="highlight" onClick={handleHighlight}>
        {highlightQuestion ? "Unhighlight" : "Highlight"}
      </button>
    </div>
  );
}

export default QuestionBox;
