import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const GameBoard = () => {
  const [currentDiceNumber, setCurrentDiceNumber] = useState(0);
  const [currentCookies, setCurrentCookies] = useState(3);
  const [currentEggs, setCurrentEggs] = useState(3);
  const [currentFrogs, setCurrentFrogs] = useState(3);
  const navigate = useNavigate();
  const getDiceRandomNumber = () => {
    return Math.floor(Math.random() * (4 - 1 + 1) + 1);
  };
  const trowTheDiceAction = () => {
    let diceValue = getDiceRandomNumber();
    setCurrentDiceNumber(diceValue);
    if (diceValue === 1 && currentCookies > 0) {
      setCurrentCookies(currentCookies - 1);
    } else if (diceValue === 2 && currentEggs > 0) {
      setCurrentEggs(currentEggs - 1);
    } else if (diceValue === 3 && currentFrogs > 0) {
      setCurrentFrogs(currentFrogs - 1);
    }
    if (currentCookies === 0 && currentEggs === 0 && currentFrogs === 0) {
      navigate("/EndGamePage");
    }
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
              className="grogu-initial-position"
              src="https://stickersde.com/wp-content/uploads/2021/08/grogu-mandalorian.png"
              alt="grogu"
              height="100"
              width="100"
            />
          </div>
          <div className="game-cell one">
            <img
              className="grogu-hidden"
              src="https://stickersde.com/wp-content/uploads/2021/08/grogu-mandalorian.png"
              alt="grogu"
              height="90"
              width="90"
            />
          </div>
          <div className="game-cell two">
            <img
              className="grogu-hidden"
              src="https://stickersde.com/wp-content/uploads/2021/08/grogu-mandalorian.png"
              alt="grogu"
              height="90"
              width="90"
            />
          </div>
          <div className="game-cell three">
            <img
              className="grogu-hidden"
              src="https://stickersde.com/wp-content/uploads/2021/08/grogu-mandalorian.png"
              alt="grogu"
              height="90"
              width="90"
            />
          </div>
          <div className="game-cell four">
            <img
              className="grogu-hidden"
              src="https://stickersde.com/wp-content/uploads/2021/08/grogu-mandalorian.png"
              alt="grogu"
              height="90"
              width="90"
            />
          </div>
          <div className="game-cell five">
            <img
              className="grogu-hidden"
              src="https://stickersde.com/wp-content/uploads/2021/08/grogu-mandalorian.png"
              alt="grogu"
              height="90"
              width="90"
            />
          </div>
          <div className="game-cell six">
            <img
              className="grogu-hidden"
              src="https://stickersde.com/wp-content/uploads/2021/08/grogu-mandalorian.png"
              alt="grogu"
              height="90"
              width="90"
            />
          </div>
          <div className="food-container">
            <div className="game-cell cookies-container">
              <p className="cell-text">{currentCookies} Cookies</p>
            </div>
            <div className="game-cell egg-container">
              <p className="cell-text">{currentEggs} Eggs</p>
            </div>
            <div className="game-cell frog-container">
              <p className="cell-text">{currentFrogs} Frogs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBoard;
