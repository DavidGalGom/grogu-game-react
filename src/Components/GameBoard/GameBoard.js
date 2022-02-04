import { useEffect, useState } from "react";
import Button from "../Button/Button";

const GameBoard = () => {
  const [currentDiceNumber, setCurrentDiceNumber] = useState(0);
  const getDiceRandomNumber = () => {
    return Math.floor(Math.random() * (4 - 1 + 1) + 1);
  };
  const trowTheDiceAction = () => {
    setCurrentDiceNumber(getDiceRandomNumber());
  };
  useEffect(() => {
    getDiceRandomNumber();
  }, []);

  return (
    <>
      <div className="game-page-container">
        <Button
          value="Click to trow the dice"
          actionOnClick={trowTheDiceAction}
          className="dice-button"
        />
        <p className="dice-value">{currentDiceNumber}</p>
      </div>
    </>
  );
};

export default GameBoard;
