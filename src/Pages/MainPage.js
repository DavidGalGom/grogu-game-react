import Button from "../Components/Button/Button";

const MainPage = () => {
  const startTheGameAction = () => {};

  return (
    <Button
      value="Click to begin the game"
      actionOnClick={startTheGameAction}
      className="start-button"
    />
  );
};

export default MainPage;
