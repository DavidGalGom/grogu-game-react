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
        <div className="dice-container">
          <Button
            value="Click to trow the dice"
            actionOnClick={trowTheDiceAction}
            className="dice-button"
          />
          <p className="dice-value">{currentDiceNumber}</p>
        </div>
        <div className="board-container">
          <div className="grogu-base">
            <img
              src="https://stickersde.com/wp-content/uploads/2021/08/grogu-mandalorian.png"
              alt="grogu"
              height="100"
              width="100"
            />
          </div>
          <div className="game-cell one"></div>
          <div className="game-cell two"></div>
          <div className="game-cell three"></div>
          <div className="game-cell four"></div>
          <div className="game-cell five"></div>
          <div className="game-cell six"></div>
          <div className="food-container">
            <div className="game-cell cookies-container">
              <p className="cell-text">3 Cookies</p>
            </div>
            <div className="game-cell egg-container">
              <p className="cell-text">3 Eggs</p>
            </div>
            <div className="game-cell frog-container">
              <p className="cell-text">3 Frogs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBoard;
