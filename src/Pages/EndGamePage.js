import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";

const EndGamePage = () => {
  const navigate = useNavigate();
  const tryAgainAction = () => {
    navigate("/GamePage");
  };
  return (
    <>
      <div className="game-page-container">
        <h2 className="end-title">
          The game just ended, Grogu lost all the food
        </h2>
        <Button
          value="Retry"
          actionOnClick={tryAgainAction}
          className="retry-button"
        />
      </div>
    </>
  );
};

export default EndGamePage;
