import Square from "./Square";

const Board = ({ square }) => {
  const squares = () => {
    return square.map((value: number, index: number) => (
      <Square key={index} value={square[index]} />
    ));
  };
  return <>{squares()}</>;
};

export default Board;
