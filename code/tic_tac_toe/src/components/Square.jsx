const Square = ({ value, onClick, isXNext }) => {
    const playerClass = value === "X" ? "player-x" : "player-o";
    const currentTurnClass =
      value === null ? (isXNext ? "current-x" : "current-o") : "";
  
    return (
      <button
        className={`square ${playerClass} ${currentTurnClass}`}
        onClick={onClick}
      >
        {value === "X" ? "❌" : value === "O" ? "⭕" : ""}
      </button>
    );
  };

  export default Square;