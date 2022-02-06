import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";

const PlayAgainPage = () => {
  const navigate = useNavigate();
  const playAgainAction = () => {
    navigate("/GamePage");
  };
  return (
    <>
      <div className="game-page-container">
        <h2 className="play-again-title">Congratulations !!! Grogu wins!</h2>
        <Button
          value="Play again"
          actionOnClick={playAgainAction}
          className="play-again-button"
        />
      </div>
    </>
  );
};

export default PlayAgainPage;
