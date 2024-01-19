import React, { useContext } from "react";
import { MyQuizGame } from "../App";
import "../App.css";

function GameResult() {
  // Using the useContext hook
  const { setQuestionNumber, setFinalScore, answer, setAnswer } =
    useContext(MyQuizGame);

  // Function to restart the game by using useState
  const restartGame = () => {
    setAnswer([]);
    setQuestionNumber(0);
    setFinalScore(0);
  };

  // Defining the logic for calculating the answers using for of loop
  let correctAns = 0;
  for (const item of answer) {
    if (item.isCorrect) {
      correctAns++;
    }
  }

  // Greeting based on the user's score
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
    <div className="results">
      <h2 className="final-score">Final Results</h2>
      <p className="score">
        {/* Logic for calculating the score percentage  */}
        {correctAns} out of 10 correct - {correctAns * 10}%
      </p>
      <hr className="divider" />
      <p className="greeting">{greeting}</p>
      <button className="restart-btn" onClick={restartGame}>
        Play Again
      </button>
    </div>
  );
}

export default GameResult;
