import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Book from './Book';
import Form from './Form';

const AllBooks = () => {
  const books = useSelector((state) => state.bookReducer, shallowEqual);
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}

      <Form />
    </>
  );
};

export default AllBooks;
