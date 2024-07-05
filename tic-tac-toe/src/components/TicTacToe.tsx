import { useState } from "react";
import "../styles/TicTacToe.css";
import Board from "./Board";
const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className="board">
      <Board square={squares} />
    </div>
  );
};

export default TicTacToe;
