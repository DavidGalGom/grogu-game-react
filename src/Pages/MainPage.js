import { useNavigate } from "react-router";
import Button from "../Components/Button/Button";

const MainPage = () => {
  const navigate = useNavigate();
  const startTheGameAction = () => {
    navigate("/GamePage");
  };

  return (
    <div className="main-page-container">
      <Button
        value="Click to begin the game"
        actionOnClick={startTheGameAction}
        className="start-button"
      />
    </div>
  );
};

export default MainPage;
