import React, { Component } from "react";

import Book from "../components/Book";
import { bookListConstant } from "../utils/constant";
export class BookList extends Component {
  state = {
    selectedBookList: null,
  };
  handleCellClick = (book) => {
    this.setState({ selectedBookList: book });
  };
  render() {
    const { selectedBookList } = this.state;
    return (
      <div>
        <h3>Welcome to my favourite book portal!</h3>
        <table className="booklist-table">
          <thead>
            <tr>
              <th>SI.No</th>
              <th>Book Name</th>
            </tr>
          </thead>
          <tbody>
            {bookListConstant.map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td
                    data-testid={`${book.id}-${book.name}`}
                    onClick={() => this.handleCellClick(book)}
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    {book.name}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <hr />
        <Book bookDetails={selectedBookList} />
      </div>
    );
  }
}

export default BookList;
