import React, { useState } from "react";

const Book = ({ bookDetails }) => {
  const [readingListFlag, setReadingListFlag] = useState(false);
  return bookDetails ? (
    <div
      style={{ border: "1px solid #000", margin: "30px" }}
      data-testid="book-component"
    >
      <h2>Selected book details</h2>
      <p data-testid="selected-bookName">
        <strong>Selected Book Name:</strong> {bookDetails?.name}
      </p>
      <p>
        <strong>Description:</strong> {bookDetails?.description}
      </p>
      <a href={bookDetails?.link}>Explore more</a>
      <p>Happy Reading!</p>
      <button
        onClick={() => setReadingListFlag(true)}
        style={{ margin: "4px" }}
        disabled={readingListFlag}
        data-testid="addBtn"
      >
        Add to reading list
      </button>
      <button
        onClick={() => setReadingListFlag(false)}
        style={{ margin: "4px" }}
        disabled={!readingListFlag}
        data-testid="removeBtn"
      >
        Remove from reading list
      </button>
      {readingListFlag && (
        <p style={{ color: "green" }}>
          Book successfully added to your reading list!
        </p>
      )}
      <br />
    </div>
  ) : (
    <p>Click on any book name to explore more!</p>
  );
};

export default Book;
