import React, { useContext } from "react";
import { MyQuizGame } from "../App";
import "../App.css";

// Functional component for displaying game results
function GameResult({ Light }) {
  // Using the useContext hook to access shared state and functions
  const { setQuestionNumber, setFinalScore, answer, setAnswer } =
    useContext(MyQuizGame);

  // Function to restart the game by resetting state
  const restartGame = () => {
    setAnswer([]);
    setQuestionNumber(0);
    setFinalScore(0);
  };

  // Logic for calculating the number of correct answers
  let correctAns = 0;
  for (const item of answer) {
    if (item.isCorrect) {
      correctAns++;
    }
  }

  // Greeting message based on the user's score
  let greeting = "";
  if (correctAns === 10) {
    greeting = "Perfect! You nailed it!";
  } else if (correctAns >= 7) {
    greeting = "Great job! You did well!";
  } else if (correctAns >= 5) {
    greeting = "Good effort! Keep it up!";
  } else {
    greeting = "Better luck next time! You can do it!";
  }

  return (
    <div className={`results ${Light ? "light-theme" : "dark-theme"}`}>
      {/* Display the final results */}
      <h2 className="final-score">Final Results</h2>
      
      {/* Display the user's score and percentage */}
      <p className="score">
        {correctAns} out of 10 correct - {correctAns * 10}%
      </p>
      
      {/* Horizontal divider */}
      <hr className="divider" />
      
      {/* Display a personalized greeting based on the user's score */}
      <p className="greeting">{greeting}</p>
      
      {/* Button to restart the game */}
      <button className="restart-btn" onClick={restartGame}>
        Play Again
      </button>
    </div>
  );
}

export default GameResult;
