import { fireEvent, render, screen } from "@testing-library/react";
import Book from "./Book";

const mockProps = {
  id: 1,
  name: "React JS Book",
  description: "Learn Class Components, Hooks",
  link: "https://reactjs.org/",
};

describe("Book component", () => {
  it("to have default text- Click on any book name to explore more!", () => {
    render(<Book />);
    expect(
      screen.getByText("Click on any book name to explore more!")
    ).toBeInTheDocument();
  });
  it("to receive props and display results", () => {
    render(<Book bookDetails={mockProps} />);
    expect(screen.getByText("Selected book details")).toBeInTheDocument();
    expect(screen.getByText("React JS Book")).toBeInTheDocument();
    expect(
      screen.getByText("Learn Class Components, Hooks")
    ).toBeInTheDocument();
    expect(screen.getByText("Happy Reading!")).toBeInTheDocument();
  });
  it("checking add and remove functionality of reading list", () => {
    render(<Book bookDetails={mockProps} />);
    const addToReadingListBtnElm = screen.getByTestId("addBtn");
    const removeFromReadingListBtnElm = screen.getByTestId("removeBtn");
    expect(addToReadingListBtnElm).toBeEnabled();
    expect(removeFromReadingListBtnElm).toBeDisabled();
    fireEvent.click(addToReadingListBtnElm);
    expect(
      screen.getByText("Book successfully added to your reading list!")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Book successfully added to your reading list!")
    ).toHaveStyle("color: green");
    expect(addToReadingListBtnElm).toBeDisabled();
    expect(removeFromReadingListBtnElm).toBeEnabled();
    fireEvent.click(removeFromReadingListBtnElm);
    expect(
      screen.queryByText("Book successfully added to your reading list!")
    ).not.toBeInTheDocument();
    expect(addToReadingListBtnElm).toBeEnabled();
    expect(removeFromReadingListBtnElm).toBeDisabled();
  });
});
