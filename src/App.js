import "./App.css";
import Button from "./Components/Button/Button";

const startTheGameAction = () => {};

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Welcome to the Grogu game</h1>
      <Button
        value="Click to begin the game"
        actionOnClick={startTheGameAction}
        className="start-button"
      />
    </div>
  );
}

export default App;
