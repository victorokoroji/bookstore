import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/books';

const AllBooks = () => {
  const books = useSelector((state) => state.bookReducer, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

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
