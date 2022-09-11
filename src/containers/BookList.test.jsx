import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import BookList from "./BookList";
import App from "../App";

describe("BookList component", () => {
  it("to have welcome text- Welcome to my favourite book portal!", () => {
    render(<BookList />);
    screen.getByText("Welcome to my favourite book portal!");
  });
  it("should have the right snapshot", () => {
    const snapShotJson = renderer.create(<BookList />).toJSON();
    expect(snapShotJson).toMatchSnapshot();
  });
  it("render whole APP component to check the props working between both component", () => {
    render(<App />);
    const bookElement = screen.getByTestId("1-React JS Book");
    fireEvent.click(bookElement);
    expect(screen.getByText("Selected book details")).toBeInTheDocument();
    expect(screen.getByTestId("selected-bookName")).toHaveTextContent(
      "Selected Book Name: React JS Book"
    );
    expect(
      screen.getByText("Learn Class Components, Hooks")
    ).toBeInTheDocument();
  });
});
