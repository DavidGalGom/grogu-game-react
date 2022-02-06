import { useNavigate } from "react-router";
import Button from "../Components/Button/Button";

const MainPage = () => {
  const navigate = useNavigate();
  const startTheGameAction = () => {
    navigate("/GamePage");
  };

  return (
    <div className="main-page-container">
      <div className="info-container">
        <p className="info-paragraph">
          The game consists in throwing a four sided dice. Each number
          represents an action:<br></br>
          1. Take out a cookie 🍪 <br></br>
          2. Take out an egg 🥚 <br></br>
          3. Take out a frog 🐸 <br></br>
          4. Grogu advances one cell 👣
        </p>
        <p className="info-paragraph">
          The game ends when one of the following things occur: Grogu wins if
          arrives to the last square before all the food is gone, the game is
          lost when any kind of food it remains on the board
        </p>
      </div>
      <Button
        value="Click to begin the game"
        actionOnClick={startTheGameAction}
        className="start-button"
      />
    </div>
  );
};

export default MainPage;
