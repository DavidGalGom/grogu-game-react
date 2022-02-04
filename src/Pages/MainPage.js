import Button from "../Components/Button/Button";

const MainPage = () => {
  const startTheGameAction = () => {};

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
