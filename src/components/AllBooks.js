import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Book from './Book';
import Form from './Form';

const AllBooks = () => {
  const books = useSelector((state) => state.bookReducer, shallowEqual);
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}

      <Form />
    </>
  );
};

export default AllBooks;
