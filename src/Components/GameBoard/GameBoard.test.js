import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import GameBoard from "./GameBoard";

describe("Given a GameBoard component", () => {
  describe("When its rendered", () => {
    test("Then it should be an image with accessible name grogu", () => {
      render(
        <Router>
          <GameBoard />
        </Router>
      );
      const groguImage = screen.getByRole("img", { name: "grogu" });
      expect(groguImage).toBeInTheDocument();
    });
  });
});
