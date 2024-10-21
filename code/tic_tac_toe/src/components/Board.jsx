import Square from "./Square";

const Board = ({ squares, onClick, isXNext }) => {
    const renderSquare = (index) => {
      return (
        <Square
          value={squares[index]}
          onClick={() => onClick(index)}
          isXNext={isXNext}
        />
      );
    };
  
    return (
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  };

  
  export default Board;