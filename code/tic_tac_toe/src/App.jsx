import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every(Boolean)) {
      return "It's a tie!";
    } else {
      return `Next player: ${isXNext ? "X" : "O"}`;
    }
  };

  return (
    <div className="gameboard">
      <div className="player">
        <h1 className="player-x">player :❌</h1>
      </div>
      <div className="game">
        <h1>Tic-Tac-Toe</h1>
        <Board squares={board} onClick={handleClick} isXNext={isXNext} />
        <div className="status">
          <h1 className={winner ?"win":""}>{renderStatus()}</h1>
        </div>
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="player">
        <h1 className="player-o">player :⭕</h1>
      </div>
    </div>
  );
};



// Helper function to calculate winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
