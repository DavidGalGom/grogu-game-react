import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives a click", () => {
    test("Then it should summon the actionOnClick function", () => {
      const actionOnClick = jest.fn();

      render(<Button actionOnClick={actionOnClick} />);
      const clickElement = screen.getByRole("button");
      userEvent.click(clickElement);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
  describe("When it receives a value", () => {
    test("Then it should render it", () => {
      const textButton = "Start";

      render(<Button value={textButton} />);
      const textElement = screen.getByRole("button", { name: "Start" });
      expect(textElement).toBeInTheDocument();
    });
  });

  describe("When it receives a className value", () => {
    test("Then it should be a button with this className in the document", () => {
      const classNameButton = "start-button";

      render(<Button className={classNameButton} />);
      const classNameElement = screen.getByRole("button", {
        class: "start-button",
      });

      expect(classNameElement).toHaveClass("start-button");
    });
  });
});
