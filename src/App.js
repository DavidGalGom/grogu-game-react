import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./Pages/GamePage";
import MainPage from "./Pages/MainPage";
import NotFoundPage from "./Pages/NotFoundPage";
import EndGamePage from "./Pages/EndGamePage";

function App() {
  return (
    <>
      <Router>
        <h1 className="main-title">Welcome to the Grogu game</h1>

        <Routes>
          <Route path="/GamePage" element={<GamePage />} />
          <Route path="/EndGamePage" element={<EndGamePage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
